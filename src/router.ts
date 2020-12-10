// @ts-ignore
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import Switch from './components/SwitchDemo.vue';
import Form from './components/Form.vue';
import Select from './components/Select.vue';
import Input from './components/Input.vue';
import Button from "./components/ButtonDemo.vue";
import Dialog from "./components/DialogDemo.vue";
import Tabs from "./components/TabsDemo.vue";
import Icon from "./components/IconDemo.vue";

import intro from "./markdown/intro.md";
import getStarted from "./markdown/get-started.md"

import { h } from 'vue';
import Markdown from './components/Markdown.vue';

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
        path: "form",
        component: Form
      },
      {
        path: "input",
        component: Input
      },
      {
        path: "select",
        component: Select
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
      }
    ]
  }
  ]
})