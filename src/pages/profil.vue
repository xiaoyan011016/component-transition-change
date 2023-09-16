<template>
  <transition name="slide-fade">
    <div class="profil">
      <div class="page-header profil-header">
        <h1 class="page-title flex between container">
          <a href="javascript:;" @click="router.back()">
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
          <span>个人中心</span>
          <span></span>
        </h1>
      </div>
      <div class="profil-body">
        <div class="user">
          <div class="user-avatar"><div class="user-avatar-inner"></div></div>
          <div class="user-name">LuckYoung</div>
          <div class="user-more">China</div>
        </div>
        <div class="profil-info flex between container">
          <div class="first">
            <p>已关闭</p>
            <span>115</span>
          </div>
          <div class="second">
            <p>进行中</p>
            <span>23</span>
          </div>
          <div class="message-btn btn">消息</div>
        </div>
        <div class="profil-tab flex between container">
          <div class="first">
            <p>任务列表</p>
            <span></span>
          </div>
          <div class="second">
            <p>联系人</p>
          </div>
          <div class="third">
            <p>关于你</p>
          </div>
        </div>
        <ul class="task-list container">
          <li class="task-list-item">
            <div class="top">
              <span>进行中</span>
              <span>1天4时</span>
            </div>
            <div class="main">DashBoard Design</div>
            <div class="bottom">
              <div class="left">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15 7.08336C15.0029 8.18325 14.7459 9.26826 14.25 10.25C13.0508 12.6495 10.5991 14.1657 7.91667 14.1667C6.81678 14.1696 5.73176 13.9126 4.75 13.4167L0 15L1.58333 10.25C1.08744 9.26826 0.830466 8.18325 0.833334 7.08336C0.834372 4.40094 2.35056 1.94923 4.75 0.750024C5.73176 0.254133 6.81678 -0.00284397 7.91667 2.37401e-05H8.33334C11.9298 0.19844 14.8016 3.07018 15 6.66669V7.08336V7.08336Z"
                    stroke="#DDB90E"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>5</span>
              </div>
              <div class="right">
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
              </div>
            </div>
          </li>
          <li class="task-list-item">
            <div class="top">
              <span>进行中</span>
              <span>1天4时</span>
            </div>
            <div class="main">DashBoard Design</div>
            <div class="bottom">
              <div class="left">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15 7.08336C15.0029 8.18325 14.7459 9.26826 14.25 10.25C13.0508 12.6495 10.5991 14.1657 7.91667 14.1667C6.81678 14.1696 5.73176 13.9126 4.75 13.4167L0 15L1.58333 10.25C1.08744 9.26826 0.830466 8.18325 0.833334 7.08336C0.834372 4.40094 2.35056 1.94923 4.75 0.750024C5.73176 0.254133 6.81678 -0.00284397 7.91667 2.37401e-05H8.33334C11.9298 0.19844 14.8016 3.07018 15 6.66669V7.08336V7.08336Z"
                    stroke="#DDB90E"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>5</span>
              </div>
              <div class="right">
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<style lang="scss" scoped>
.profil {
  background-color: var(--theme);
  /* 该主页在蓝色和白色交界处需要做特殊样式处理，因此高度为100vh */
  min-height: 100vh;
  li {
    list-style-type: none;
  }
}
.page-header {
  min-height: 220px;
}
.profil-body {
  min-height: calc(100vh - 220px);
  padding: 0 12px 24px;
  background-color: #ffffff;
  border-radius: 30px 30px 0 0;
  .user {
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translateY(-55px);
    .user-avatar {
      width: 110px;
      height: 110px;
      border-radius: 18px;
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 12px;
      .user-avatar-inner {
        width: 100px;
        height: 100px;
        background-color: var(--grey-l);
        border-radius: 18px;
      }
    }
    .user-name {
      color: black;
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 10px;
    }
    .user-more {
      color: #7f7f7f;
      font-size: 16px;
    }
  }
  .profil-info {
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
    margin-bottom: 20px;
    p {
      color: #7f7f7f;
      font-size: 18px;
      margin-bottom: 5px;
    }
    span {
      font-size: 16px;
      margin-bottom: 15px;
    }
    .first,
    .second {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .message-btn {
      min-width: 120px;
      background-color: var(--yellow);
    }
  }
  .profil-tab {
    padding-bottom: 10px;
    p {
      font-size: 18px;
      font-weight: 600;
      color: var(--theme);
      margin-bottom: 10px;
    }
    .first {
      display: flex;
      flex-direction: column;
      align-items: center;

      span {
        width: 8px;
        height: 8px;
        background-color: var(--theme);
        border-radius: 50%;
      }
    }
  }
  .task-list {
    .task-list-item {
      background: #ffffff;
      box-shadow: 0px 2px 48px rgba(0, 0, 0, 0.08);
      border-radius: 18px;
      padding: 18px 12px;
      & ~ .task-list-item {
        margin-top: 24px;
      }
      .top {
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          font-size: 16px;
          &:first-of-type {
            color: red;
          }
        }
      }
      .main {
        margin-bottom: 10px;
      }
      .bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left {
          span {
            margin-left: 5px;
          }
        }
        .right {
          display: flex;
          .box {
            background-color: var(--grey-l);
            border-radius: 8px;
            width: 30px;
            height: 30px;
            & ~ .box {
              margin-left: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
