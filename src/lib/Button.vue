<template>
  <button class="le-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="le-loadingIndicator"></span>
    <slot />
  </button>
</template>

<script lang="ts">
import { computed, PropType } from "vue";

export default {
  props: {
    theme: {
      type: String as PropType<'link' | 'text' | 'button'>,
      default: "button",
      validator: (val: string) => ['link', 'text', 'button'].includes(val),
    },
    size: {
      type: String as PropType<'big' | 'small' | 'normal'>,
      default: "normal",
      validator: (val: string) => ['big', 'small', 'normal'].includes(val),
    },
    level: {
      type: String as PropType<'main' | 'danger' | 'normal'>,
      default: "normal",
      validator: (val: string) => ['main', 'danger', 'normal'].includes(val),
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const { theme, size, level } = props;
    const classes = computed(() => {
      return {
        [`le-theme-${theme}`]: theme,
        [`le-size-${size}`]: size,
        [`le-level-${level}`]: level
      };
    });
    return { classes };
  }
};
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: red;
$grey: grey;
.le-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.le-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }
  &.le-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }
  &.le-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.le-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  &.le-theme-button {
    &.le-level-main {
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover,
      &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }
    &.le-level-danger {
      background: $red;
      border-color: $red;
      color: white;
      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }
  &.le-theme-link {
    &.le-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.le-theme-text {
    &.le-level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }
    &.le-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.le-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.le-theme-link,
  &.le-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
  > .le-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: le-spin 1s infinite linear;
  }
}
@keyframes le-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>