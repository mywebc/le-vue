<template>
  <div
    :class="{
      'le-checkBox': true,
      'le-checkBox-disabled': disabled,
    }"
  >
    <input type="checkBox" :id="label" />
    <label :for="label">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </label>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  emits: ["update:value", "change"],

};
</script>

<style lang="scss" scoped>
.le-check-box {
}
</style>
