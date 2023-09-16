<template>
  <div class="create-task-item" ref="taskItem">
    <h3>Social Media App</h3>
    <span>55%</span>
    <p>已完成</p>
  </div>
</template>

<script setup lang="ts">
import { watchEffect, ref } from "vue";
let props = defineProps(["itemColor"]);
const taskItem = ref();
watchEffect(() => {
  if (taskItem.value) {
    taskItem.value.style.backgroundColor = `var(${props.itemColor})`;
  }
});
</script>

<style lang="scss" scoped>
.create-task-item {
  width: 48%;
  background-color: orange;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  border-radius: 10px;
  color: #fff;
  h3 {
    margin-bottom: 30px;
  }
  span {
    font-size: 50px;
  }
}
</style>
