## 安装

打开终端运行下列命令：

```js
npm install le-vue-ui
// 或者
yarn add le-vue-ui
```

## 引入组件

```js
import { Button, Switch, Radio } from "le-vue-ui"
```

## Vue 单文件组件

```html
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
import { Button } from "le-vue-ui"
export default {
  components: { Button }
}
</script>
```