<template>
  <div class="affix-doc">
    <h2>Popover 弹出层</h2>
    <Demo :component="BasicPopover" describe="基础用法" />
    <Demo :component="DirectionPopover" describe="支持四个不同方向" />
    <Demo :component="TriggerPopover" describe="支持click和hover" />
    <h2>API</h2>
    <Table :columns="columns" :dataSource="dataSource" />
  </div>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Table from "../lib/Table.vue";
import BasicPopover from "./Popover/BasicPopover.vue";
import DirectionPopover from "./Popover/DirectionPopover.vue";
import TriggerPopover from "./Popover/TriggerPopover.vue";
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
        params: "position",
        description: "触发方向,支持top,bottom,left,right",
        type: "string",
        default: "top",
      },
      {
        params: "trigger",
        description: "触发方式，支持click和hover",
        type: "string",
        default: "click",
      },
    ]);
    return {
      BasicPopover,
      DirectionPopover,
      TriggerPopover,
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
