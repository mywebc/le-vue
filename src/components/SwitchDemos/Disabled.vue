<demo>
禁用状态
</demo>

<template>
  <Switch v-model:on="on" :disabled="true" />
</template>

<script lang="ts">
import Switch from "../../lib/Switch.vue";
import { ref } from "vue";
export default {
  components: { Switch },
  setup() {
    const on = ref(true);
    return { on };
  }
};
</script>
