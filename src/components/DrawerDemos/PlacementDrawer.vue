<demo>
不同位置
</demo>
<template>
  <Drawer v-model:visible="visible" :placement="placement">
    <template v-slot:title>
      <strong>标题</strong>
    </template>
    <template v-slot:content>
      <p>这是一段信息。</p>
      <p>这是一段信息。</p>
      <p>这是一段信息。</p>
    </template>
    <template v-slot:footer>
      <Button @click="toggleDialog2" level="main">确认文本</Button>
    </template>
  </Drawer>
  <Button @click="handleDrawerRight">right</Button>
  <Button @click="handleDrawerLeft">left</Button>
  <Button @click="handleDrawerTop">top</Button>
  <Button @click="handleDrawerBottom">bottom</Button>
</template>

<script lang="ts">
import Button from "../../lib/Button.vue";
import Drawer from "../../lib/Drawer.vue";
import { ref } from "vue";
export default {
  components: { Button, Drawer },
  setup() {
    const visible = ref(false);
    const placement = ref("right");
    const handleDrawerRight = () => {
      visible.value = !visible.value;
      placement.value = "right";
    };
    const handleDrawerLeft = () => {
      visible.value = !visible.value;
      placement.value = "left";
    };
    const handleDrawerTop = () => {
      visible.value = !visible.value;
      placement.value = "top";
    };
    const handleDrawerBottom = () => {
      visible.value = !visible.value;
      placement.value = "bottom";
    };

    return {
      handleDrawerRight,
      handleDrawerLeft,
      handleDrawerTop,
      handleDrawerBottom,
      visible,
      placement,
    };
  },
};
</script>
