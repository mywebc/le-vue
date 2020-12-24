<template>
  <div class="le-checkBox-group">
    <div class="le-checkBox-group-content">
      <component class="le-checkBox-group-item" v-for="c in defaults" :is="c" :key="c" @change="handleGroupCheckBox" />
    </div>
  </div>
</template>

<script lang="ts">
import CheckBox from "./CheckBox.vue";
import { PropType, computed, watch, watchEffect } from "vue";
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

    watchEffect(() => {
      defaults.forEach((_) => {
        if (_.type !== CheckBox) {
          throw new Error("CheckBox-group的子组件必须是radio标签");
        }
        Object.assign(_.props, {
          value: props.value.includes(_.props.label),
        });
      });
    });

    const handleGroupCheckBox = (x: { value: string; checked: boolean }) => {
      const newValue = JSON.parse(JSON.stringify(props.value));
      if (x.checked) {
        if (newValue.indexOf(x.value) === -1) {
          newValue.push(x.value);
        }
      } else {
        if (newValue.indexOf(x.value) !== -1) {
          newValue.splice(
            newValue.findIndex((_) => _ === x.value),
            1
          );
        }
      }
      ctx.emit("update:value", newValue);
      ctx.emit("change", newValue);
    };

    return {
      defaults,
      handleGroupCheckBox,
    };
  },
};
</script>

<style lang="scss" scoped></style>
