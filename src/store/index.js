import { createPinia } from 'pinia'

// 创建Pinia实例（不使用任何持久化插件）
const store = createPinia()

// 导出store实例
export default store

// 用于在入口文件中安装store
export function setupStore(app) {
  app.use(store) // 注册Pinia到Vue应用
}
