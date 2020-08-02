<template>
  <div class="example">
    <div class="components-demo">
      <slot name="components"></slot>
    </div>
    <div class="code-example">
      <div class="code-title">{{codeTitle}}</div>
      <div class="code-description">
        <div class="txt">{{codeDescription}}</div>
        <div class="icon" @click="codeToggleFun">开关</div>
      </div>
      <div :class="{'codeCommon':true , 'code-block' : codeToggle, 'code-none': !codeToggle}">
        <slot name="code"></slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
export default {
  props: {
    codeTitle: String,
    codeDescription: String
  },
  setup(props, context) {
    const codeToggle = ref(false);
    const codeToggleFun = () => {
      codeToggle.value = !codeToggle.value;
    };
    return { codeToggleFun, codeToggle };
  }
};
</script>

<style lang="scss" scoped>
.example {
  .components-demo {
    padding: 40px 32px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-bottom: none;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .code-example {
    position: relative;
    .code-title {
      display: inline-flex;
      justify-content: flex-start;
      align-items: center;
      background-color: #fff;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.85);
      position: absolute;
      top: -11px;
      left: 32px;
      line-height: 22px;
      z-index: 1;
      padding: 0 8px;
      cursor: default;
      border-radius: 4px;
    }
    .code-description {
      padding: 18px 32px;
      border: 1px solid rgba(0, 0, 0, 0.15);
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      color: rgba(0, 0, 0, 0.65);
      position: relative;
      font-size: 14px;
      line-height: 22px;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      color: rgba(0, 0, 0, 0.65);
      position: relative;
      .icon {
        position: absolute;
        right: 0;
        bottom: 2px;
      }
    }
    .codeCommon {
      transition: max-height 500ms;
      margin-top: -8px;
    }
    .code-block {
      max-height: 666px;
    }
    .code-none {
      max-height: 0;
      overflow: hidden;
    }
  }
}
</style>