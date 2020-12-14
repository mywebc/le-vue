<template>
  <div
    :class="{
      'le-spin': true,
      'le-spin-normal': size === 'normal',
      'le-spin-small': size === 'small',
      'le-spin-big': size === 'big',
    }"
  >
    <Icon name="loading" />
    <div v-if="tip && tip !== ''" class="tip">{{ tip }}</div>
  </div>
</template>

<script lang="ts">
import Icon from "./Icon.vue";
import { PropType, computed } from "vue";

export default {
  props: {
    tip: {
      type: String,
    },
    size: {
      type: String as PropType<"small" | "big" | "normal">,
      default: "normal",
      validator: (val: string) => ["small", "big", "normal"].includes(val),
    },
  },
  components: { Icon },
};
</script>

<style lang="scss" scoped>
$primary: #409eff;

.le-spin {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .le-icon {
    fill: $primary;
    animation: le-spin 1s infinite linear;
  }
  &.le-spin-small {
    .le-icon {
      width: 1em;
      height: 1em;
    }
  }
  &.le-spin-normal {
    .le-icon {
      width: 1.4em;
      height: 1.4em;
    }
  }

  &.le-spin-big {
    .le-icon {
      width: 1.8em;
      height: 1.8em;
    }
  }
  .tip {
    font-size: 14px;
    color: $primary;
  }
}
</style>

