## 安装

打开终端运行下列命令：

```js
npm install king-ui
// 或者
yarn add king-ui
```

## 引入组件

```js
import {Button, Tabs, Switch, Dialog} from "le-ui"
```

## Vue 单文件组件

```html
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
import {Button, Tabs, Switch, Dialog} from "le-ui"
export default {
  components: {Button}
}
</script>
```