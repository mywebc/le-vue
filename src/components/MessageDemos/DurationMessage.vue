<demo>
自定义时长
</demo>
<template>
  <Button @click="openDefault">custom 1500ms</Button>
  <Button @click="openDefault2">custom 2000ms</Button>
</template>

<script lang="ts">
import { Message } from "../../lib/Message/index";
import Button from "../../lib/Button.vue";
import { ref } from "vue";

export default {
  components: { Button },
  setup() {
    const openDefault = () => {
      Message({
        message: "这是一条message",
        duration: 1500,
      });
    };
    const openDefault2 = () => {
      Message({
        message: "这是一条message",
        duration: 2000,
      });
    };
    return {
      openDefault,
      openDefault2,
    };
  },
};
</script>
