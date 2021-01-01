<template>
  <div class="affix-doc">
    <h2>Button 按钮</h2>
    <Demo :component="BasicAffix" describe="基础用法" />
    <Demo :component="AssignAffix" describe="offsetTop指定距离顶部距离" />
    <h2>API</h2>
    <Table :columns="columns" :dataSource="dataSource" />
  </div>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Table from "../lib/Table.vue";
import BasicAffix from "./AffixDemos/BasicAffix.vue";
import AssignAffix from "./AffixDemos/AssignAffix.vue";
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
      BasicAffix,
      AssignAffix,
      columns,
      dataSource,
    };
  },
};
</script>

<style lang="scss" scoped>
.affix-doc {
  width: 100%;
}
</style>
