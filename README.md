# webpack4-full-dynamic

- Install: npm i
- Run: npm start
- Url: https://localhost:8080


This repo is a boilerplate with Webpack4, Babel7, TypeScript and some fancy configuration, implementing the dynamic loading to expose the issue of dynamic loads.

Webpack 4 offers a cool dynamic import cf https://webpack.js.org/guides/code-splitting/#dynamic-imports

The issue is when you have some dynamic modules with shared dependencies, this code is included in every chunks which create wasted loaded code (after the first package has been loaded).

Also if a dynamic modules is requiring an other dynamic module, the code will be included, but later if the second module is required it will be downloaded again.
