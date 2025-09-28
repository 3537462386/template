<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <view class="skill-button">
    {{ props.name }}
  </view>
</template>

<style scoped lang="scss">
.skill-button {
  width: 280rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80rpx;
  border-radius: 10rpx;
  background: #ffd150;
}
</style>
