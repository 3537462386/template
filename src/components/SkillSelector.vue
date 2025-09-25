<template>
  <view class="skill-selector">
    <view v-for="item in baseCardType" :key="item.value" class="skill-box" :class="{ selected: item?.selected }" @click="selectCardType(item.value)">
      {{ item.label }}
    </view>
  </view>
</template>
<script setup>
import { baseCardType } from '@/data/index.js'
import { ref } from 'vue'
import { onLaunch } from "@dcloudio/uni-app";

const cardList = ref([])

onLaunch(()=> {
  cardList.value = baseCardType.filter(item => {
    return item.type !== '延时锦囊'
  })
})

function selectCardType (val) {
  cardList.value = cardList.value.map(item => {
    if (item.value === val) {
      item.selected = !item?.selected
    }
    return item
  })
}

</script>
<style scoped lang="scss">
.skill-selector {
  width: 250rpx;
  height: 200rpx;
  display: flex;
  flex-wrap: wrap;

  .skill-box {
    height: 20rpx;
    padding: 5rpx;
    background: $uni-text-color-grey;
    font-size: 18rpx;
    line-height: 20rpx;
    text-align: center;

    &.selected {
      border: 1px solid $uni-color-primary;
    }
  }
}
</style>
