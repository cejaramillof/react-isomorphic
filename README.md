`npm install passport passport-http @hapi/boom axios`

Manejar cookies y sesiones durante passport
`npm install cookie-parser express-session`

para poder trabajar con async/await
`npm i @babel/polyfill`


redux-thunk, para enviar una función en un action, para ejecutarla y luego retornar el elemento (data, llamada api)
`npm i redux-thunk`

`npm i -D jest enzyme enzyme-adapter-react-16`


Bind al entorno poder usar las configuraciones o presets de babel en el proyecto.
`npm i @babel/register`


`npm i express dotenv`
`npm i -D nodemon` // reload server, --ignore frontend folder, para no reiniciar el servidor en cada editada de un archivo del front.

`npm i -D webpack-dev-middleware webpack-hot-middleware react-hot-loader`

`npm i react-router-config history react-router`

ignorara llamados a archivos css, para que no estallen desde el lado del servidor
`npm i ignore-styles`

para llamar archivos css desde node
`npm i asset-require-hook`

Remove
`"start": "webpack-dev-server --open --mode development",`

// también podemos enviarle las variables desde el package.json al build, pero no funciona en todos los OS, requeríría cross-env
`"build": "ENV=production webpack-cli --config webpack.config.js",`

optimizar el build, para comprimir assets
`npm i -D compression-webpack-plugin`

minificar javascript
`npm i -D terser-webpack-plugin`


`npm i -D webpack-manifest-plugin`

`npm i -D clean-webpack-plugin`

`npm i eslint eslint-loader`

-------
`npm outdated`
`npm update`

# Tecnologías
## Babel
Transforma el código a una version más antigua de ecma.

## Express
Framework de aplicaciones web basado en node.js, lo usamos para levantar un servidor que sirva la aplicación.

## ReactJS
Librería en javascript para crear componentes interactivos

# Client Side Rendering (CSR)
Servidor enviando respuestas al navegador, el browser descarga el JS, el navegador ejecuta React, y ahí el sitio es visible o interactuable.

# Server Side Rendering (SSR)
El Server-side rendering (o renderizado en la parte servidor) se basa en la posibilidad de poder renderizar el HTML de nuestros componentes en cadenas de texto en la parte servidor, vez de la parte cliente.

El servidor enviando respuesta en HTML, para ser renderizada en el navegador, Navegador renderiza el sitio. Ahora es visible mientras el navegador descarga el JS, Navegador ejecuta React, El sitio es interactivo.

## Ventajas
- La carga es mucho más rapida (performance)
- Mejor SEO
- Look & Feel

# NextJS
Create folder `next` -> npm init -> `npm i react react-dom next` -> `npm run start`
package.json:
```json
{
  "name": "nextjs",
  "version": "1.0.0",
  "description": "Next js en clase",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "next",
    "build": "next build",
    "start": "next start"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "next": "^9.2.1",
    "react": "^16.12.0",
    "react-dom": "^16.12.0"
  }
}
```

All inside a pages will be a url

# Gatsby
require install global `npm install -g gatsby-cli` -> `gatsby new react-video-gatsby` (download boilerplate and init project) -> `gatsby develop`