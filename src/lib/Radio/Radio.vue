<template>
  <div
    :class="{
      'le-radio': true,
      'le-radio-disabled': disabled,
    }"
  >
    <input type="radio" :id="label" :checked="value === label" :name="name" @change="handleChange" ref="inputRef" />
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
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:value", "change"],
  setup(props, ctx) {
    const inputRef = ref<HTMLInputElement>(null);
    const handleChange = () => {
      ctx.emit("update:value", inputRef.value.id);
      ctx.emit("change", inputRef.value.id);
    };

    return {
      handleChange,
      inputRef,
    };
  },
};
</script>

<style lang="scss" scoped>
.le-radio {
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
  &.le-radio-disabled {
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
