// @ts-ignore
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import Switch from './components/SwitchDemo.vue';
import Input from './components/InputDemo.vue';
import Button from "./components/ButtonDemo.vue";
import Dialog from "./components/DialogDemo.vue";
import Tabs from "./components/TabsDemo.vue";
import Icon from "./components/IconDemo.vue";
import Rate from "./components/RateDemo.vue";
import Layout from "./components/LayoutDemo.vue";
import Spin from "./components/SpinDemo.vue";
import Radio from "./components/RadioDemo.vue";
import CheckBox from "./components/CheckBoxDemo.vue";

import intro from "./markdown/intro.md";
import getStarted from "./markdown/get-started.md"

import { h } from 'vue';
import Markdown from './components/Other/Markdown.vue';

const routerHistory = createWebHashHistory()
const md = filename => h(Markdown, { content: filename, key: filename })
export const router = createRouter({
  history: routerHistory,
  linkActiveClass: 'active',
  routes: [{
    path: '/',
    component: Home
  },
  {
    path: '/doc',
    component: Doc,
    children: [
      { path: "", redirect: '/doc/intro' },
      {
        path: "intro",
        component: md(intro)
      },
      {
        path: "get-started",
        component: md(getStarted)
      },
      {
        path: "switch",
        component: Switch
      },
      {
        path: "switch",
        component: Switch
      },
      {
        path: "input",
        component: Input
      },
      {
        path: "button",
        component: Button
      },
      {
        path: "dialog",
        component: Dialog
      },
      {
        path: "tabs",
        component: Tabs
      },
      {
        path: "icon",
        component: Icon
      },
      {
        path: "rate",
        component: Rate
      },
      {
        path: "layout",
        component: Layout
      },
      {
        path: "spin",
        component: Spin
      },
      {
        path: "radio",
        component: Radio
      },
      {
        path: "checkBox",
        component: CheckBox
      }
    ]
  }
  ]
})

router.afterEach((to, from) => {
  if(to.fullPath === '/doc/get-started') {
  //   if(location.href.indexOf("#reloaded")==-1){
  //     location.href=location.href+"#reloaded";
  //     location.reload();
  // }
  }
})
