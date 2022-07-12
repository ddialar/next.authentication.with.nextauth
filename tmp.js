const crypto = require('crypto')

for (let index = 0; index < 15; index++) {
  console.log(crypto.randomUUID())
}
