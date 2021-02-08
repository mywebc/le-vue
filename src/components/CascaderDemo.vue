<template>
  <div class="cascader-doc">
    <h2>Cascader 级联选择器</h2>
    <Demo :component="BasicCascader" describe="基本用法" />
    <Demo :component="Multilayer" describe="支持无限多层嵌套" />
    <Demo :component="DisabledCascader" describe="只需要在某项加上disabled：true即可" />
    <h2>API</h2>
    <Table :columns="columns" :dataSource="dataSource" />
    <h2>Methods</h2>
    <Table :columns="columns" :dataSource="dataSource2" />
  </div>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import BasicCascader from "./CascaderDemos/BasicCascader.vue";
import Multilayer from "./CascaderDemos/Multilayer.vue";
import DisabledCascader from "./CascaderDemos/DisabledCascader.vue";
import { reactive } from "vue";
import Table from "../lib/Table.vue";

export default {
  components: {
    Demo,
  },
  setup() {
    const columns = reactive([
      { text: "参数", field: "params" },
      { text: "说明", field: "description" },
      { text: "类型", field: "type" },
      { text: "默认值", field: "default" },
    ]);

    const dataSource = reactive([
      {
        params: "source",
        description: "级联选择器的数据源",
        type: "{name: string,value: string,disabled?: boolean,children?:[]}[]",
        default: "-",
      },
      {
        params: "popoverHeight",
        description: "自定义高度",
        type: "string",
        default: "200px",
      },
      {
        params: "selected",
        description: "v-model/选中绑定值",
        type: "{name: string,value: string,disabled?: boolean,children?:[]}[]",
        default: "-",
      },
      {
        params: "defaultSelected",
        description: "默认选种值",
        type: "string",
        default: "-",
      },
    ]);
    const dataSource2 = reactive([
      {
        params: "onChange",
        description: "级联选择器选中时的回调",
        type: "(value: string[]) => void",
        default: "-",
      },
    ]);
    return {
      BasicCascader,
      DisabledCascader,
      Multilayer,
      columns,
      dataSource,
      dataSource2,
      Table,
    };
  },
};
</script>

<style lang="scss" scoped>
.cascader-doc {
  width: 100%;
}
</style>
