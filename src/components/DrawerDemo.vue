<template>
  <div class="drawer-doc">
    <h2>Drawer 抽屉</h2>
    <Demo :component="BasicDrawer" describe="基础用法" />
    <h2>API</h2>
    <Table :columns="columns" :dataSource="dataSource" />
  </div>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Table from "../lib/Table.vue";
import BasicDrawer from "./DrawerDemos/BasicDrawer.vue";
import { reactive } from "vue";

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
        params: "offsetTop",
        description: "指定距离顶部的距离",
        type: "number",
        default: "0",
      },
    ]);
    return {
      BasicDrawer,
      columns,
      dataSource,
    };
  },
};
</script>

<style lang="scss" scoped>
.drawer-doc {
  width: 100%;
}
</style>
