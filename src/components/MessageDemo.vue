<template>
  <div class="message-doc">
    <h2>Message 信息提示</h2>
    <Demo :component="BasicMessage" describe="基础用法" />
    <h2>API</h2>
    <Table :columns="columns" :dataSource="dataSource" />
  </div>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Table from "../lib/Table.vue";
import BasicMessage from "./MessageDemos/BasicMessage.vue"

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
      BasicMessage,
      columns,
      dataSource,
    };
  },
};
</script>

<style lang="scss" scoped>
.message-doc {
  width: 100%;
}
</style>
