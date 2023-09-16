import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";

import "@/style/index.less";

createApp(App).use(router).mount("#app");
