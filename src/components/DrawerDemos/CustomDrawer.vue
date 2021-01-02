<demo>
自定义内容
</demo>
<template>
  <Drawer v-model:visible="visible">
    <template v-slot:title>
      <strong>标题</strong>
    </template>
    <template v-slot:content>
      <p>自定义的内容！！</p>
    </template>
  </Drawer>
  <Button @click="drawerDeafult">custom</Button>
</template>

<script lang="ts">
import Button from "../../lib/Button.vue";
import Drawer from "../../lib/Drawer.vue";
import { ref } from "vue";
export default {
  components: { Button, Drawer },
  setup() {
    const visible = ref(false);
    const drawerDeafult = () => {
      visible.value = !visible.value;
    };
    return {
      drawerDeafult,
      visible,
    };
  },
};
</script>
