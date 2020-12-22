<template>
  <div class="checkBox-doc">
    <h2>CheckBox 复选框</h2>
    <Demo :component="BasicCheckBox" describe="最基本的用法" />
  </div>
</template>

<script lang="ts">
import BasicCheckBox from "./CheckBoxDemos/BasicCheckBox.vue";
import Demo from "./Demo.vue";

export default {
  components: { Demo },
  setup() {
    return {
      BasicCheckBox,
    };
  },
};
</script>

<style lang="scss" scoped>
.checkBox-doc {
  width: 100%;
}
</style>
