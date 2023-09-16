对vue的组件之间过度切换知识点比较薄弱，因此写一篇博客练习一下注意点。案例来源：`http://todo.zeroojs.com`

首先搭建如图所示结果，然后配置路由信息
![在这里插入图片描述](https://img-blog.csdnimg.cn/754b7c859d9c4f0c965b24ebd719dfb9.png)

```javascript
import { createRouter, createWebHistory } from "vue-router";

const routes: any = [
  {
    path: "/",
    component: () => import("@/pages/boards.vue"),
  },
  {
    path: "/example",
    component: () => import("@/pages/example/index.vue"),
    redirect: "/example/a",
    children: [
      {
        path: "a",
        component: () => import("@/pages/example/example-a.vue"),
      },
      {
        path: "b",
        component: () => import("@/pages/example/example-b.vue"),
      },
    ],
    // redirect: '/trans'
  },
  {
    path: "/trans",
    component: () => import("@/components/trans.vue"),
  },
  {
    path: "/create",
    component: () => import("@/pages/create.vue"),
  },
  {
    path: "/details",
    component: () => import("@/pages/details.vue"),
  },
  {
    path: "/progress",
    component: () => import("@/pages/progress.vue"),
  },
  {
    path: "/profil",
    component: () => import("@/pages/profil.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
```

# 基础组件切换
首先对trans组件进行操作
```html
  <div class="trans-box">
    <transition name="slide-fade">
      <div class="green-box" v-if="isNext" @click="toggle">Green-点我</div>
    </transition>
    <transition name="slide-fade">
      <div class="yellow-box" v-if="!isNext" @click="toggle">Yellow-点我</div>
    </transition>
  </div>
```

```javascript
import { ref } from "vue";
const isNext = ref<boolean>(true); //默认绿色显示

const toggle = () => {
  isNext.value = !isNext.value;
};
```
通过定位将两个图片进行层叠处理，这里在js中使用一个状态变量值，控制两个容器的显示和隐藏
```css
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
  transition: all 0.8s cubic-bezier(0.55, 0, 0.1, 1); //可以设置别的时间曲线
  user-select: none;
}
.yellow-box {
  background-color: yellow;
}
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/6f647a6f292f4a9d85854664fd30a00c.png)
然后通过过度组件`transition `来处理组件之间的切换，并给当前组件赋予了一个前置类名`slide-fade`。，设置了组件进入和离开的时候的样式。具体可以查看`http://todo.zeroojs.com/trans`样式

```javascript
/* slide-fade设置公共组件切换时候的动画 ,从左边进右边出，中间显示*/
.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(-50px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(50px); //相当于恢复原来位置，在该位置点消失
}
```

然后将上面完成的组件应用到example/index.vue组件中，搭建基本样式

```javascript
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
      路由放置位置占位
    </div>
  </div>
```

```javascript
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
}
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/ffd9c39864594e3db2a6a127bc596450.png)
然后添加`router-view`标签，但是不能直接写，直接写就无法处理一些组件切换需要完成的操作
          router-view匹配的内部数据都是匹配到路径放在该位置的组件信息
          1:：`router-view`标签使用使用`v-slot属性`，**并借助作用域插槽结构出子组件传递来的数据**
          2：`Component`：`虚拟DOM`，即子节点，借助component标签的is属性渲染为真实DOM，无法直接在`{{}}`语法中操作
          3：`route`：匹配到的子组件路由信息参数，入query，path等，可以简单理解为useRoute函数

```javascript
      <router-view v-slot="{ Component, route }">
        <component :is="Component"></component>
        <!-- 查看传递结果 -->
        {{ stringify(Component) }}--{{ route }}
      </router-view>
```

```javascript
const stringify = (component: any) => {
  console.log(component);
};
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/7a63616a9ac34116813e178a6f9a5650.png)
搭建底部样式，子容器样式可以在父容器中设置
```javascript
  .child {
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
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/b632b37cd5d0485b86eac158af40ab16.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/d760c38343fc4e449dc68ba6a274902f.png)
然后就是设置组件切换时候的样式，因为这里的过度组件标签没有设置`name`属性，因此使用默认的即可

```javascript
      <router-view v-slot="{ Component }">
        <transition>
          <component :is="Component" class="child"></component>
        </transition>
      </router-view>
```
谁需要过度，给谁添加过度属性,这样子组件的过去切换效果就完成了
```javascript
  .child{transition: all 0.5s ease-in;}

  .v-enter-from {
    opacity: 0;
    transform: translateX(-50px);
    font-size: 0;
  }
  .v-leave-to {
    opacity: 0;
    transform: translateX(50px);
    font-size: 0;
  }
```

