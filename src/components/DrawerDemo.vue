<template>
  <div class="drawer-doc">
    <h2>Drawer 抽屉</h2>
    <Demo :component="BasicDrawer" describe="基础用法" />
    <Demo :component="CustomDrawer" describe="通过template来控制插入的内容,比如去除页脚" />
    <Demo :component="PlacementDrawer" describe="可以设置placement来控制在不同的位置出现" />
    <h2>API</h2>
    <Table :columns="columns" :dataSource="dataSource" />
     <h2>Methods</h2>
    <Table :columns="columns" :dataSource="dataSource2" />
  </div>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Table from "../lib/Table.vue";
import BasicDrawer from "./DrawerDemos/BasicDrawer.vue";
import PlacementDrawer from "./DrawerDemos/PlacementDrawer.vue"
import CustomDrawer from "./DrawerDemos/CustomDrawer.vue"
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
        params: "v-model/visible",
        description: "drawer是否可见",
        type: "boolean",
        default: "false",
      },
      {
        params: "title",
        description: "drawer标题",
        type: "string",
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
        description: "是否点击遮罩层可以关闭",
        type: "boolean",
        default: "true",
      },
      {
        params: "placement",
        description: "drawer出现的方位",
        type: "‘top’ | 'right' | 'bottom' | 'left'",
        default: "right",
      },
    ]);

    const dataSource2 = reactive([
      {
        params: "close",
        description: "drawer关闭时的回调",
        type: "() => void",
        default: "-",
      },
      
    ]);
    return {
      BasicDrawer,
      PlacementDrawer,
      columns,
      dataSource,
      dataSource2,
      CustomDrawer
    };
  },
};
</script>

<style lang="scss" scoped>
.drawer-doc {
  width: 100%;
}
</style>
