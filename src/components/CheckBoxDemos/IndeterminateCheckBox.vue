<demo>
    全选
</demo>

<template>
  <CheckBox v-model:value="checkAll" label="全选" :indeterminate="indeterminate" @change="handleCheckAll" />
  <check-box-group v-model:value="options">
    <CheckBox label="上海" />
    <CheckBox label="北京" />
    <CheckBox label="广州" />
    <CheckBox label="深圳" />
  </check-box-group>
</template>
<script lang="ts">
import CheckBox from "../../lib/CheckBox/CheckBox.vue";
import CheckBoxGroup from "../../lib/CheckBox/CheckBoxGroup.vue";
import { isSameStringArr } from "../../../utils";

import { reactive, toRefs, watchEffect, onMounted } from "vue";

const cityOptions = ["上海", "北京", "广州", "深圳"];

export default {
  components: { CheckBox, CheckBoxGroup },
  setup() {
    const state = reactive({
      options: ["上海"],
      checkAll: false,
      indeterminate: true,
    });
    const handleCheckAll = (check) => {
      if (check.checked) {
        state.indeterminate = false;
        state.checkAll = true;
        state.options = [...cityOptions];
      } else {
        state.checkAll = false;
        state.indeterminate = false;
        state.options = [];
      }
    };

    onMounted(() => {
      watchEffect(() => {
        const isSameArr = isSameStringArr(cityOptions, state.options);
        if (isSameArr) {
          state.checkAll = true;
          state.indeterminate = false;
        } else if (state.options.length === 0) {
          state.indeterminate = false;
          state.checkAll = false;
        } else {
          state.checkAll = false;
          state.indeterminate = true;
        }
      });
    });

    return {
      ...toRefs(state),
      handleCheckAll,
    };
  },
};
</script>
