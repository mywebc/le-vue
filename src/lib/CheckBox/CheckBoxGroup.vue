<template>
  <div class="le-checkBox-group">
    <div class="le-checkBox-group-content">
      <component class="le-checkBox-group-item" v-for="c in defaults" :is="c" :key="c" @change="handleGroupCheckBox" />
    </div>
  </div>
</template>

<script lang="ts">
import CheckBox from "./CheckBox.vue";
import { PropType, computed, watch, watchEffect, reactive } from "vue";
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
    const checkedValue = reactive(props.value);

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
      if (x.checked) {
        if (checkedValue.indexOf(x.value) === -1) {
          checkedValue.push(x.value);
        }
      } else {
        if (checkedValue.indexOf(x.value) !== -1) {
          checkedValue.splice(
            checkedValue.findIndex((_) => _ === x.value),
            1
          );
        }
      }
      ctx.emit("update:value", checkedValue);
      ctx.emit("change", checkedValue);
    };

    return {
      defaults,
      handleGroupCheckBox,
    };
  },
};
</script>

<style lang="scss" scoped></style>
