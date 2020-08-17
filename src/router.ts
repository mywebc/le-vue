// @ts-ignore
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Switch from './components/SwitchDemo.vue'
import Form from './components/Form.vue'
import Select from './components/Select.vue'
import Input from './components/Input.vue'
import Button from "./components/ButtonDemo.vue"


const routerHistory = createWebHistory()
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
    children: [{
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
    }
    ]
  }
  ]
})