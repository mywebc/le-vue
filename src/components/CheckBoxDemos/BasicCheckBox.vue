<demo>
基本用法
</demo>

<template>
  <CheckBox v-model:value="checked" label="备选项A" />
</template>

<script lang="ts">
import CheckBox from "../../lib/CheckBox/CheckBox.vue";
import { ref } from "vue";
export default {
  components: { CheckBox },
  setup() {
    const checked = ref(true);
    return {
      checked,
    };
  },
};
</script>
