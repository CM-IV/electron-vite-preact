# electron-vite-preact

[![Required Node.JS >= 14.18.0 || >=16.0.0](https://img.shields.io/static/v1?label=node&message=14.18.0%20||%20%3E=16.0.0&logo=node.js&color=3f893e)](https://nodejs.org/about/releases)

## 👀 Overview

📦 Ready out of the box  
🌱 Easily extendable and customizable  
💪 Does NOT support Node.js API in the renderer process  
🔩 Supports C/C++ native addons  
🐞 Debugger configuration included  
🖥 Easy to implement multiple windows  

## 🛫 Quick start

```sh
pnpm install && pnpm run dev
```

## 📂 Directory structure

Familiar Preact application structure, just with `electron` folder on the top :wink:  
*Files in this folder will be separated from your React application and built into `dist/electron`*  

```tree
├── electron                  Electron-related code
│   ├── main                  Main-process source code
│   ├── preload               Preload-scripts source code
│   └── resources             Resources for the production build
│       ├── icon.icns             Icon for the application on macOS
│       ├── icon.ico              Icon for the application
│       ├── installerIcon.ico     Icon for the application installer
│       ├── uninstallerIcon.ico   Icon for the application uninstaller
|       └── iconset               
|           └── 256x256.png       Icon for the application on Linux
│
├── release                   Generated after production build, contains executables
│   └── {version}
│       ├── {os}-unpacked     Contains unpacked application executable
│       └── Setup.{ext}       Installer for the application
│
├── public                    Static assets
└── src                       Renderer source code, your React application
```

## 🚨 Be aware

This template does NOT integrate the Node.js API in the renderer process by default according to **Electron Security Concerns**. You will have to expose the needed API by yourself.

## ❔ FAQ

- [dependencies vs devDependencies](https://github.com/electron-vite/vite-plugin-electron/tree/main/packages/electron-renderer#dependencies-vs-devdependencies)
- [Using C/C++ native addons in renderer](https://github.com/electron-vite/vite-plugin-electron/tree/main/packages/electron-renderer#load-nodejs-cc-native-modules)
- [Node.js ESM packages](https://github.com/electron-vite/vite-plugin-electron/tree/main/packages/electron-renderer#nodejs-esm-packages) (e.g. `execa` `node-fetch`)
