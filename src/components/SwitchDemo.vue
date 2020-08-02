<template>
  <div class="switch_doc">
    <doc-title componentName="Switch 开关" componentTxt="开关选择器" componentDescription="需要在两种状态之间切换时。" />

    <example-template codeTitle="基本用法" codeDescription="用法描述">
      <template v-slot:components>
        <Switch
          v-model:value="switchVal"
          :disabled="false"
          @onChange="handleChange"
          trueColor="green"
        />
      </template>
      <template v-slot:code>
        <div>isShowCode</div>
      </template>
    </example-template>
  </div>
</template>
<script lang="ts">
import Switch from "../lib/Switch.vue";
import DocTitle from "../components/Doc/DocTitle.vue";
import ExampleTemplate from "../components/Doc/ExampleTemplate.vue";
import { ref } from "vue";

export default {
  components: { Switch, DocTitle, ExampleTemplate },
  setup() {
    const switchVal = ref(false);
    const handleChange = val => {};
    return { switchVal, handleChange };
  }
};
</script>
<style lang="scss" scoped>
.switch_doc {
  width: 100%;
  min-width: 100px;
  padding: 10px 40px;
}
</style>