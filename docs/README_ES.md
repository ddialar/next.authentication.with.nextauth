![Repository cover](./img/repo-cover-es.png)

[🇬🇧 Version](https://github.com/ddialar/next.authentication.with.nextauth/blob/main/README.md)

# Authenticacion in NextJS applications using NextAuth.js

## 📖 Index

-   [Descripción](https://github.com/ddialar/next.authentication.with.nextauth/blob/main/docs/README_ES.md#description)
-   [Requisitos del sistema](https://github.com/ddialar/next.authentication.with.nextauth/blob/main/docs/README_ES.md#requirements)
-   [Variables de entorno](https://github.com/ddialar/next.authentication.with.nextauth/blob/main/docs/README_ES.md#environment-variables)
-   [Comandos básicos](https://github.com/ddialar/next.authentication.with.nextauth/blob/main/docs/README_ES.md#commands)
    -   [Cambiar la versión de Node](https://github.com/ddialar/next.authentication.with.nextauth/blob/main/docs/README_ES.md#commands-switch-node)
    -   [Proceso de instalación de módulos](https://github.com/ddialar/next.authentication.with.nextauth/blob/main/docs/README_ES.md#commands-installation)
    -   [Ejectuar los tests](https://github.com/ddialar/next.authentication.with.nextauth/blob/main/docs/README_ES.md#commands-tests)
    -   [Ejecutar la aplicación en modo desarrollo](https://github.com/ddialar/next.authentication.with.nextauth/blob/main/docs/README_ES.md#commands-dev-mode)
    -   [Compilar la aplicación](https://github.com/ddialar/next.authentication.with.nextauth/blob/main/docs/README_ES.md#commands-pro-mode)
-   [Documentación adicional](https://github.com/ddialar/next.authentication.with.nextauth/blob/main/docs/README_ES.md#documentation)

## <a id="description"></a>🔍 Descripción

Este repositorio está orientado a introducir el sustema de autenticación en aplicaciones basadas en NextJS, usando la librería NextAuth.js. 

En este caso, estamos implementando una aplicación TODO List muy sencilla.

Cada elemento TODO estará compuesto por un título, una descripción y un botón para marcar cada elemento como realizado.

Dependiendo del rol del usuario que esté autenticado (`user`, `manager` or `admin`), estarán disponibles diferentes partes del elemento TODO:

|Rol del usuario|`Título`|`Descripción`|`Botón`|
|:-|:-:|:-:|:-:|
|`user`|✅|🚫|🚫|
|`manager`|✅|✅|🚫|
|`admin`|✅|✅|✅|

El acceso a la información está implementado siguiendo la filosofía RBAC (Role Based Access Control).

Algunas de las herramientas empleadas en este repositorio son las siguientes:

-   📦 `NextJS` como el framework de la aplicación.
-   🔒 `JWT` como servicio de token.
-   ✉️ `SWR` como gestor de peticiones HTTP y de caché.
-   🧪 `Jest` para test unitario.
-   ⚙️ `dotenv` para gestionar las variables de entorno empleadas por la suit de testing.
-   🌱 `MongoDB` como motor de base de datos con `Mongoose` como ORM.
-   🔍 `ESLint` para revisión del código.
-   🐳 `Docker` para las operaciones de desarrollo y testing.

## <a id="requirements"></a>💻 Requisitos del sistema

PAra ejecutar el código en tu equipo, es recomendable cumplir con estos requisitos mínimos:

-   NodeJS 16.15.0
-   npm 8.5.5
-   npx 8.5.5
-   Docker 20.10.17
-   docker-compose 2.6.1

Además, es recomendable que también tengas lo siguiente:

-   nvm 0.39.1
-   Navegador web (recomendado Google Chrome 88.0)
-   Interfaz visual para base de datos (recomendado Robo 3T 1.4.1)
-   Editor de código (recomendado VScode 1.52.1)

## <a id="environment-variables"></a>⚙️ Variables de entorno

Para ejecutar las operaciones de desarrollo y testing, habrá definidos los siguientes archivos de entorno:

-   `.env.development`
-   `.env.test`

Los nombres seleccionados siguen las reglas de la documentación oficial de NextJS sobre este tema.

Los campos fundamentales que debemos incluir en estos archivos, son los siguientes:

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

## <a id="commands"></a>🔥 Comandos básicos

### <a id="commands-switch-node"></a>✅ Cambiar la versión de Node

```sh
nvm use
```

### <a id="commands-installation"></a>⬇️ Proceso de instalación de módulos

```sh
npm i
```

### <a id="commands-tests"></a>🧪 Ejectuar los tests

**Archivos requeridos:**

-   `.env.test`

```sh
# Unit and integration tests.
npm test
# Watch mode.
npm run test:watch
```

### <a id="commands-dev-mode"></a>🏭 Ejecutar la aplicación en modo desarrollo

**Archivos requeridos:**

-   `.env.development`

```sh
# Run the development infrastructure and the application.
npm run dev:local
# Run only the application. It requires the development infrastructure is up and running.
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) con tu navegador para ver el resultado.

### <a id="commands-pro-mode"></a>🚀 Compilar la aplicación

```sh
npm run build
```

## <a id="documentation"></a>📕 Documentación adicional

- [Enlace a la presentación](https://drive.google.com/file/d/1CV0E0O56jXdJJcHqKE_Ysc8QzC7ga7rx/view?usp=sharing)

