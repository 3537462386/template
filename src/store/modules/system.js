import { defineStore } from 'pinia'
import { ref } from "vue";

export const systemStore = defineStore('system', () => {
  let isShowRoleCard = ref(false)

  const changeShowRoleCard = () => {
    isShowRoleCard.value = !isShowRoleCard.value
  }

  return {
    isShowRoleCard,
    changeShowRoleCard
  }
})
