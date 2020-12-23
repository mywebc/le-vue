<demo>
    禁用状态
</demo>

<template>
  <CheckBox v-model:value="check_a" disabled label="备选项A"/>
  <CheckBox v-model:value="check_b" label="备选项B" indeterminate/>
</template>
<script lang="ts">
import CheckBox from "../../lib/CheckBox/CheckBox.vue";
import { ref } from "vue";

export default {
  components: { CheckBox },
  setup() {
    const check_a = ref(true);
    const check_b = ref(false);
    return {
      check_a,
      check_b,
    };
  },
};
</script>
