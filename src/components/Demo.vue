<template>
  <div class="demo">
    <h2>{{component.__sourceCodeTitle}}</h2>
    <div class="demo-component">
      <component :is="component" />
    </div>
    <div class="demo-actions">
      <span>{{describe}}</span>
      <Button @click="toggleCode">Code</Button>
    </div>
    <div class="demo-code" v-if="codeVisible">
      <pre class="language-html" v-html="html" />
    </div>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import { computed, ref } from "vue";
const Prism = (window as any).Prism;
export default {
  components: {
    Button
  },
  props: {
    component: Object,
    describe: String
  },
  setup(props) {
    const html = computed(() => {
      return Prism.highlight(
        props.component.__sourceCode,
        Prism.languages.html,
        "html"
      );
    });
    const toggleCode = () => (codeVisible.value = !codeVisible.value);
    const codeVisible = ref(false);
    return {
      Prism,
      html,
      codeVisible,
      toggleCode
    };
  }
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
$fontSize-color: rgba(0, 0, 0, 0.65);
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    font-size: 14px;
    color: $fontSize-color;
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
</style>