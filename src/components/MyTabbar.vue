<!-- components/CustomTabbar.vue -->
<template>
  <view class="my-tabbar">
    <view class="tab-item">首页</view>
    <view class="tab-item center-btn" @click="onCenterClick">
      <view class="circle-btn">+</view>
    </view>
    <view class="tab-item">工具</view>
  </view>
</template>

<script>
export default {
  methods: {
    onCenterClick() {
      // 处理中间按钮点击事件
    }
  }
}
</script>

<style lang="scss"  scoped>
.my-tabbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 60px;
  background: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 -2px 8px rgba(0,0,0,0.05);
  z-index: 100;
}
.tab-item {
  flex: 1;
  text-align: center;
  line-height: 60px;
  position: relative;
}
.center-btn {
  position: relative;
  top: -20px;
  z-index: 101;
}
.circle-btn {
  width: 60px;
  height: 60px;
  background: #409EFF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 32px;
  box-shadow: 0 2px 8px rgba(64,158,255,0.2);
}
</style>
