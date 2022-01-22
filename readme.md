# Electron TypeScript React Boilerplate

Barebones Electron app with TypeScript and React support that **automatically
configures itself with a single command**. It will look like you set this up all
yourself while enabling you to just start coding your app.

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
  * Redux
    * `@reduxjs/toolkit`
    * `react-redux`

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

<img alt="Example Project preview" src="https://user-images.githubusercontent.com/407746/150650735-921e494c-346f-444d-b69d-736c414703b2.png" width="912">

Now you're ready to start developing your application!

## Project Structure

| Directory       | Purpose                                   |
| --------------- | ----------------------------------------- |
| `/src/main`     | Main thread code                          |
| `/src/renderer` | Renderer thread code                      |
| `/src/store`    | Redux store code (actions, reducers, etc) |

Built code resides in corresponding directories in `/dist`.

### Import Aliases

The following import aliases are defined for convenience:

| Alias | Path            |
| ----- | --------------- |
| `@`   | `/src`          |
| `@m`  | `/src/main`     |
| `@r`  | `/src/renderer` |
| `@s`  | `/src/store`    |

If you would like to add to or customize these import paths, make sure to update
both `webpack.config.js` and `tsconfig.json`. However, don't delete the existing
ones as this repo's base code may break. If you want to fix the imports yourself
after that, go right ahead! It isn't complicated. This boilerplate aims to be as
prescriptionless as possible, while being as ready to go out of the box as
possible. Do whatever you want!
