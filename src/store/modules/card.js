import { defineStore } from 'pinia'
import { reactive } from "vue";

export const cardStore = defineStore('card', () => {
  let cardList = reactive([])

  return {
    cardList
  }
})
