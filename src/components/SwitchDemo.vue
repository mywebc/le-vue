<template>
  <div class="switch_doc">
    <h2>Switch 开关</h2>
    <Demo :component="DefaultValue" describe="设置switch默认初始状态" />
    <Demo :component="Disabled" describe="使用diasble禁用switch" />
    <Demo :component="Size" describe="可以通过size设置尺寸大小" />
    <Demo :component="Loading" describe="设置loading,显示加载状态" />
    <h2>API</h2>
    <Table :columns="columns" :dataSource="dataSource" />
  </div>
</template>
<script lang="ts">
import Switch from "../lib/Switch.vue";
import DefaultValue from "./SwitchDemos/DefaultValue.vue";
import Disabled from "./SwitchDemos/Disabled.vue";
import Size from "./SwitchDemos/Size.vue";
import Loading from "./SwitchDemos/Loading.vue";
import Table from "../lib/Table.vue";
import Demo from "./Demo.vue";
import { ref, reactive } from "vue";

export default {
  components: { Switch, Demo, Table },
  setup() {
    const switchVal = ref(false);
    const handleChange = val => {};
    const columns = reactive([
      {
        text: "参数",
        field: "params"
      },
      {
        text: "说明",
        field: "description"
      },
      {
        text: "类型",
        field: "type"
      },
      {
        text: "默认值",
        field: "default"
      }
    ]);

    const dataSource = reactive([
      {
        params: "size",
        description: "尺寸大小",
        type: "small | large | normal",
        default: "normal"
      },
       {
        params: "disabled",
        description: "是否禁用",
        type: "boolean",
        default: "false"
      },
       {
        params: "loading",
        description: "是否显示加载",
        type: "boolean",
        default: "false"
      },
       {
        params: "onChange",
        description: "change回调",
        type: "(value: boolean) => void",
        default: "-"
      },
    ]);
    return {
      switchVal,
      handleChange,
      DefaultValue,
      Disabled,
      Size,
      Loading,
      columns,
      dataSource
    };
  }
};
</script>
<style lang="scss" scoped>
$border-color: #d9d9d9;
.switch_doc {
  width: 100%;
  .demo {
    border: 1px solid $border-color;
    margin: 16px 0 32px;
    > h2 {
      font-size: 20px;
      padding: 8px 16px;
      border-bottom: 1px solid $border-color;
    }
    &-component {
      padding: 16px;
    }
    &-actions {
      padding: 8px 16px;
      border-top: 1px dashed $border-color;
    }
    &-code {
      padding: 8px 16px;
      border-top: 1px dashed $border-color;
      > pre {
        line-height: 1.1;
        font-family: Consolas, "Courier New", Courier, monospace;
        margin: 0;
      }
    }
  }
}
</style>
