![Repository cover](./docs/img/repo-cover-en.png)

[🇪🇸 Versión](https://github.com/ddialar/next.authentication.with.nextauth/blob/main/docs/README_ES.md)

# Authentication in NextJS applications using NextAuth.js

## 📖 Index

-   [Description](https://github.com/ddialar/next.authentication.with.nextauth#description)
-   [System requirements](https://github.com/ddialar/next.authentication.with.nextauth#requirements)
-   [Environment variables](https://github.com/ddialar/next.authentication.with.nextauth#environment-variables)
-   [Commands guide](https://github.com/ddialar/next.authentication.with.nextauth#commands)
    -   [Switch Node version](https://github.com/ddialar/next.authentication.with.nextauth#commands-switch-node)
    -   [Modules installation process](https://github.com/ddialar/next.authentication.with.nextauth#commands-installation)
    -   [Run tests](https://github.com/ddialar/next.authentication.with.nextauth#commands-tests)
    -   [Run application in development mode](https://github.com/ddialar/next.authentication.with.nextauth#commands-dev-mode)
    -   [Build application](https://github.com/ddialar/next.authentication.with.nextauth#commands-pro-mode)
-   [Additional documentation](https://github.com/ddialar/next.authentication.with.nextauth#documentation)

## <a id="description"></a>🔍 Description

This repository is aimed to introduce the authentication system in applications based on NextJS, using the NextAuth.js library.

In this case, we are implementing a pretty simple TODO List application.

Every TODO item will be composed by a title, a description and a button to mark every one as done.

Depending on the role of the authenticated user (`user`, `manager` or `admin`), different parts of the TODO item will be available:

|User role|`Title`|`Description`|`Button`|
|:-|:-:|:-:|:-:|
|`user`|✅|🚫|🚫|
|`manager`|✅|✅|🚫|
|`admin`|✅|✅|✅|

The access to the information is implemented following the RBAC (Role Based Access Control) philosophy.

Some tools used on this repository are next:

-   📦 `NextJS` as framework for the application.
-   🔒 `JWT` as token service.
-   ✉️ `SWR` as requests and caching manager.
-   🧪 `Jest` for unit testing.
-   ⚙️ `dotenv` for handling the environment variables in the testing suites.
-   🌱 `MongoDB` as database engine with `Mongoose` a ORM.
-   🔍 `ESLint` for code linting and formating.
-   🐳 `Docker` for development and testing operations.

## <a id="requirements"></a>💻 System requirements

To run this code in your system, it must satisfy the next minimum requirements:

-   NodeJS 16.15.0
-   npm 8.5.5
-   npx 8.5.5
-   Docker 20.10.17
-   docker-compose 2.6.1

In addition, it's advisable to have next:

-   nvm 0.39.1
-   Web browser (recomended Google Chrome 88.0)
-   Database UI tool (recomended Robo 3T 1.4.1)
-   Code editor (recomended VScode 1.52.1)

## <a id="environment-variables"></a>⚙️ Environment variables

In order to run the development and testing tasks, there will be defined the next environment files:

-   `.env.development`
-   `.env.test`

The selected names are following the NextJS official documentation rules about this topic.

The most basic fields we must include on these files are next:

```sh
NODE_ENV=development | test

# NextAuthJS configuration.
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=<type here your preferred secret>

# Authentication providers configuration.
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
# 💡 Include here the rest of provider configurations based on your authentication needs.


# Persistance configuration.
# 💡 This is the configuration for the current Docker development environment definition.
MONGO_URI=mongodb://nextauthtalkdev:nextauthtalkdev@localhost:23032/nextauth_talk_dev

# Rest of the environment variables here.
```

## <a id="commands"></a>🔥 Commands guide

### <a id="commands-switch-node"></a>✅ Switch Node version

```sh
nvm use
```

### <a id="commands-installation"></a>⬇️ Modules installation process

```sh
npm i
```

### <a id="commands-tests"></a>🧪 Run tests

**Required files:**

-   `.env.test`

```sh
# Unit and integration tests.
npm test
# Watch mode.
npm run test:watch
```

### <a id="commands-dev-mode"></a>🏭 Run application in development mode

**Required files:**

-   `.env.development`

```sh
# Run the development infrastructure and the application.
npm run dev:local
# Run only the application. It requires the development infrastructure is up and running.
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### <a id="commands-pro-mode"></a>🚀 Build application

```sh
npm run build
```

## <a id="documentation"></a>📕 Additional documentation

- [Presentation slides](https://drive.google.com/file/d/10YSNhX6fD-ICzklO2c0761aAh0cC99a8/view?usp=sharing)
