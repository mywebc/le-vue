<template>
  <div class="le-checkBox-group">
    <div class="le-checkBox-group-content">
      <component class="le-checkBox-group-item" v-for="c in defaults" :is="c" :key="c" @change="handleGroupCheckBox" />
    </div>
  </div>
</template>

<script lang="ts">
import CheckBox from "./CheckBox.vue";
import { PropType } from "vue";
export default {
  props: {
    value: {
      type: Array as PropType<String[]>,
      default: [],
    },
  },
  emits: ["update:value", "change"],
  setup(props, ctx) {
    const defaults = ctx.slots.default();
    defaults.forEach((_) => {
      if (_.type !== CheckBox) {
        throw new Error("CheckBox-group的子组件必须是radio标签");
      }
      Object.assign(_.props, {
        value: props.value.includes(_.props.label),
      });
    });

    const handleGroupCheckBox = (x) => {
      ctx.emit("update:value", x);
      ctx.emit("change", x);
    };

    return {
      defaults,
      handleGroupCheckBox,
    };
  },
};
</script>

<style lang="scss" scoped></style>
