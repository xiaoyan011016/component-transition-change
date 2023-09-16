<template>
  <div class="example">
    <div class="top">
      <h1>组件过度切换</h1>
      <Trans></Trans>
    </div>
    <div class="routerView">
      <div class="btn">
        <router-link to="/example/a" class="router-link-btn">按钮a</router-link>
        <router-link to="/example/b" class="router-link-btn">按钮b</router-link>
      </div>

      <router-view v-slot="{ Component }">
        <transition>
          <component :is="Component" class="child"></component>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import Trans from "../../components/trans.vue";
</script>

<style lang="scss" scoped>
.example {
  text-align: center;
  height: 100vh;
  width: 100%;
  .routerView {
    margin-top: 20px;
    .router-link-btn {
      display: inline-block;
      padding: 5px 10px;
      border: 2px solid #ccc;
      text-decoration: none;
      border-radius: 5px;
      color: initial; //设置初始值
      transition: all 0.5s;
      &.router-link-active {
        color: orange;
        border: 2px solid skyblue;
      }
      &:last-of-type {
        margin-left: 15px;
      }
    }
  }

  .child {
    transition: all 0.5s ease-in;
    width: 100%;
    min-height: 60vh;
    position: absolute;
    bottom: 0;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 60px;
  }
  /* 该组件内部的二级组件对于的外层容器类名 */
  .example-a {
    background: linear-gradient(270deg, #10311f, seagreen);
    /* fade函数完成一个淡出的特效 */
    text-shadow: 5px 5px 5px fade(black, 50);
  }
  .example-b {
    color: seagreen;
    background: linear-gradient(90deg, #10311f, black);
    /* fade函数完成一个淡出的特效 */
    text-shadow: 5px 5px 5px fade(seagreen, 30);
  }
  .v-enter-from {
    opacity: 0;
    transform: translateX(-100px);
    font-size: 0;
  }
  .v-leave-to {
    opacity: 0;
    transform: translateX(100px);
    font-size: 0;
  }
}
</style>
