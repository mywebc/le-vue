<demo>
基础用法
</demo>

<template>
  <Switch v-model:value="on" />&nbsp;
  <Switch v-model:value="off" />
</template>

<script lang="ts">
import Switch from "../../lib/Switch.vue";
import { ref } from "vue";
export default {
  components: { Switch },
  setup() {
    const on = ref(true);
    const off = ref(false);
    return { on, off };
  }
};
</script>
