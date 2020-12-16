<demo>
禁用
</demo>

<template>
  <Radio v-model:value="radio" label="xxx" name="b" disabled>备选项</Radio> 
  <Radio v-model:value="radio" label="yyy" name="b" disabled>备选项</Radio>
</template>

<script lang="ts">
import Radio from "../../lib/Radio/Radio.vue";
import { ref } from "vue";

export default {
  components: { Radio },
  setup() {
    const radio = ref("yyy");
    return {
      radio,
    };
  },
};
</script>
