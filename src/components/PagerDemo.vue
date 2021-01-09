<template>
  <div class="pager-doc">
    <h2>Pager 页码</h2>
    <Demo :component="BasicPager" describe="基础用法" />
    <Demo :component="MorePager" describe="显示更多页码的情况" />
    <Demo :component="SizePager" describe="迷你版本" />
    <Demo :component="SimplePager" describe="使用simple属性支持简洁模式" />
    <h2>API</h2>
    <Table :columns="columns" :dataSource="dataSource" />
     <h2>Methods</h2>
    <Table :columns="columns" :dataSource="dataSource2" />
  </div>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Table from "../lib/Table.vue";
import BasicPager from "./PagerDemos/BasicPager.vue";
import MorePager from "./PagerDemos/MorePager.vue";
import SimplePager from "./PagerDemos/SimplePager.vue";
import SizePager from "./PagerDemos/SizePager.vue";
import { reactive, isProxy } from "vue";

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
        params: "v-model/currentPage",
        description: "Pager绑定值，当前页码数",
        type: "number",
        default: "-",
      },
      {
        params: "totalPage",
        description: "Pager总页码数",
        type: "number",
        default: "-",
      },
      {
        params: "simple",
        description: "是否开启简洁模式",
        type: "boolean",
        default: "false",
      },
      {
        params: "size",
        description: "Pager尺寸，small | default",
        type: "string",
        default: "default",
      },
      {
        params: "hidePager",
        description: "页码数为1时是否隐藏Pager",
        type: "boolean",
        default: "true",
      },
    ]);
    const dataSource2 = reactive([
      {
        params: "currentChange",
        description: "页码数改变的回调",
        type: "(currentPage: number) => void",
        default: "-",
      },
      {
        params: "prevClick",
        description: "点击上一页触发的回调",
        type: "(currentPage: number) => void",
        default: "-",
      },
      {
        params: "simple",
        description: "点击下一页触发的回调",
        type: "(currentPage: number) => void",
        default: "-",
      },
    ]);
    return {
      BasicPager,
      MorePager,
      SimplePager,
      SizePager,
      columns,
      dataSource,
      dataSource2
    };
  },
};
</script>

<style lang="scss" scoped>
.pager-doc {
  width: 100%;
}
</style>
