<demo>
禁用状态
</demo>
<template>
  <Cascader v-model:source="source" popover-height="200px" v-model:selected="selected" />
</template>

<script lang="ts">
import Cascader from "../../lib/Cascader/Cascader.vue";
import { reactive } from "vue";
export default {
  components: { Cascader },
  setup() {
    const source = reactive([
      {
        name: "北京",
        value: "beijing",
        children: [
          { name: "大兴区", value: "daxing" },
          { name: "朝阳区", value: "chaoyan" },
          { name: "通州区", value: "tongzhou", disabled: true },
        ],
      },
      {
        name: "上海",
        value: "shanghai",
        children: [
          { name: "黄浦区", value: "huangpu" },
          { name: "徐汇区", value: "xuhui" },
          { name: "宝山区", value: "baoshang" },
        ],
      },
      {
        name: "江苏省",
        value: "jiangsu",
        disabled: true,
        children: [
          { name: "南京市", value: "nanjing" },
          { name: "苏州市", value: "suzhou" },
          { name: "无锡市", value: "wuxi" },
        ],
      },
    ]);
    const selected = reactive([]);

    return { source, selected };
  },
};
</script>
