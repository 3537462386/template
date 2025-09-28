<template>
  <MyDialog v-model="isDialogVisible">
    <skill-selector />
  </MyDialog>
</template>
<script setup>
import MyDialog from "../MyDialog.vue";
import SkillSelector from "../SkillSelector.vue";
import {defineExpose, ref} from "vue";

const isDialogVisible = ref(false)

function openDialog() {
  isDialogVisible.value = true
}
defineExpose({openDialog})
</script>
<style scoped lang="scss">

</style>
