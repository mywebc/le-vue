<template>
  <div class="le-radio-group">
    <div class="le-radio-group-content">
      <component class="le-radio-group-item" v-for="c in defaults" :is="c" :key="c" @change="handleGroupRadio" />
    </div>
  </div>
</template>

<script>
import Radio from "./Radio.vue";
export default {
  props: {
    value: {
      type: String,
    },
  },
  emits: ["update:value", "change"],
  setup(props, ctx) {
    const defaults = ctx.slots.default();
    defaults.forEach((_) => {
      if (_.type !== Radio) {
        throw new Error("Radio-group的子组件必须是radio标签");
      }
      Object.assign(_.props, {
        name: "group_radio",
        value: props.value,
      });
    });

    const handleGroupRadio = (x) => {
      ctx.emit("update:value", x);
      ctx.emit("change", x);
    };

    return {
      defaults,
      handleGroupRadio,
    };
  },
};
</script>