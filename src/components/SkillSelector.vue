<template>
  <view class="skill-selector">
    <view v-for="item in cardList" :key="item.id" class="skill-box" :class="{ selected: item?.selected }" @click="selectCardType(item.id)">
      {{ item.label }}
    </view>
  </view>
</template>
<script setup>
import { cardStore } from '@/store'
import { computed } from "vue";

const card = cardStore()

const props = defineProps({
  cardOption: {
    type: Array,
    default: () => []
  },
})

const cardList = computed(() => {
  return props.cardOption.map((item) => {
    item.selected = card.cardList.includes(item.id)
    return item
  })
})

function selectCardType (id) {
  const index = card.cardList.indexOf(id);
  if (index > -1) {
    card.cardList.splice(index, 1);
  } else {
    card.cardList.push(id);
  }
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
