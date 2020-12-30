<template>
  <div class="collapse-doc">
    <h2>Collapse 折叠面板</h2>
    <Demo :component="BasicCollapse" describe="最基本的用法" />
    <Demo :component="DisabledCollapse" describe="使用disabled禁用某一个面板" />
    <Demo :component="AccordionCollapse" describe="使用accordion设置为手风琴模式" />
    <h2>API</h2>
    <Table :columns="columns" :dataSource="dataSource" />
    <h2>Methods</h2>
    <Table :columns="columns" :dataSource="dataSource2" />
  </div>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import BasicCollapse from "./CollapseDemos/BasicCollapse.vue";
import DisabledCollapse from "./CollapseDemos/DisabledCollapse.vue";
import AccordionCollapse from "./CollapseDemos/AccordionCollapse.vue";
import Table from "../lib/Table.vue";
import { reactive } from "vue";

export default {
  components: { Demo, Table },
  setup() {
    const columns = reactive([
      { text: "参数", field: "params" },
      { text: "说明", field: "description" },
      { text: "类型", field: "type" },
      { text: "默认值", field: "default" },
    ]);

    const dataSource = reactive([
      {
        params: "v-model/defaultSpread",
        description: "绑定值",
        type: "number/number[]",
        default: "-",
      },
      {
        params: "accordion",
        description: "是否开启手风琴模式",
        type: "boolean",
        default: "false",
      },
      {
        params: "disabled(collapseItem)",
        description: "是否禁用某一块面板",
        type: "boolean",
        default: "false",
      },
    ]);
    const dataSource2 = reactive([
      {
        params: "change",
        description: "激活面板改变时触发的回调",
        type: "(value: number[]) => void",
        default: "-",
      },
    ]);
    return {
      BasicCollapse,
      DisabledCollapse,
      AccordionCollapse,
      columns,
      dataSource,
      dataSource2,
    };
  },
};
</script>
<style lang="scss" scoped>
.collapse-doc {
  width: 100%;
}
</style>
