<template>
  <view class="container">
    <view class="side">
      <view>
        <view class="tool-box" @click="openLangXiDialog">狼袭</view>
        <view class="tool-box" @click="openTaoLuanDialog">滔乱</view>
      </view>
    </view>
    <view class="main">
      <view class="state">
        <view v-for="(item,index) in bloodList" :key="index" class="state-box">
          <image v-if="item" src="@/static/blood-action.png" />
          <image v-else src="@/static/blood.png"  />
        </view>
      </view>
      <view class="leftTopAction" @click="addBloodLimit"></view>
      <view class="leftBottomAction" @click="addBlood"></view>
      <view class="rightTopAction" @click="reduceBloodLimit"></view>
      <view class="rightBottomAction" @click="reduceBlood"></view>
    </view>

    <LangXiDialog ref="langXiDialogRef" />
    <TaoLuanDialog ref="taoLuanDialogRef" />
  </view>
</template>

<script setup>
import { reactive,ref } from 'vue'
import { onUnmounted } from 'vue'
import LangXiDialog from "../../components/tool/LangXiDialog.vue";
import TaoLuanDialog from "../../components/tool/TaoLuanDialog.vue";

const langXiDialogRef = ref(null)
const taoLuanDialogRef = ref(null)
function openLangXiDialog() {
  langXiDialogRef.value.openDialog()
}
function openTaoLuanDialog() {
  taoLuanDialogRef.value.openDialog()
}

// 创建音频
const innerAudioContext = uni.createInnerAudioContext()
const musicUrl = ['/static/music/background.mp3','123']

function playMusic(url) {
  innerAudioContext.stop()
  innerAudioContext.src = url

  innerAudioContext.load()
  innerAudioContext.play()
    .then(() => {
      console.log('音乐开始播放')
    })
    .catch(err => {
      console.error('播放失败:', err)
      uni.showToast({
        title: '播放失败',
        icon: 'none'
      })
    })
}

const bloodList = reactive([1,1,1,1])
const armorNums = reactive(0)

function addBlood() {
  for (let i = bloodList.length - 1; i >= 0; i--) {
    if (bloodList[i] === 0) {
      bloodList[i] = 1;
      break;
    }
  }
  playMusic(musicUrl[0])
}

function reduceBlood() {
  for (let i = bloodList.length - 1; i >= 0; i--) {
    if (bloodList[i] === 1) {
      bloodList[i] = 0;
      break;
    }
  }
  playMusic(musicUrl[1])
}

function addBloodLimit() {
  bloodList.push(0)
}

function reduceBloodLimit() {
  bloodList.pop()
}

onUnmounted(() => {
  innerAudioContext.destroy()
})

</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  position: absolute;

  .side {
    width: 200rpx;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50rpx 0;

    .tool-box {
      width: 280rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 80rpx;
      background: #ffd150;
    }
  }

  .main {
    flex: 1;
    height: 100%;
    position: relative;

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
    flex-wrap: wrap;

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

  .leftTopAction {
    position: absolute;
    left: 50rpx;
    bottom: 70rpx;
    width: 30rpx;
    height: 30rpx;
    border-radius: 50%;
    background: #9dbfff;
  }

  .rightTopAction {
    position: absolute;
    right: 50rpx;
    bottom: 70rpx;
    width: 30rpx;
    height: 30rpx;
    border-radius: 50%;
    background: #ff9dbf;
  }

  .leftBottomAction {
    position: absolute;
    left: 60rpx;
    bottom: 20rpx;
    width: 40rpx;
    height: 40rpx;
    border-radius: 50%;
    background: #fff100;
  }

  .rightBottomAction {
    position: absolute;
    right: 60rpx;
    bottom: 20rpx;
    width: 40rpx;
    height: 40rpx;
    border-radius: 50%;
    background: #58fbb5;
  }
}
}
</style>
