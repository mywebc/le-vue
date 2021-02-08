<demo>
多层嵌套
</demo>
<template>
  <Cascader v-model:source="source" popover-height="100px" v-model:selected="selected" />
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
          {
            name: "大兴区",
            value: "daxing",
            children: [
              {
                name: "西红门镇",
                value: "xihongmeng",
                children: [{ name: "理想城", value: "lixiangchen" }],
              },
            ],
          },
          { name: "朝阳区", value: "chaoyan" },
        ],
      },
      {
        name: "上海",
        value: "shanghai",
        children: [
          { name: "黄浦区", value: "huangpu" },
          { name: "徐汇区", value: "xuhui" },
        ],
      },
    ]);
    const selected = reactive([]);

    return { source, selected };
  },
};
</script>
