<template>
  <div
    :class="{
      'le-tabs': true,
      vertical: vertical,
    }"
  >
    <div class="le-tabs-nav" ref="container">
      <div
        class="le-tabs-nav-item"
        v-for="(t, index) in titles"
        :ref="
          (el) => {
            if (t === selected) selectedItem = el;
          }
        "
        @click="select(t)"
        :class="{ selected: t === selected, disabled: disabledTabTitle().includes(t) }"
        :key="index"
      >
        {{ t }}
      </div>
      <div class="le-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="le-tabs-content">
      <component :is="current" :key="current.props.title" />
    </div>
  </div>
</template>

<script lang="ts" setup="props, context">
import Tab from "./Tab.vue";
import {
  computed,
  ref,
  watchEffect,
  onMounted,
  SetupContext,
  Component,
  ComputedRef,
} from "vue";

declare const props: { selected: string; vertical: boolean };
declare const context: SetupContext;

export default {
  props: {
    selected: {
      type: String,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
  },
};
export const selectedItem = ref<HTMLDivElement>(null);
export const indicator = ref<HTMLDivElement>(null);
export const container = ref<HTMLDivElement>(null);

onMounted(() => {
  watchEffect(
    () => {
      if (props.vertical) {
        const { height } = selectedItem.value.getBoundingClientRect();
        indicator.value.style.height = height + "px";
        const { top: top1 } = container.value.getBoundingClientRect();
        const { top: top2 } = selectedItem.value.getBoundingClientRect();
        const top = top2 - top1;
        indicator.value.style.top = top + "px";
      } else {
        const { width } = selectedItem.value.getBoundingClientRect();
        indicator.value.style.width = width + "px";
        const { left: left1 } = container.value.getBoundingClientRect();
        const { left: left2 } = selectedItem.value.getBoundingClientRect();
        const left = left2 - left1;
        indicator.value.style.left = left + "px";
      }
    },
    {
      flush: "post",
    }
  );
});

export const defaults = context.slots.default();
defaults.forEach((tag) => {
  if ((tag.type as Component).name !== (Tab as any).name) {
    throw new Error("Tabs 子标签必须是 Tab");
  }
});
export const current = computed(() => {
  return defaults.find((tag) => tag.props.title === props.selected);
});
export const disabledTabTitle = () => {
  const newArr = [];
  defaults.forEach((_) => {
    if (_.props.disabled) {
      newArr.push(_.props.title);
    }
  });
  return newArr;
};

export const titles = defaults.map((tag) => {
  return tag.props.title;
});
export const select = (title: string) => {
  if (disabledTabTitle().includes(title)) return;
  context.emit("update:selected", title);
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.le-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
      &.disabled {
        color: rgba(0, 0, 0, 0.25);
        cursor: not-allowed;
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;
  }
  &.vertical {
    display: flex;
    .le-tabs {
      &-nav {
        flex-direction: column;
        &-item {
          margin: 0 8px;
        }
        &-indicator {
          position: absolute;
          height: 40px;
          background: $blue;
          left: 100%;
          bottom: -1px;
          width: 3px;
          transition: all 250ms;
        }
      }
      &-content {
        padding: 0 16px;
      }
    }
  }
}
</style>
