import "./styles/le.scss";
import "./styles/index.scss";
// @ts-ignore
import { createApp } from "vue";
// @ts-ignore
import App from "./App.vue";
// @ts-ignore
import { router } from "./router";

import "github-markdown-css";

const app = createApp(App);
app.use(router);
app.mount("#app");