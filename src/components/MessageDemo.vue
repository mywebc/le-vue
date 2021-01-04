<template>
  <div class="message-doc">
    <h2>Message 信息提示</h2>
    <Demo :component="BasicMessage" describe="基础用法" />
    <Demo
      :component="DurationMessage"
      describe="设置duration属性可以自定义时长，单位为毫秒，默认为1000ms"
    />
    <Demo :component="TypeMessage" describe="包括 info, success, error, warning。" />
    <Demo :component="CloseMessage" describe="可以添加关闭按钮" />
    <h4>
      组件可以通过正常方式引入使用，同时也提供静态方法，可以通过Message(Options)方式直接调用
    </h4>
    <br />
    <h2>Options</h2>
    <Table :columns="columns" :dataSource="dataSource" />
    <h2>Methods</h2>
    <Table :columns="columns" :dataSource="dataSource2" />
  </div>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Table from "../lib/Table.vue";
import BasicMessage from "./MessageDemos/BasicMessage.vue";
import DurationMessage from "./MessageDemos/DurationMessage.vue";
import TypeMessage from "./MessageDemos/TypeMessage.vue";
import CloseMessage from "./MessageDemos/CloseMessage.vue";

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
        description: "绑定值",
        type: "boolean",
        default: "false",
      },
      {
        params: "message",
        description: "信息提示文本",
        type: "string",
        default: "-",
      },
      {
        params: "duration",
        description: "message自定义时长",
        type: "number",
        default: "1000ms",
      },
      {
        params: "type",
        description: "message类型。有info，success，error，warning",
        type: "string",
        default: "info",
      },
      {
        params: "showClose",
        description: "是否显示关闭按钮",
        type: "boolean",
        default: "false",
      },
    ]);

    const dataSource2 = reactive([
      {
        params: "onClose",
        description: "关闭message的回调",
        type: "() => void",
        default: "-",
      },
    ]);
    return {
      BasicMessage,
      columns,
      dataSource,
      dataSource2,
      DurationMessage,
      TypeMessage,
      CloseMessage,
    };
  },
};
</script>

<style lang="scss" scoped>
.message-doc {
  width: 100%;
}
</style>
