<template>
  <div class="radio-doc">
    <h2>Radio 单选框</h2>
    <Demo :component="BasicRadio" describe="最基本的用法" />
    <Demo :component="DisabledRadio" describe="设置disabled以禁用" />
    <Demo :component="RadioGroup" describe="使用radio-group可以实现单选组" />
    <h2>API</h2>
    <Table :columns="columns" :dataSource="dataSource" />
    <h2>Methods</h2>
    <Table :columns="columns" :dataSource="dataSource2" />
  </div>
</template>

<script lang="ts">
import BasicRadio from "./RadioDemos/BasicRadio.vue";
import DisabledRadio from "./RadioDemos/DisabledRadio.vue";
import RadioGroup from "./RadioDemos/RadioGroup.vue";
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
      { params: "label", description: "radio文本说明", type: "string", default: "-" },
      { params: "name", description: "radio name 属性，用于分组", type: "string", default: "-" },
      { params: "disabled", description: "是否禁用", type: "boolean", default: "false" },
    ]);
    const dataSource2 = reactive([
      { params: "change", description: "radio/radio-group改变的回调", type: "(value: string) => void", default: "-" },
    ]);
    return {
      BasicRadio,
      DisabledRadio,
      RadioGroup,
      columns,
      dataSource,
      dataSource2
    };
  },
};
</script>

<style lang="scss" scoped>
.radio-doc {
  width: 100%;
}
</style>
