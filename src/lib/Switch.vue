<template>
  <button class="le-switch" @click="handleClick" :class="classes">
    <span>
      <span v-if="loading"></span>
    </span>
  </button>
</template>

<script lang="ts" setup="props, context">
import { ref, computed, SetupContext } from "vue";

declare const props: {
  value: boolean;
  disabled?: boolean;
  size?: "small" | "large";
  loading?: boolean;
};
declare const context: SetupContext;

export default {};

export const handleClick = () => {
  if (props.disabled) return;
  context.emit("update:value", !props.value);
  context.emit("onChange", !props.value);
};

export const classes = computed(() => ({
  checked: props.value,
  disabled: props.disabled,
  large: props.size === "large",
  small: props.size === "small",
  loading: props.loading
}));
</script>

<style lang="scss" scoped>
$height: 22px;
$heightInner: $height - 4px;

$heightLarge: 26px;
$heightLargeInner: $heightLarge - 4px;

$heightSmall: 18px;
$heightSmallInner: $heightSmall - 4px;

$true-color: var(--true_color, #1890ff);
$false-color: var(--false_color, rgba(0, 0, 0, 0.4));

.le-switch {
  height: $height;
  width: $height * 2;
  border: none;
  border-radius: $height/2;
  background: $false-color;
  position: relative;
  > span {
    position: absolute;
    height: $heightInner;
    width: $heightInner;
    top: 2px;
    left: 2px;
    background: white;
    border-radius: $heightInner/2;
    transition: left 250ms;
  }
}

.le-switch.checked {
  background: $true-color;
  > span {
    left: calc(100% - #{$heightInner} - 2px);
  }
}

.le-switch.disabled {
  cursor: no-drop;
  opacity: 0.5;
}

.le-switch.large {
  height: $heightLarge;
  width: $heightLarge * 2;
  & > span {
    height: $heightLargeInner;
    width: $heightLargeInner;
    border-radius: $heightLargeInner/2;
  }
  &.checked.large {
    > span {
      left: calc(100% - #{$heightLargeInner} - 2px);
    }
  }
}

.le-switch.small {
  height: $heightSmall;
  width: $heightSmall * 2;
  & > span {
    height: $heightSmallInner;
    width: $heightSmallInner;
    border-radius: $heightSmallInner/2;
  }
  &.checked.small {
    > span {
      left: calc(100% - #{$heightSmallInner} - 2px);
    }
  }
}

.le-switch.loading {
  > span {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    > span {
      width: 12px;
      height: 12px;
      display: inline-block;
      border-radius: 8px;
      border-color: $false-color $false-color $false-color transparent;
      border-style: solid;
      border-width: 2px;
      animation: le-spin 1s infinite linear;
    }
  }
  cursor: no-drop;
  opacity: 0.5;
  pointer-events: none;
}

.le-switch:focus {
  outline: none;
}
</style>