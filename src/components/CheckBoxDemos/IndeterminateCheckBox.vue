<demo>
    全选
</demo>

<template>
  <CheckBox v-model:value="checkAll" label="全选" :indeterminate="indeterminate" />
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

import { ref, reactive } from "vue";

export default {
  components: { CheckBox, CheckBoxGroup },
  setup() {
    const checkAll = ref(false);
    const indeterminate = ref(true);
    const options = reactive([]);
    return {
      indeterminate,
      checkAll,
      options,
    };
  },
};
</script>
