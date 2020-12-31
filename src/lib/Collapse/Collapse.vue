<template>
  <div class="le-collapse">
    <component
      v-for="c in defaults"
      :is="c"
      :key="c"
      @currentSpreadEvent="handleCurrentSpread"
    />
  </div>
</template>

<script lang="ts">
import CollapseItem from "./CollapseItem.vue";
import { watchEffect, ref, provide, PropType, reactive } from "vue";
export default {
  components: { CollapseItem },
  props: {
    accordion: {
      type: Boolean,
      default: false,
    },
    defaultSpread: {
      type: [Array, Number] as PropType<number | number[]>,
      default: [],
    },
  },

  emits: ["change"],

  setup(props, ctx) {
    const state = reactive([].concat(props.defaultSpread));
    if (props.accordion && state.length > 1) {
      console.error("手风琴模式下请设置正确的初始值");
      return;
    }

    const defaults = ctx.slots.default();
    const currentSpread = ref(-1);
    const changeSpread = reactive([]);

    provide("currentSpreadStatus", {
      currentSpread: currentSpread,
      accordion: props.accordion,
      defaultSpread: state,
    }),
      watchEffect(() => {
        defaults.forEach((_, i) => {
          if (_.type !== CollapseItem) {
            throw new Error("Collapse的子组件必须是CollapseItem");
          }
          Object.assign(_.props, {
            isLastChild: i === defaults.length - 1,
            itemKey: i,
          });
        });
      });

    const handleCurrentSpread = (state: { key: number; status: boolean }) => {
      if (state.status) {
        currentSpread.value = state.key;
        if (!changeSpread.includes(state.key)) {
          changeSpread.push(state.key);
        }
      } else {
        if (changeSpread.includes(state.key)) {
          changeSpread.splice(changeSpread.indexOf(state.key), 1);
        }
      }
      ctx.emit("change", changeSpread);
    };

    return { defaults, handleCurrentSpread, currentSpread };
  },
};
</script>
<style lang="scss" scoped>
.le-collapse {
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  overflow: hidden;
}
</style>
