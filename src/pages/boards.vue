<template>
  <transition name="slide-fade">
    <!-- 首页会跳转其他界面，因此需要设置过度效果 -->
    <div class="child-view">
      <div class="boards-header">
        <h1 class="page-title flex between container">
          <router-link to="/profil" class="profil-btn">
            <svg
              t="1694768287826"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="6702"
              width="24"
              height="24"
            >
              <path
                d="M660.563508 709.593852C700.821155 691.006812 737.070629 665.079468 767.850222 633.514438 833.346383 566.150028 873.859515 473.312208 873.859515 371.089224 873.859515 268.897744 833.346383 176.250377 767.850222 108.958996 702.173966 41.555922 611.700362 0 512.108895 0 412.370838 0 321.897235 41.555922 256.401074 108.847303 190.801603 175.915295 150.287076 268.601324 150.287076 371.089224 150.287076 473.575693 190.801603 566.374848 256.183285 633.514438 287.000572 665.085197 323.282156 691.006812 363.539803 709.593852 285.577957 734.581819 215.77765 778.603602 159.32955 836.39669 108.094447 889.133475 67.977803 952.834892 42.744876 1023.829362L120.968218 1023.829362C141.282723 978.346965 180.873703 926.439172 214.860115 891.428809 288.776093 815.796173 406.132572 755.737139 518.95897 755.737139 631.753259 755.737139 743.251792 815.796173 817.130077 891.428809 851.193273 926.439172 885.353781 978.346965 905.738089 1023.829362L981.255124 1023.829362C956.202291 952.834892 916.12474 889.133475 864.921747 836.581415 808.363355 778.603602 738.603536 734.581819 660.563508 709.593852ZM223.806756 366.47166C223.806756 285.762677 260.556634 212.986051 312.023262 160.196516 371.569912 98.864474 439.065316 75.25829 517.988713 75.25829 596.793616 75.25829 668.09857 112.488855 719.606216 165.314229 771.191336 218.311005 802.974589 291.325701 802.974589 372.241923 802.974589 453.150352 771.191336 526.373845 719.802183 579.077682 667.980077 631.988759 596.634108 675.878426 517.988713 675.878426 439.302301 675.878426 363.649399 637.819824 312.023262 584.902516 260.556634 532.033512 223.806756 453.028819 223.806756 372.241926L223.806756 366.47166Z"
                fill="#ffffff"
                p-id="6703"
              ></path>
            </svg>
          </router-link>

          <span>面板</span>

          <a href="https://github.com" target="_blank">
            <svg
              t="1694767202712"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="5412"
              width="32"
              height="32"
            >
              <path
                d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c0.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"
                p-id="5413"
                fill="#ffffff"
              ></path>
            </svg>
          </a>
        </h1>
        <Search></Search>
        <router-link tag="div" to="/create" class="create-task-btn flex">
          <div class="create-task-btn-prefix">
            <svg
              class="icon-plus"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.3684 8.36842H9.63158V1.63158C9.63158 1.28277 9.34881 1 9 1C8.65119 1 8.36842 1.28277 8.36842 1.63158V8.36842H1.63158C1.28277 8.36842 1 8.65119 1 9C1 9.34881 1.28277 9.63158 1.63158 9.63158H8.36842V16.3684C8.36842 16.7172 8.65119 17 9 17C9.34881 17 9.63158 16.7172 9.63158 16.3684V9.63158H16.3684C16.7172 9.63158 17 9.34881 17 9C17 8.65119 16.7172 8.36842 16.3684 8.36842Z"
                fill="white"
                stroke="white"
              />
            </svg>
          </div>
          创建任务
        </router-link>
      </div>
      <div class="boards-body container">
        <MyTask />
        <CreateTask></CreateTask>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import Search from "@/components/search.vue";
import MyTask from "@/components/mytask.vue";
import CreateTask from "@/components/createTask.vue";
</script>

<style lang="less">
/* 最小值154 */
.boards-header {
  min-height: 154px;
  padding: 48px 24px;
  border-radius: 0 0 30px 30px;
  /* 使用全局变量设置背景色 */
  background-color: var(--theme);
  color: #ffffff;
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.create-task-btn {
  cursor: pointer;
  color: inherit;
  text-decoration: none;
  padding: 6px;
  margin: 5px auto;
  user-select: none;
  border-radius: 6px;
  transition: 0.3s;
  &:hover {
    background-color: var(--theme-l);
    .create-task-btn-prefix {
      transform: rotate(180deg);
    }
  }

  .create-task-btn-prefix {
    width: 20px;
    height: 20px;
    padding: 2px;
    background-color: var(--yellow);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    transition: 1s ease;
    transform: rotate(0);
    .icon-plus {
      width: 12px;
      height: 12px;
    }
  }
}
.boards-body {
  margin-top: 20px;
}
</style>
