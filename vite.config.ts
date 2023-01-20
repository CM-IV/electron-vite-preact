import { rmSync } from 'node:fs'
import path from 'node:path'
import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import electron from 'vite-electron-plugin'
import { customStart, loadViteEnv } from 'vite-electron-plugin/plugin'
import pkg from './package.json'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  rmSync('dist-electron', { recursive: true, force: true })

  const sourcemap = command === 'serve' || !!process.env.VSCODE_DEBUG

  return {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src')
      },
    },
    plugins: [
      preact(),
      electron({
        include: [
          'electron'
        ],
        transformOptions: {
          sourcemap,
        },
        plugins: [
          ...(!!process.env.VSCODE_DEBUG
            ? [
              // Will start Electron via VSCode Debug
              customStart(() => debounce(() => console.log(/* For `.vscode/.debug.script.mjs` */'[startup] Electron App'))),
            ]
            : []),
          // Allow use `import.meta.env.VITE_SOME_KEY` in Electron-Main
          loadViteEnv(),
        ],
      }),
    ],
    server: !!process.env.VSCODE_DEBUG ? (() => {
      const url = new URL(pkg.debug.env.VITE_DEV_SERVER_URL)
      return {
        host: url.hostname,
        port: +url.port,
      }
    })() : undefined,
    clearScreen: false,
  }
})

function debounce<Fn extends (...args: any[]) => void>(fn: Fn, delay = 299): Fn {
  let t: NodeJS.Timeout
  return ((...args: Parameters<Fn>) => {
    clearTimeout(t)
    t = setTimeout(() => fn(...args), delay)
  }) as Fn
}