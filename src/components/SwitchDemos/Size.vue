<demo>
尺寸大小
</demo>

<template>
  <Switch v-model:value="value" />&nbsp;
  <Switch v-model:value="value" size="small" />&nbsp;
  <Switch v-model:value="value" size="large" />
</template>

<script lang="ts">
import Switch from "../../lib/Switch.vue";
import { ref } from "vue";
export default {
  components: { Switch },
  setup() {
    const value = ref(true);
    return {
      value
    };
  }
};
</script>
