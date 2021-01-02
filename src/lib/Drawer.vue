<template>
  <Teleport to="body">
    <div v-if="visible">
      <div class="le-drawer-overlay" @click="handleOverlay" v-if="isShowOverlay"></div>
      <div
        :class="{
          'le-drawer-wrapper': true,
          [`le-drawer-${placement}`]: true,
        }"
      >
        <div
          :class="{
            'le-drawer': true,
          }"
        >
          <header>
            <slot name="title" />
            <span @click="close" class="le-drawer-close"></span>
          </header>
          <main>
            <slot name="content" />
          </main>
          <footer>
            <slot name="footer" />
          </footer>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts">
import Button from "./Button.vue";
import { PropType } from "vue";
export default {
  components: { Button },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    isCanClickOverlay: {
      type: Boolean,
      default: true,
    },
    isShowOverlay: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
    },
    placement: {
      type: String as PropType<"top" | "right" | "bottom" | "left">,
      default: "right",
    },
  },
  emits: ["close", "update:visible"],
  setup(props, ctx) {
    const close = () => {
      ctx.emit("update:visible", false);
      ctx.emit("close");
    };
    const handleOverlay = () => {
      props.isCanClickOverlay && close();
    };
    return {
      close,
      handleOverlay,
    };
  },
};
</script>

<style lang="scss" scoped>
$radius: 4px;
$border-color: #f0f0f0;

.le-drawer {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.8);
  min-width: 26em;
  display: flex;
  flex-direction: column;
  height: 100%;

  &-right {
    animation: fadeInRight linear 300ms;
  }
  &-left {
    animation: fadeInLeft linear 300ms;
    &.le-drawer-wrapper {
      left: 0;
      right: auto;
      bottom: auto;
      .le-drawer {
        min-width: 26em;
        height: 100%;
      }
    }
  }
  &-top {
    animation: fadeInTop linear 300ms;
    &.le-drawer-wrapper {
      top: 0;
      bottom: auto;
      width: 100%;
      height: auto;
      .le-drawer {
        width: 100%;
        height: 20em;
      }
    }
  }
  &-bottom {
    animation: fadeInBottom linear 300ms;
    &.le-drawer-wrapper {
      bottom: 0;
      top: auto;
      right: auto;
      width: 100%;
      height: auto;
      .le-drawer {
        width: 100%;
        height: 20em;
      }
    }
  }

  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }

  &-wrapper {
    height: 100%;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 11;
  }

  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }

  > main {
    padding: 12px 16px;
    flex: 1;
  }

  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
  }

  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;

    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}

@keyframes fadeInRight {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(0);
  }
}
@keyframes fadeInLeft {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(0);
  }
}
@keyframes fadeInTop {
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(0);
  }
}
@keyframes fadeInBottom {
  0% {
    transform: translateY(100%);
  }

  100% {
    transform: translateY(0);
  }
}
</style>
