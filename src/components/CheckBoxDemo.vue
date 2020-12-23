<template>
  <div class="checkBox-doc">
    <h2>CheckBox 复选框</h2>
    <Demo :component="BasicCheckBox" describe="最基本的用法" />
    <Demo :component="DisabledCheckBox" describe="设置disabled可以禁用" />
    <Demo :component="GroupCheckBox" describe="使用check-box-group可以实现多选框组" />
    <Demo :component="IndeterminateCheckBox" describe="使用check-box-group可以实现多选框组" />
  </div>
</template>

<script lang="ts">
import BasicCheckBox from "./CheckBoxDemos/BasicCheckBox.vue";
import DisabledCheckBox from "./CheckBoxDemos/DisabledCheckBox.vue";
import GroupCheckBox from "./CheckBoxDemos/GroupCheckBox.vue";
import IndeterminateCheckBox from "./CheckBoxDemos/IndeterminateCheckBox.vue";
import Demo from "./Demo.vue";

export default {
  components: { Demo },
  setup() {
    return {
      BasicCheckBox,
      DisabledCheckBox,
      GroupCheckBox,
      IndeterminateCheckBox
    };
  },
};
</script>

<style lang="scss" scoped>
.checkBox-doc {
  width: 100%;
}
</style>
