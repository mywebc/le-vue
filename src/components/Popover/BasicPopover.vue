<demo>
基本用法
</demo>

<template>
  <popover />
</template>

<script lang="ts">
import Popover from "../../lib/Popover.vue";
import { ref } from "vue";

export default {
  components: { Popover },
  setup() {
    const radio = ref("bbb");
    return {
      radio,
    };
  },
};
</script>
