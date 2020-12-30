<template>
  <div class="le-collapse">
    <component v-for="c in defaults" :is="c" :key="c" />
  </div>
</template>

<script lang="ts">
import CollapseItem from "./CollapseItem.vue";
import { onMounted, watchEffect } from "vue";
export default {
  components: { CollapseItem },
  setup(props, ctx) {
    const defaults = ctx.slots.default();

    watchEffect(() => {
      defaults.forEach((_, i) => {
        if (_.type !== CollapseItem) {
          throw new Error("Collapse的子组件必须是CollapseItem");
        }
        Object.assign(_.props, {
          isLastChild: i === defaults.length - 1,
        });
      });
    });
    return { defaults };
  },
};
</script>
<style lang="scss" scoped>
.le-collapse {
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 8px;
}
</style>
