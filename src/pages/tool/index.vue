<template>
  <view class="container">
    <view class="tool-box" @click="openLangXiDialog">狼袭</view>
    <view class="tool-box"@click="openTaoLuanDialog">滔乱</view>
    <view class="tool-box">狼袭</view>

    <LangXiDialog ref="langXiDialogRef" />
    <TaoLuanDialog ref="taoLuanDialogRef" />
  </view>
</template>
<script setup>
import { ref } from "vue"
import LangXiDialog from "../../components/tool/LangXiDialog.vue"
import TaoLuanDialog from "../../components/tool/TaoLuanDialog.vue";

const langXiDialogRef = ref(null)
const taoLuanDialogRef = ref(null)
function openLangXiDialog() {
  langXiDialogRef.value.openDialog()
}
function openTaoLuanDialog() {
  taoLuanDialogRef.value.openDialog()
}

</script>
<style scoped lang="scss">
.container {
  width: 750rpx;
  padding: 20rpx 60rpx;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .tool-box {
    width: 280rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80rpx;
    background: #ffd150;
    margin: 40rpx 0;
  }
}
</style>
