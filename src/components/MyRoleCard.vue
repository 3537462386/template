<template>
  <view class="container">
    <image :src="props.roleImg"></image>

    <view class="skill-box">
      <SkillButton
        v-for="item in props.skillList"
        :key="item.id"
        :name="item.name"
        @click="openDialog(item.id)"
      />
    </view>
  </view>
</template>
<script setup>
import SkillButton from "./SkillButton.vue";

const props = defineProps({
  skillList: {
    type: Array,
    default: () => [],
  },
  roleImg: {
    type: String,
    default: undefined,
  }
})

const emit = defineEmits(['use-skill'])

function openDialog(val) {
  emit('use-skill', val)
}
</script>
<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .skill-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
