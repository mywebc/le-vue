<template>
  <div class="cascader-doc">
    <h2>Cascader 级联选择器</h2>
    <Demo :component="BasicCascader" describe="基本用法" />
  </div>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import BasicCascader from "./CascaderDemos/BasicCascader.vue"

export default {
  components: {
    Demo,
  },
  setup() {
    return {
      BasicCascader,
    };
  },
};
</script>

<style lang="scss" scoped>
.cascader-doc {
  width: 100%;
}
</style>
