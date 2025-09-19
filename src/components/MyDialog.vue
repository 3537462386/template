<template>
  <!-- 增加过渡动画 -->
  <transition name="dialog-fade">
    <view v-if="visible" class="dialog-overlay" @click.self="handleMaskClose">
      <view class="dialog-box">
        <slot></slot>
        <button class="dialog-close" @click="handleClose">关闭</button>
      </view>
    </view>
  </transition>
</template>

<script setup>
import {ref, watch, defineEmits, defineProps, defineExpose} from 'vue'

// 定义 props，支持受控模式
const props = defineProps({
  // 支持父组件通过 visible 控制显示/隐藏（受控）
  modelValue: {
    type: Boolean,
    default: false
  },
  // 是否点击遮罩层关闭
  closeOnClickMask: {
    type: Boolean,
    default: true
  }
})

// 定义事件（替代 onOpen/onClose props）
const emit = defineEmits(['update:modelValue', 'open', 'close'])

// 内部状态，结合 props 实现双向绑定
const visible = ref(props.modelValue)

// 监听 props 变化，同步到内部状态（受控模式）
watch(
  () => props.modelValue,
  (newVal) => {
    visible.value = newVal
  }
)

// 监听内部状态变化，通知父组件（双向绑定）
watch(
  visible,
  (newVal) => {
    emit('update:modelValue', newVal)
    // 触发 open/close 事件
    if (newVal) {
      emit('open')
    } else {
      emit('close')
    }
  }
)

// 打开对话框
function open() {
  visible.value = true
}

// 关闭对话框
function close() {
  visible.value = false
}

// 点击关闭按钮
function handleClose() {
  close()
}

// 点击遮罩层关闭（可配置）
function handleMaskClose() {
  if (props.closeOnClickMask) {
    close()
  }
}

// 暴露方法
defineExpose({open, close})
</script>

<style scoped>
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.dialog-box {
  width: 600rpx;
  background-color: #fff;
  border-radius: 16rpx;
  padding: 30rpx;
  box-sizing: border-box;
}

.dialog-close {
  margin-top: 20rpx;
  width: 100%;
  background-color: #f5f5f5;
}

.dialog-fade-enter-from,
.dialog-fade-leave-to {
  opacity: 0;
}

.dialog-fade-enter-active,
.dialog-fade-leave-active {
  transition: opacity 0.3s ease;
}

.dialog-box {
  transform: scale(0.9);
  transition: transform 0.3s ease;
}

.dialog-fade-enter-active .dialog-box,
.dialog-fade-leave-active .dialog-box {
  transform: scale(1);
}
</style>
