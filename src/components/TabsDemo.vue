<template>
  <div class="tabs_doc">
    <h2>Tabs 标签页</h2>
    <Demo :component="BasicDemo" describe="最基本的用法" />
    <Demo :component="DisabledTabs" describe="指定禁用选项" />
    <Demo :component="VerticalTabs" describe="垂直排列。" />

    <h2>API</h2>
    <Table :columns="columns" :dataSource="dataSource" />
    <h2>Methods</h2>
    <Table :columns="columns2" :dataSource="dataSource2" />
  </div>
</template>

<script lang="ts">
import { ref, reactive } from "vue";
import Table from "../lib/Table.vue";
import Demo from "./Demo.vue";
import BasicDemo from "./TabsDemos/BasicDemo.vue";
import DisabledTabs from "./TabsDemos/DisabledTabs.vue";
import VerticalTabs from "./TabsDemos/VerticalTabs.vue";
export default {
  components: { Demo, Table },
  setup() {
    const columns = reactive([
      {
        text: "参数",
        field: "params",
      },
      {
        text: "说明",
        field: "description",
      },
      {
        text: "类型",
        field: "type",
      },
      {
        text: "默认值",
        field: "default",
      },
    ]);

    const dataSource = reactive([
      {
        params: "v-model/selected",
        description: "默认的绑定值",
        type: "string",
        default: "-",
      },
      {
        params: "disabled",
        description: "是否禁用",
        type: "boolean",
        default: "false",
      },
      {
        params: "vertical",
        description: "是否开启垂直",
        type: "boolean",
        default: "false",
      },
    ]);
    return { BasicDemo, DisabledTabs, VerticalTabs, columns, dataSource };
  },
};
</script>

<style lang="scss" scoped>
.tabs_doc {
  width: 100%;
}
</style>
