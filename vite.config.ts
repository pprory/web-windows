import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// @ts-ignore 忽略本行ts语法检测
import { resolve } from 'path'
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      // @ts-ignore
      { find: '~', replacement: resolve(__dirname, 'src') }
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/index.scss";`
      }
    }
  },
  server:{
    port: 8612
  }
})
