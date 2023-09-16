<template>
  <div class="create-task">
    <div class="title">
      <span>制订中的计划</span>
    </div>
    <div class="body">
      <CreateTaskItem itemColor="--yellow"></CreateTaskItem>
      <CreateTaskItem itemColor="--red"></CreateTaskItem>
      <CreateTaskItem itemColor="--pink"></CreateTaskItem>
      <CreateTaskItem itemColor="--theme"></CreateTaskItem>
    </div>
  </div>
</template>

<script setup lang="ts">
import CreateTaskItem from "./createTask-item.vue";
</script>

<style lang="scss" scoped>
.create-task {
  .title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  .body {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>
