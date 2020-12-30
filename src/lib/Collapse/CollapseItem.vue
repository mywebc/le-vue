<template>
  <div class="collapse-item">
    <div
      :class="{
        'collapse-item-title': true,
        isLastChild: isLastChild && !itemContentDisplay,
        'collapse-item-title-disabled': disabled,
      }"
    >
      <span class="collapse-icon"
        ><Icon :name="itemContentDisplay ? `arrow-down` : `arrow-right`" /
        @click="handleClickPanel"></span
      >
      {{ title }}
    </div>
    <div
      :class="{
        'collapse-item-content': true,
        'collapse-item-content-active': itemContentDisplay,
        'collapse-item-content-leave': !itemContentDisplay,
      }"
    >
      <div
        class="collapse-item-content-box"
        :style="{
          borderBottom: `${
            itemContentDisplay && !isLastChild ? '1px solid rgba(0, 0, 0, 0.3)' : ''
          }`,
        }"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, inject, reactive, watch, onMounted } from "vue";
import Icon from "../../lib/Icon.vue";
export default {
  components: { Icon },
  props: {
    title: {
      type: String,
    },
    isLastChild: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    itemKey: {
      type: Number,
    },
  },
  emits: ["currentSpreadEvent"],
  setup(props, ctx) {
    const itemContentDisplay = ref(false);
    const currentSpreadStatus = reactive(
      inject("currentSpreadStatus") as {
        currentSpread: number;
        accordion: boolean;
        defaultSpread: number[];
      }
    );

    onMounted(() => {
      if (
        currentSpreadStatus.defaultSpread.length > 0 &&
        currentSpreadStatus.defaultSpread.includes(props.itemKey)
      ) {
        itemContentDisplay.value = true;
      }
    });

    watch(currentSpreadStatus, () => {
      if (currentSpreadStatus.accordion) {
        if (currentSpreadStatus.currentSpread === props.itemKey) {
          itemContentDisplay.value = true;
        } else {
          itemContentDisplay.value = false;
        }
      }
    });

    const handleClickPanel = () => {
      itemContentDisplay.value = !itemContentDisplay.value;
      ctx.emit("currentSpreadEvent", {
        key: props.itemKey,
        status: itemContentDisplay.value,
      });
    };
    return { itemContentDisplay, handleClickPanel, currentSpreadStatus };
  },
};
</script>

<style lang="scss" scoped>
.collapse-item {
  .collapse-item-title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    line-height: 30px;
    padding: 12px 16px 12px 40px;
    background-color: rgba(0, 0, 0, 0.02);
    position: relative;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    .collapse-icon {
      position: absolute;
      left: 10px;
      display: inline-flex;
      cursor: pointer;
      & > svg {
        width: 20px;
        height: 20px;
      }
    }
    &.isLastChild {
      border-bottom: 0;
    }
    &.collapse-item-title-disabled {
      cursor: not-allowed;
      opacity: 0.4;
      .collapse-icon {
        cursor: not-allowed;
        pointer-events: none;
      }
    }
  }
  .collapse-item-content {
    overflow: hidden;
    .collapse-item-content-box {
      padding: 16px;
      color: rgba(0, 0, 0, 0.65);
      background-color: #fff;
    }
    &.collapse-item-content-active {
      animation: collapseFadeIn ease-out 1000ms;
    }
    &.collapse-item-content-leave {
      max-height: 0;
    }

    @keyframes collapseFadeIn {
      0% {
        max-height: 0;
      }
      100% {
        max-height: 500px;
      }
    }
  }
}
</style>
