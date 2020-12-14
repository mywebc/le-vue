<template>
  <div class="spin-doc">
    <h2>Spin 加载中</h2>
    <Demo :component="BasicSpin" describe="最基本的用法" />
    <Demo :component="SizeSpin" describe="各种大小。" />
    <Demo :component="TextSpin" describe="自定义描述文案。" />
    <h2>API</h2>
    <Table :columns="columns" :dataSource="dataSource" />
  </div>
</template>

<script lang="ts">
import BasicSpin from "./SpinDemos/BasicSpin.vue";
import TextSpin from "./SpinDemos/TextSpin.vue";
import SizeSpin from "./SpinDemos/SizeSpin.vue";
import Demo from "./Demo.vue";
import Table from "../lib/Table.vue";
import { reactive } from "vue";
export default {
  components: {
    Demo,
    Table,
  },
  setup() {
    const columns = reactive([
      { text: "参数", field: "params" },
      { text: "说明", field: "description" },
      { text: "类型", field: "type" },
      { text: "默认值", field: "default" },
    ]);

    const dataSource = reactive([
      { params: "size", description: "spin尺寸大小", type: "‘normal | 'big' | 'small'", default: "normal" },
      { params: "tip", description: "文案描述", type: "string", default: "-" },
    ]);
    return {
      BasicSpin,
      TextSpin,
      SizeSpin,
      columns,
      dataSource,
    };
  },
};
</script>

<style lang="scss" scoped>
.spin-doc {
  width: 100%;
}
</style>
