<template>
  <div class="collapse-doc">
    <h2>Collapse 折叠面板</h2>
    <Demo :component="BasicCollapse" describe="最基本的用法" />
  </div>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import BasicCollapse from "./CollapseDemos/BasicCollapse.vue";

export default {
  components: { Demo },
  setup() {
    return {
      BasicCollapse,
    };
  },
};
</script>
<style lang="scss" scoped>
.collapse-doc {
  width: 100%;
}
</style>
