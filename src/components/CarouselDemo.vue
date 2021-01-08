<template>
  <div class="carousel-doc">
    <h2>Carousel 走马灯</h2>
    <Demo :component="BasicCarousel" describe="最基本的用法" />
    <Demo :component="SignCarousel" describe="可以设置左右箭头和下标指示器" />
    <Demo :component="Duration" describe="可以自定义动画时间，单位为ms，默认3000" />
    <Demo :component="AnimationCarousel" describe="支持关闭动画" />
    <h2>API</h2>
    <Table :columns="columns" :dataSource="dataSource" />
  </div>
</template>

<script lang="ts">
import BasicCarousel from "./CarouselDemos/BasicCarousel.vue";
import SignCarousel from "./CarouselDemos/SignCarousel.vue";
import Duration from "./CarouselDemos/Duration.vue";
import AnimationCarousel from "./CarouselDemos/AnimationCarousel.vue";
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
      { params: "selected", description: "默认name属性值", type: "string", default: "-" },
      { params: "height", description: "自定义高度", type: "number", default: "200" },
      {
        params: "autoPlay",
        description: "是否自动播放",
        type: "boolean",
        default: "true",
      },
      {
        params: "autoPlayDelay",
        description: "自动播放时间",
        type: "number",
        default: "300ms",
      },
      { params: "dots", description: "是否显示指示点", type: "boolean", default: "true" },
      {
        params: "arrow",
        description: "是否显示左右箭头",
        type: "boolean",
        default: "false",
      },
      {
        params: "animationEnabled",
        description: "是否开启动画",
        type: "boolean",
        default: "true",
      },
      {
        params: "name",
        description: "每个item的唯一id",
        type: "string",
        default: "-",
      },
    ]);
    return {
      BasicCarousel,
      SignCarousel,
      Duration,
      AnimationCarousel,
      columns,
      dataSource,
    };
  },
};
</script>

<style lang="scss" scoped>
.carousel-doc {
  width: 100%;
}
</style>
