<template>
  <router-view v-slot="{ Component }">
    <!-- 路由入口出设置组件路由切换过度效果 ,样式效果再全局组件中已有-->
    <transition name="slide-fade">
      <component class="child-view" :is="Component"></component>
    </transition>
  </router-view>
</template>

<script setup lang="ts"></script>

<style lang="scss"></style>
