<template>
  <div class="dialog-doc">
    <h2>Dialog 对话框</h2>
    <Demo :component="BasicDialog" describe="最基本的用法" />
    <Demo :component="FooterDialog" describe="Footer插槽允许你自定义页脚，不传即为不显示页脚" />
    <h2>API</h2>
    <Table :columns="columns" :dataSource="dataSource" />
    <h2>Slot</h2>
    <Table :columns="columns2" :dataSource="dataSource2" />
    <h2>Methods</h2>
    <Table :columns="columns2" :dataSource="dataSource3" />
  </div>
</template>

<script lang="ts">
import { ref, reactive } from "vue";
import Demo from "./Demo.vue";
import BasicDialog from "../components/DialogDemos/BasicDialog.vue";
import FooterDialog from "../components/DialogDemos/FooterDialog.vue";
import Table from "../lib/Table.vue";

export default {
  components: {
    Demo,
    Table,
  },
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
        params: "v-model/visible",
        description: "帮定值",
        type: "boolean",
        default: "-",
      },
      {
        params: "isShowOverlay",
        description: "是否显示遮罩层",
        type: "boolean",
        default: "true",
      },
      {
        params: "isCanClickOverlay",
        description: "遮罩层点击是否可以关闭",
        type: "boolean",
        default: "true",
      },
      {
        params: "loading",
        description: "是否显示加载",
        type: "boolean",
        default: "false",
      },
      {
        params: "level",
        description: "按钮等级",
        type: "main | danger | normal",
        default: "normal",
      },
    ]);

    const columns2 = reactive([
      { text: "name", field: "name" },
      { text: "说明", field: "description" },
    ]);

    const dataSource2 = reactive([
      { name: "title", description: "Dialog标题的内容" },
      { name: "content", description: "Dialog主体的内容" },
      { name: "footer", description: "Dialog页脚的内容" },
    ]);

    const dataSource3 = reactive([{ name: "close", description: "Dialog关闭的回调" }]);

    return {
      BasicDialog,
      FooterDialog,
      dataSource,
      columns,
      columns2,
      dataSource2,
      dataSource3,
    };
  },
};
</script>

<style lang="scss" scoped>
.dialog-doc {
  width: 100%;
}
</style>
