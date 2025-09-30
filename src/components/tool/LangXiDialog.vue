<template>
  <MyDialog v-model="isDialogVisible">
    <view class="container">
      <text>本次造成</text>
      <text
        class="damage-text"
        :class="{ 'critical-hit': damage > 1 }"
      >
        {{ damage }}点伤害
      </text>
    </view>
  </MyDialog>
</template>

<script setup>
import {defineExpose, ref} from 'vue'
import MyDialog from "../MyDialog.vue";

const isDialogVisible = ref(false)
const damage = ref(0)

function getDamage() {
  damage.value = Math.floor(Math.random() * 3)
}

function openDialog() {
  isDialogVisible.value = true
  getDamage()
}

defineExpose({openDialog})
</script>
<style lang="scss" scoped>
.skill-box {
  width: 160prx;
}

.container {
  width: 300rpx;
  height: 300rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 32rpx;

  .damage-text {
    transition: all 0.3s ease;
    margin-top: 20rpx;

      &.critical-hit {
        color: #e53e3e;
        font-weight: bold;
        transform: scale(1.1);
      }
  }
}
</style>
