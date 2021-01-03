<template>
  <Button @click="openDefault"> default</Button>
</template>

<script lang="ts">
import { messageOpen } from "../../lib/Message/index";
import Button from "../../lib/Button.vue";

export default {
  components: { Button },
  setup() {
    const openDefault = () => {
      messageOpen({
        message: "这是一条message",
      });
    };
    return {
      openDefault,
    };
  },
};
</script>
