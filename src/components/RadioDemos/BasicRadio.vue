<demo>
基本用法
</demo>

<template>
  <Radio v-model:value="radio" label="aaa" name="a">备选项A</Radio>
  <Radio v-model:value="radio" label="bbb" name="a">备选项B</Radio>
</template>

<script lang="ts">
import Radio from "../../lib/Radio/Radio.vue";
import { ref } from "vue";

export default {
  components: { Radio },
  setup() {
    const radio = ref("bbb");
    return {
      radio,
    };
  },
};
</script>
