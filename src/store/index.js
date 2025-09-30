import { createPinia } from "pinia";

import { cardStore } from "./modules/card"
import { systemStore } from "./modules/system"

const store = createPinia()

store.use(({ store }) => {
  const initialState = JSON.parse(JSON.stringify(store.$state))
  store.$reset = () => {
    store.$patch(initialState)
  }
})

export default store

export { cardStore ,systemStore }
