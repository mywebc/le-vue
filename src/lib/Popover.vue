<template>
  <div class="le-popover" ref="popoverRef">
    <div
      ref="contentWrapperRef"
      class="content-wrapper"
      v-if="visible"
      :class="{ [`position-${position}`]: true }"
    >
      <slot name="content" :close="close"></slot>
    </div>
    <span ref="triggerWrapperRef" style="display: inline-block">
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts">
import { onMounted, computed, ref, nextTick, PropType, onUnmounted } from "vue";
export default {
  props: {
    position: {
      type: String as PropType<"top" | "bottom" | "left" | "right">,
      default: "top",
      validator: (value: string) =>
        ["top", "bottom", "left", "right"].indexOf(value) >= 0,
    },
    trigger: {
      type: String,
      default: "click",
      validator: (value: string) => ["click", "hover"].indexOf(value) >= 0,
    },
  },

  setup(props, ctx) {
    const popoverRef = ref(null);
    const contentWrapperRef = ref(null);
    const visible = ref(false);
    const triggerWrapperRef = ref(null);

    onMounted(() => {
      if (props.trigger === "click") {
        popoverRef.value.addEventListener("click", onClick);
      } else {
        popoverRef.value.addEventListener("mouseenter", open);
        popoverRef.value.addEventListener("mouseleave", close);
      }
    });

    onUnmounted(() => {
      if (props.trigger === "click") {
        popoverRef.value?.removeEventListener("click", onClick);
      } else {
        popoverRef.value?.removeEventListener("mouseenter", open);
        popoverRef.value?.removeEventListener("mouseleave", close);
      }
    });

    const openEvent = computed(() => {
      if (props.trigger === "click") {
        return "click";
      } else {
        return "mouseenter";
      }
    });

    const closeEvent = computed(() => {
      if (props.trigger === "click") {
        return "click";
      } else {
        return "mouseleave";
      }
    });

    const positionContent = () => {
      document.body.appendChild(contentWrapperRef.value);
      const {
        width,
        height,
        top,
        left,
      } = triggerWrapperRef.value.getBoundingClientRect();
      const { height: height2 } = contentWrapperRef.value.getBoundingClientRect();
      let positions = {
        top: { top: top + window.scrollY, left: left + window.scrollX },
        bottom: {
          top: top + height + window.scrollY,
          left: left + window.scrollX,
        },
        left: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + window.scrollX,
        },
        right: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + window.scrollX + width,
        },
      };
      contentWrapperRef.value.style.left = positions[props.position].left + "px";
      contentWrapperRef.value.style.top = positions[props.position].top + "px";
    };

    const onClickDocument = (e) => {
      if (
        popoverRef.value &&
        (popoverRef.value === e.target || popoverRef.value.contains(e.target))
      ) {
        return;
      }
      if (
        contentWrapperRef &&
        (contentWrapperRef.value === e.target ||
          contentWrapperRef.value.contains(e.target))
      ) {
        return;
      }
      close();
    };

    const open = () => {
      visible.value = true;
      nextTick(() => {
        positionContent();
        document.addEventListener("click", onClickDocument);
      });
    };

    const close = () => {
      visible.value = false;
      document.removeEventListener("click", onClickDocument);
    };

    const onClick = (event) => {
      if (triggerWrapperRef.value.contains(event.target)) {
        if (visible.value === true) {
          close();
        } else {
          open();
        }
      }
    };

    return {
      popoverRef,
      openEvent,
      closeEvent,
      positionContent,
      contentWrapperRef,
      visible,
      triggerWrapperRef,
      open,
      close,
      onClick,
    };
  },
};
</script>

<style scoped lang="scss">
$border-color: #ebeef5;
$border-radius: 4px;
.le-popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.content-wrapper {
  position: absolute;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  // filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
  box-shadow: 3px 3px 7px rgb(0 0 0 / 7%);
  background: white;
  padding: 0.5em 1em;
  max-width: 20em;
  word-break: break-all;
  &::before,
  &::after {
    content: "";
    display: block;
    border: 10px solid transparent;
    width: 0;
    height: 0;
    position: absolute;
  }
  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;
    &::before,
    &::after {
      left: 10px;
    }
    &::before {
      border-top-color: $border-color;
      border-bottom: none;
      top: 100%;
    }
    &::after {
      border-top-color: white;
      border-bottom: none;
      top: calc(100% - 1px);
    }
  }
  &.position-bottom {
    margin-top: 10px;
    &::before,
    &::after {
      left: 10px;
    }
    &::before {
      border-top: none;
      border-bottom-color: $border-color;
      bottom: 100%;
    }
    &::after {
      border-top: none;
      border-bottom-color: white;
      bottom: calc(100% - 1px);
    }
  }
  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;
    &::before,
    &::after {
      transform: translateY(-50%);
      top: 50%;
    }
    &::before {
      border-left-color: $border-color;
      border-right: none;
      left: 100%;
    }
    &::after {
      border-left-color: white;
      border-right: none;
      left: calc(100% - 1px);
    }
  }
  &.position-right {
    margin-left: 10px;
    &::before,
    &::after {
      transform: translateY(-50%);
      top: 50%;
    }
    &::before {
      border-right-color: $border-color;
      border-left: none;
      right: 100%;
    }
    &::after {
      border-right-color: white;
      border-left: none;
      right: calc(100% - 1px);
    }
  }
}
</style>
