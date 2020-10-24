<template>
  <div class="switch_doc">
    <div class="demo">
      <h2>支持 disabled</h2>
      <div class="demo-component">
        <Switch v-model:value="bool" disabled />
      </div>
      <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
      <div class="demo-code">
        <pre>&lt;Switch v-model:value="bool" disabled /&gt;</pre>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Switch from "../lib/Switch.vue";
import { ref } from "vue";

export default {
  components: { Switch },
  setup() {
    const switchVal = ref(false);
    const handleChange = val => {};
    return { switchVal, handleChange };
  }
};
</script>
<style lang="scss" scoped>
$border-color: #d9d9d9;
.switch_doc {
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