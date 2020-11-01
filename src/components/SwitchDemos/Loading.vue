<demo>
加载状态
</demo>

<template>
  <Switch v-model:value="value" :loading="true"/>&nbsp;
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
