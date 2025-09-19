<template>
  <view class="container">
    <view class="tool-box" @click="openLangXiDialog">狼袭</view>
    <view class="tool-box">狼袭</view>
    <view class="tool-box">狼袭</view>

    <LangXiDialog ref="langXiDialogRef" />
  </view>
</template>
<script setup>
import { ref } from "vue"
import LangXiDialog from "../../components/tool/LangXiDialog.vue"

const langXiDialogRef = ref(null)
function openLangXiDialog() {
  langXiDialogRef.value.openDialog()
}

</script>
<style scoped lang="scss">
.container {
  width: 750rpx;
  padding: 50rpx 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .tool-box {
    width: 280rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70rpx;
    background: #ffd150;
    margin: 10rpx 0;
  }
}
</style>
