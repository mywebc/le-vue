<demo>
多选框组
</demo>
<template>
  <check-box-group v-model:value="options">
    <CheckBox label="复选框A" />
    <CheckBox label="复选框B" />
    <CheckBox label="复选框C" />
    <CheckBox label="复选框D" disabled />
    <CheckBox label="复选框E" disabled />
  </check-box-group>
</template>

<script lang="ts">
import CheckBoxGroup from "../../lib/CheckBox/CheckBoxGroup.vue";
import CheckBox from "../../lib/CheckBox/CheckBox.vue";
import { reactive } from "vue";
export default {
  components: { CheckBoxGroup, CheckBox },
  setup() {
    const options = reactive(["复选框A", "复选框D"]);
    return { options };
  },
};
</script>

<style lang="scss" scoped></style>
