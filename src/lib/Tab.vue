<template>
  <div
    :class="{
      'le-tabs-tab': true,
    }"
  >
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
