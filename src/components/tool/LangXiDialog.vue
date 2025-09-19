<template>
  <MyDialog v-model="isDialogVisible">
    <view class="container">
      <text
        class="damage-text"
        :class="{ 'critical-hit': damage > 1 }"
      >
        本次造成{{ damage }}点伤害
      </text>
      <button @click="getDamage">狼袭</button>
    </view>
  </MyDialog>
</template>

<script setup>
import { defineExpose, ref } from 'vue'
import MyDialog from "../MyDialog.vue";

const isDialogVisible = ref(false)
const damage = ref(0)

function getDamage() {
  damage.value = Math.floor(Math.random() * 3)
}

function openDialog() {
  isDialogVisible.value = true
}

defineExpose({openDialog})
</script>
<style lang="scss" scoped>
.container {
  width: 200rpx;
  height: 200rpx;
  padding: 30rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30rpx;

  .damage-text {
    font-size: 32rpx;
    transition: all 0.3s ease;

    .damage-text {
      font-size: 32rpx;
      transition: all 0.3s ease;

      &.critical-hit {
        color: #e53e3e;
        font-weight: bold;
        transform: scale(1.1);
      }
    }
  }
}
</style>
