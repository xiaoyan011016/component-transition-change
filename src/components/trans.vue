<template>
  <div class="trans-box">
    <transition name="slide-fade">
      <div class="green-box" v-if="isNext" @click="toggle">Green-点我</div>
    </transition>
    <transition name="slide-fade">
      <div class="yellow-box" v-if="!isNext" @click="toggle">Yellow-点我</div>
    </transition>
  </div>
</template>

<script setup lang="ts">
// 通过状态值控制值控制两个容器切换
import { ref } from "vue";
const isNext = ref<boolean>(true); //默认绿色显示

const toggle = () => {
  isNext.value = !isNext.value;
};
</script>

<style lang="scss" scoped>
.trans-box {
  position: relative;
  max-width: 500px;
  margin: 20px auto;
  overflow: hidden;
  min-height: 200px;
}
.green-box,
.yellow-box {
  width: 100%;
  min-height: 200px;
  max-width: 500px;
  background-color: seagreen;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  /* 巴塞尔曲线 */
  transition: all 0.8s cubic-bezier(0.55, 0, 0.1, 1);
  user-select: none;
}
.yellow-box {
  background-color: yellow;
}

/* slide-fade设置公共组件切换时候的动画 ,从左边进右边出，中间显示*/
.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(-50px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(50px);
}
</style>
