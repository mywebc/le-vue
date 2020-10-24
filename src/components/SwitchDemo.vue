<template>
  <div class="switch_doc">
    <h2>Switch 开关</h2>
    <Demo :component="DefaultValue" describe="设置switch默认初始状态" />
    <Demo :component="Disabled" describe="使用diasble禁用switch" />
  </div>
</template>
<script lang="ts">
import Switch from "../lib/Switch.vue";
import DefaultValue from "./SwitchDemos/DefaultValue.vue";
import Disabled from "./SwitchDemos/Disabled.vue";
import Color from "./SwitchDemos/Color.vue";
import Demo from "./Demo.vue";
import { ref } from "vue";

export default {
  components: { Switch, Demo },
  setup() {
    const switchVal = ref(false);
    const handleChange = val => {};
    return { switchVal, handleChange, DefaultValue, Disabled, Color };
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
