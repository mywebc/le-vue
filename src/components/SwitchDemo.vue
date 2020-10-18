<template>
  <div class="switch_doc">
    <Switch v-model:value="switchVal" />
  </div>
</template>
<script lang="ts">
import Switch from "../lib/Switch.vue";
import { ref } from "vue";

export default {
  components: { Switch },
  setup() {
    const switchVal = ref(false);
    const handleChange = val => {};
    return { switchVal, handleChange };
  }
};
</script>
<style lang="scss" scoped>
.switch_doc {
  // width: 100%;
  // min-width: 100px;
  // padding: 10px 40px;
}
</style>