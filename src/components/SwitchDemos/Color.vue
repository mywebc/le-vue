<demo>
自定义开关颜色
</demo>

<template>
  <Switch v-model:value="value" trueColor="green" falseColor="red"/>
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
