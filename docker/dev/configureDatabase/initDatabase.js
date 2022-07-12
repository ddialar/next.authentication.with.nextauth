load('/docker-entrypoint-initdb.d/usersData.js')

const DATABASE_NAME = 'nextauth_talk_dev';

const apiDatabases = [
  {
    dbName: DATABASE_NAME,
    dbUsers: [
      {
        username: 'nextauthtalkdev',
        password: 'nextauthtalkdev',
        roles: [
          {
            role: 'readWrite',
            db: DATABASE_NAME,
          }
        ]
      }
    ],
    dbData: [
      {
        collection: 'users',
        data: usersData
      }
    ]
  }
]

const collections = {
  users: (db, userData) => db.users.insert(userData)
}

const createDatabaseUsers = (db, dbName, users) => {
  users.map(({ username, password, roles }) => {
    print(`[TRACE] Creating new user '${username}' into the '${dbName}' database...`)

    db.createUser({
      user: username,
      pwd: password,
      roles
    })

    print(`[INFO ] The user '${username}' has been created successfully.`)
  })
}

const populateDatabase = (db, data) => {
  if (data !== null && data.length > 0) {
    data.map((setOfData) => {
      print(`[TRACE] Persisting data of collection '${setOfData.collection}'...`)
      setOfData.data.map((document) => collections[setOfData.collection](db, document))
    })
  }
}

try {
  apiDatabases.map(({ dbName, dbUsers, dbData }) => {
    db = db.getSiblingDB(dbName)

    print(`[TRACE] Switching to '${dbName}' database...`)
    createDatabaseUsers(db, dbName, dbUsers)
    populateDatabase(db, dbData)
  })
} catch ({ message }) {
  print(`[ERROR ] ${message}`)
}
