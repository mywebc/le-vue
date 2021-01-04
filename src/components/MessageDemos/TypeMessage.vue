<demo>
不同的提示类型
</demo>
<template>
  <Button @click="openDefault('info')">info</Button>
  <Button @click="openDefault('error')">error</Button>
  <Button @click="openDefault('success')">success</Button>
  <Button @click="openDefault('warning')">warning</Button>
</template>

<script lang="ts">
import { Message } from "../../lib/Message/index";
import Button from "../../lib/Button.vue";
import { ref } from "vue";

export default {
  components: { Button },
  setup() {
    const openDefault = (type) => {
      Message({
        message: "这是一条message",
        type,
      });
    };
    return {
      openDefault,
    };
  },
};
</script>
