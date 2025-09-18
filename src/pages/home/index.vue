<template>
  <view class="container">
    <view class="state">
      <view v-for="(item,index) in bloodList" :key="index" class="state-box">
        <image v-if="item" src="@/static/blood-action.png" />
        <image v-else src="@/static/blood.png"  />
      </view>
    </view>
    <view class="leftAction">
      <view class="smallAction"></view>
      <view class="bigAction"></view>
    </view>
    <view class="rightAction">
      <view class="smallAction"></view>
      <view class="bigAction"></view>
    </view>
  </view>
</template>

<script setup>
import { reactive } from 'vue'

const bloodList = reactive([1,1,1,1])
const armorNums = reactive(0)

function addBlood() {
  for (let i = bloodList.length - 1; i >= 0; i--) {
    if (bloodList[i] === 0) {
      bloodList[i] = 1;
      break;
    }
  }
}

function reduceBlood() {
  for (let i = bloodList.length - 1; i >= 0; i--) {
    if (bloodList[i] === 1) {
      bloodList[i] = 0;
      break;
    }
  }
}

function addBloodLimit() {
  bloodList.push(0)
}

function reduceBloodLimit() {
  bloodList.pop()
}

</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  position: absolute;

  .state {
    width: 400rpx;
    height: 150rpx;
    padding: 30rpx;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    display: flex;
    justify-content: space-around;

    .state-box {
      width: 60rpx;
      height: 60rpx;
      display: flex;
      justify-content: center;
      align-items: center;

      image {
        width: 50rpx;
        height: 50rpx;
      }
    }
  }

  .leftAction {
    position: absolute;
    left: 30rpx;
    bottom: 50rpx;
    width: 100rpx;
    height: 100rpx;
  }

  .rightAction {
    position: absolute;
    right: 30rpx;
    bottom: 50rpx;
    width: 100rpx;
    height: 100rpx;
  }

  .smallAction {
    width: 30rpx;
    height: 30rpx;
  }

  .bigAction {
    width: 50rpx;
    height: 50rpx;
  }
}
</style>
