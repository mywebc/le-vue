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
        v-for="(c,index) in defaults"
        :is="c"
        :key="index"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Tab from "./Tab.vue";

export default {
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach(_ => {
      if (_.type !== Tab) {
        throw new Error("Tabs的子组件必须是Tab标签");
      }
    });

    const titles = defaults.map(_ => _.props.title);
    return { defaults, titles };
  }
};
</script>

<style lang="scss" scoped>
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
    &-item {
      display: none;
      &.selected {
        display: block;
      }
    }
  }
}
</style>