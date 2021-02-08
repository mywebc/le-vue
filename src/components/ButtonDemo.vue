
<template>
  <div class="button_doc">
    <h2>Button 按钮</h2>
     <Demo :component="BtnType" describe="设置theme有不同的显示" />
     <Demo :component="BtnSize" describe="设置size有不同的大小尺寸" />
     <Demo :component="BtnLevel" describe="设置level,以获得不同的等级" />
     <Demo :component="BtnDisabled" describe="使用disabled设置禁止状态" />
     <Demo :component="BtnLoading" describe="使用loading设置加载状态" />
     <h2>API</h2>
    <Table :columns="columns" :dataSource="dataSource" />
  </div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
import BtnType from "./ButtonDemos/BtnType.vue";
import BtnSize from "./ButtonDemos/BtnSize.vue";
import BtnLevel from "./ButtonDemos/BtnLevel.vue";
import BtnDisabled from "./ButtonDemos/BtnDisabled.vue";
import BtnLoading from "./ButtonDemos/BtnLoading.vue";
import Table from "../lib/Table.vue";
import Demo from "./Demo.vue";
import { reactive } from "vue"

export default {
  components: { Button, Demo, Table },
  setup() {
    const onClick = () => {
      console.log("hi");
    };
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
        params: "theme",
        description: "按钮主题",
        type: "link | text | button",
        default: "button"
      },
      {
        params: "size",
        description: "尺寸大小",
        type: "small | big | normal",
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
        params: "level",
        description: "按钮等级",
        type: "main | danger | normal",
        default: "normal"
      },
    ]);
    return { 
        onClick,
        BtnType,
        BtnSize,
        BtnLevel,
        BtnDisabled,
        BtnLoading,
        dataSource,
        columns
      };
  }
};
</script>

<style lang="scss" scoped>
.button_doc {
  width: 100%;
  min-width: 100px;
  padding: 10px 40px;
}    
</style>