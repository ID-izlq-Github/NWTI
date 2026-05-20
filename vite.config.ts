import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // 部署到 GitHub Pages 时，base 应设为 '/<repo名>/'（如 '/NWTI/'）
  // 本地开发时不需要此配置 使用npm run dev 进行开发时，Vite 会自动处理路径问题
  base: '/NWTI/',
  plugins: [react()],
})
