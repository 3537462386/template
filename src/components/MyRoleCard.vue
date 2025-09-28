<template>
  <view class="container">
    <image :src="props.url"></image>

  </view>
</template>
<script setup>
const props = defineProps({
  url: {
    type: String,
    default: ''
  }
})
</script>
<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
}
</style>
