import { defineConfig, loadEnv, UserConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import * as path from 'path'
import { fileURLToPath, URL } from 'node:url'
import commonjs from '@rollup/plugin-commonjs'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd())
  console.log(command, mode, env)

  let config: UserConfig = {
    resolve: { alias: { '~': path.resolve(__dirname, './src'), '@': fileURLToPath(new URL('./src', import.meta.url)) } },
    css: {
      preprocessorOptions: {
        scss: { 
          charset: false,
          additionalData: 
            `@import "@/styles/var.scss";
             @import "@/styles/mixins.scss";
            `,
        },
      },
    },
    plugins: [uni(), commonjs()],
  }
  transpileDependencies: ['uview-plus']
  if (command === 'serve') {
    // 仅开发
    return config
  } else {
    // 生产
    return config
  }
})
