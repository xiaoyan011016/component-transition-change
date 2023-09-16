<template>
  <transition name="slide-fade">
    <div class="create-card">
      <div class="page-header create-card-header">
        <h1 class="page-title flex between container">
          <a href="#" @click="router.back()">
            <svg
              width="17"
              height="14"
              viewBox="0 0 17 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 7H0"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 13L0 7L6 1"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <span>创建一个任务卡片</span>
          <span></span>
        </h1>
      </div>
      <div class="create-card-input-group container">
        <div class="z-input">
          <label for="" class="z-input--label">标题</label>
          <input type="text" class="z-input--inner" placeholder="请输入标题" />
        </div>
        <div class="z-input">
          <label for="" class="z-input--label">创建时间</label>
          <input type="text" class="z-input--inner" />
        </div>
      </div>
      <div class="create-card-body">
        <div class="top container">
          <div class="item">
            <span>开始任务时间</span>
            <svg
              t="1694845699130"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3030"
              width="20"
              height="20"
            >
              <path
                d="M833 128c0-53-43-96-96-96h-16c-53 0-96 43-96 96H400c0-53-43-96-96-96h-16c-53 0-96 43-96 96H64c-35.3 0-64 28.7-64 64v736c0 35.3 28.7 64 64 64h896c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H833zM729 96c22.1 0 40 17.9 40 40v80c0 22.1-17.9 40-40 40s-40-17.9-40-40v-80c0-22.1 17.9-40 40-40z m-433 0c22.1 0 40 17.9 40 40v80c0 22.1-17.9 40-40 40s-40-17.9-40-40v-80c0-22.1 17.9-40 40-40z m632 832H96c-17.7 0-32-14.3-32-32V448h896v448c0 17.7-14.3 32-32 32z m32-544H64V224c0-17.7 14.3-32 32-32h96v32c0 53 43 96 96 96h16c53 0 96-43 96-96v-32h225v24c0 57.4 46.6 104 104 104s104-46.6 104-104v-24h95c17.7 0 32 14.3 32 32v160z"
                p-id="3031"
                fill="#f4ea2a"
              ></path>
            </svg>
          </div>
          <div class="item">
            <span>结束任务时间</span>
            <svg
              t="1694845699130"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3030"
              width="20"
              height="20"
            >
              <path
                d="M833 128c0-53-43-96-96-96h-16c-53 0-96 43-96 96H400c0-53-43-96-96-96h-16c-53 0-96 43-96 96H64c-35.3 0-64 28.7-64 64v736c0 35.3 28.7 64 64 64h896c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H833zM729 96c22.1 0 40 17.9 40 40v80c0 22.1-17.9 40-40 40s-40-17.9-40-40v-80c0-22.1 17.9-40 40-40z m-433 0c22.1 0 40 17.9 40 40v80c0 22.1-17.9 40-40 40s-40-17.9-40-40v-80c0-22.1 17.9-40 40-40z m632 832H96c-17.7 0-32-14.3-32-32V448h896v448c0 17.7-14.3 32-32 32z m32-544H64V224c0-17.7 14.3-32 32-32h96v32c0 53 43 96 96 96h16c53 0 96-43 96-96v-32h225v24c0 57.4 46.6 104 104 104s104-46.6 104-104v-24h95c17.7 0 32 14.3 32 32v160z"
                p-id="3031"
                fill="#f4ea2a"
              ></path>
            </svg>
          </div>
        </div>
        <div class="textarea container">
          <h2>任务描述</h2>
          <textarea placeholder="请输入任务描述" cols="30" rows="10"></textarea>
        </div>
        <div class="category container">
          <h2>任务类型</h2>
          <div class="category-body">
            <div class="category-tag">Desgin</div>
            <div class="category-tag active">Social Media Design</div>
            <div class="category-tag">Dashboard Design</div>
            <div class="category-tag">Dashboard Design</div>
            <div class="category-tag">Backend</div>
            <div class="category-tag">Backend</div>
            <div class="category-tag">Backend</div>
            <div class="category-tag">Backend</div>
            <div class="category-tag">Backend</div>
          </div>
        </div>
        <div class="member container">
          <h2>任务成员</h2>
          <div class="item">
            <div></div>
            <div></div>
            <div></div>
            <div class="active" @click="change(true)">
              <svg
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
                  fill="#4404AC"
                  stroke="#4404AC"
                />
              </svg>
            </div>
          </div>
        </div>
        <footer class="container">
          <button class="btn">立即创建一个任务</button>
        </footer>
        <div
          class="mask"
          :style="{ display: dialogFlag ? 'block' : 'none' }"
          @click="change(false)"
        ></div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";
const router = useRouter();
const dialogFlag = ref(false);
const change = (flag: boolean) => {
  dialogFlag.value = flag;
};
</script>

<style lang="scss" scoped>
.create-card {
  background-color: var(--theme);
  min-height: 100vh;
}

.z-input ~ .z-input {
  margin-top: 48px;
}
.z-input--label {
  display: block;
  color: var(--theme-ls);
  font-size: 12px;
  margin-bottom: 6px;
}
.z-input--inner {
  outline: none;
  display: inline-block;
  width: 100%;
  padding: 10px 0;
  background-color: transparent;
  border: unset;
  color: #ffffff;
  border-bottom: 1px solid var(--theme-l);
  font-size: initial;
}
.create-card-body {
  min-height: calc(100vh - (170px + 138px - 48px) - 96px);
  padding: 24px 12px;
  background-color: #ffffff;
  border-radius: 30px 30px 0 0;
  margin-top: 48px;

  .top {
    display: flex;
    align-items: center;
    justify-content: space-around;
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      span {
        font-weight: 600;
        font-size: 20px;
        margin-bottom: 10px;
      }
    }
  }
  .textarea {
    margin-bottom: 15px;
    h2 {
      font-size: 18px;
      margin-bottom: 15px;
    }
    textarea {
      width: 760px;
      height: 75px;
      border: 1px solid var(--theme-l);
      overflow: auto;
      max-width: 100%;
      padding: 6px;
      outline: none;
    }
  }
  .category {
    margin-bottom: 20px;
    h2 {
      font-size: 18px;
      margin-bottom: 10px;
    }
    .category-body {
      flex-wrap: wrap;
      .category-tag {
        display: inline-block;
        color: var(--grey);
        background-color: var(--grey-l);
        padding: 6px;
        user-select: none;
        margin: 5px;
        cursor: pointer;
        border-radius: 10px;
        &.active {
          background-color: var(--theme);
          color: #ffffff;
        }
      }
    }
  }
  .member {
    margin-bottom: 20px;
    h2 {
      font-size: 18px;
      margin-bottom: 10px;
    }
    .item {
      display: flex;
      div {
        background-color: var(--grey-l);
        border-radius: 8px;
        width: 50px;
        height: 50px;
        & ~ div {
          margin-left: 10px;
        }
        &.active {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #ffffff;
          border: 1px dashed var(--theme);
          cursor: pointer;
        }
      }
    }
  }
}
.mask {
  background-color: rgba(47, 47, 47, 0.5);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 99;
  transform: translate(-50%, -50%);

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 500px;
    border-radius: 15px;
    background-color: #ccc;
  }
}
</style>
