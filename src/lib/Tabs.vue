<template>
  <div class="le-tabs">
    <div class="le-tabs-nav" ref="container">
      <div
        class="le-tabs-nav-item"
        v-for="(t,index) in titles"
        :ref="el => { if (t===selected) selectedItem = el }"
        @click="select(t)"
        :class="{selected: t=== selected}"
        :key="index"
      >{{t}}</div>
      <div class="le-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="le-tabs-content">
      <component
        class="le-tabs-content-item"
        :class="{selected: c.props.title === selected }"
        v-for="c in defaults"
        :is="c"
        :key="current.props.title"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Tab from "./Tab.vue";
import { computed, ref, watchEffect, onMounted } from "vue";

export default {
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);

    onMounted(() => {
      watchEffect(() => {
        const { width } = selectedItem.value.getBoundingClientRect();
        indicator.value.style.width = width + "px";
        const { left: left1 } = container.value.getBoundingClientRect();
        const { left: left2 } = selectedItem.value.getBoundingClientRect();
        const left = left2 - left1;
        indicator.value.style.left = left + "px";
      });
    });

    const defaults = context.slots.default();
    defaults.forEach(_ => {
      if (_.type !== Tab) {
        throw new Error("Tabs的子组件必须是Tab标签");
      }
    });

    const titles = defaults.map(_ => _.props.title);

    const select = (title: String) => {
      context.emit("update:selected", title);
    };

    const current = computed(() => {
      return defaults.find(_ => _.props.title === props.selected);
    });

    return {
      defaults,
      titles,
      select,
      selectedItem,
      indicator,
      container,
      current
    };
  }
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
    // &-item {
    //   display: none;
    //   &.selected {
    //     display: block;
    //   }
    // }
  }
}
</style>