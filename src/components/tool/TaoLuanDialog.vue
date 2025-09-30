<template>
  <MyDialog v-model="isDialogVisible">
    <skill-selector :card-option="cardOption" />
  </MyDialog>
</template>
<script setup>
import MyDialog from "../MyDialog.vue";
import SkillSelector from "../SkillSelector.vue";
import {defineExpose, ref,computed} from "vue";
import { baseCardType } from "../../data";

const isDialogVisible = ref(false)
const cardOption = computed(() => {
  return baseCardType.filter((item) => {
   return item.type !==  '延时锦囊'
  })
})

function openDialog() {
  isDialogVisible.value = true
}
defineExpose({openDialog})
</script>
<style scoped lang="scss">

</style>
