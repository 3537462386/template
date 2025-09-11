import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'

import uniRouter from 'unplugin-uni-router/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    uniRouter(),
    AutoImport({
      imports: [
        {
          '@/api': ['useRequest']
        }
      ],
    }),
  ]
})
