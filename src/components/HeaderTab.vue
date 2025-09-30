<template>
  <view class="container">
    <text class="iconfont icon-touxiang" :class="{ 'active': system.isShowRoleCard }" @click="changeShowRoleCard"></text>
    <text class="iconfont icon-yifu"></text>
  </view>
</template>
<script setup>
import { systemStore } from '@/store'

const system = systemStore()

function changeShowRoleCard() {
  system.isShowRoleCard = !system.isShowRoleCard
}
</script>
<style scoped lang="scss">
.container {
  position: fixed;
  top: 0;
  right: 0;
  width: 160rpx;
  height: 30rpx;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.active {
  color: $uni-color-primary;
}
</style>
