<template>
  <div
    :class="{
      'le-checkBox': true,
      'le-checkBox-disabled': disabled,
    }"
  >
    <input type="checkBox" :id="label" :checked="value" @change="handleChange" ref="inputRef" :indeterminate="indeterminate" />
    <label :for="label">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </label>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: Boolean,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    indeterminate: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:value", "change"],
  setup(props, ctx) {
    const inputRef = ref<HTMLInputElement>(null);

    const handleChange = () => {
      ctx.emit("change", { value: props.label, checked: inputRef.value.checked });
    };
    return { handleChange, inputRef };
  },
};
</script>

<style lang="scss" scoped>
.le-checkBox {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 10px;
  label {
    display: inline-flex;
    padding-left: 10px;
    font-size: 14px;
  }
  &.le-checkBox-disabled {
    cursor: not-allowed;
    opacity: 0.4;
    input {
      cursor: not-allowed;
      pointer-events: none;
    }
    label {
      cursor: not-allowed;
      pointer-events: none;
    }
  }
}
</style>
