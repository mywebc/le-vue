<demo>
单选框组
</demo>
<template>
  <radio-group v-model:value="radio" @change="aa">
    <Radio label="aa">备忘录A</Radio>
    <Radio label="bb">备忘录B</Radio>
    <Radio label="cc">备忘录C</Radio>
  </radio-group>
</template>

<script lang="ts">
import RadioGroup from "../../lib/Radio/RadioGroup.vue";
import Radio from "../../lib/Radio/Radio.vue";
import { ref } from "vue";
export default {
  components: { RadioGroup, Radio },
  setup() {
    const radio = ref("cc");
    const aa = (x: string) => {
      console.log("change value", x);
    };
    return { radio, aa };
  },
};
</script>

<style lang="scss" scoped></style>
