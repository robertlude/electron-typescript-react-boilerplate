# electron-typescript-react-boilerplace

Barebones Electron app with TypeScript and React support that **automatically
configures itself with a single command.**

This repository includes the following minimally configured packages:
  * Electron
    * `electron`
  * Webpack
    * `webpack`
    * `webpack-cli`
  * Babel
    * `@babel/core`
    * `@babel/preset-env`
    * `@babel/preset-react`
    * `babel-loader`
  * Typescript
    * `ts-loader`
    * `typescript`
  * React
    * `@types/react`
    * `@types/react-dom`
    * `react`
    * `react-dom`

## Usage

Clone this repository in a directory of your choice:

```sh
git clone git@github.com:robertlude/electron-typescript-react-boilerplate.git example-project
cd example-project
```

Run the init script:

```sh
./init
```
```
Removing Git...
Renaming project...
  Package name (example-project):
  Human readable name (Example Project):
Reconfiguring package...
  Version (0.1.0):
  Description:
  Author:
  License (UNLICENSED):
Installing dependencies...
Removing init...
Initializing readme...
Initializing Git...
Switched to a new branch 'main'
Complete!
```

Run your new app:

```sh
npm run build && npm run start
```

<img width="912" src="https://user-images.githubusercontent.com/407746/150650735-921e494c-346f-444d-b69d-736c414703b2.png">

Now you're ready to start developing your application!

## Project Structure

Main thread code goes in `/src/main`. Renderer code goes in `/src/renderer`.

Built code resides in corresponding directories in `/dist`.
