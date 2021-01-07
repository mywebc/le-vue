<template>
  <div class="carousel-doc">
    <h2>Carousel 走马灯</h2>
    <Demo :component="BasicCarousel" describe="最基本的用法" />
    <h2>API</h2>
    <Table :columns="columns" :dataSource="dataSource" />
    <h2>Methods</h2>
    <Table :columns="columns" :dataSource="dataSource2" />
  </div>
</template>

<script lang="ts">
import BasicCarousel from "./CarouselDemos/BasicCarousel.vue"
import Demo from "./Demo.vue";
import Table from "../lib/Table.vue";
import { reactive } from "vue";

export default {
  components: { Demo, Table },
  setup() {
    const columns = reactive([
      { text: "参数", field: "params" },
      { text: "说明", field: "description" },
      { text: "类型", field: "type" },
      { text: "默认值", field: "default" },
    ]);

    const dataSource = reactive([
      { params: "v-model/value", description: "绑定值", type: "string", default: "-" },
      { params: "label", description: "checkBox文本说明", type: "string", default: "-" },
      { params: "indeterminate", description: "checkBox中间状态", type: "boolean", default: "false" },
      { params: "disabled", description: "是否禁用", type: "boolean", default: "false" },
    ]);
    const dataSource2 = reactive([
      { params: "change", description: "checkBox改变的回调", type: "(value: string) => void", default: "-" },
      { params: "change", description: "check-box-group改变的回调", type: "(value: string[]) => void", default: "-" },
      ]);
    return {
      BasicCarousel,
      columns,
      dataSource,
      dataSource2,
    };
  },
};
</script>

<style lang="scss" scoped>
.carousel-doc {
  width: 100%;
}
</style>
