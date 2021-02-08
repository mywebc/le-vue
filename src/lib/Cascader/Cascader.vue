<template>
  <div class="le-cascader" ref="cascaderRef">
    <div class="trigger" @click="toggle" ref="triggerRef">
      {{ result || defaultSelected }}
    </div>
    <div class="popover-wrapper" v-if="popoverVisible" ref="popoverRef">
      <cascader-items
        :items="source"
        class="popover"
        :height="popoverHeight"
        v-model:selected="selected"
      ></cascader-items>
    </div>
  </div>
</template>

<script lang="ts">
import CascaderItems from "./CascaderItems.vue";
import { onMounted, ref, computed, onUnmounted, PropType } from "vue";
export default {
  name: "LeCascader",
  components: { CascaderItems },
  props: {
    source: {
      type: Array as PropType<{ value: string; name: string; disabled?: boolean }[]>,
    },
    popoverHeight: {
      type: String,
      default: "200px",
    },
    selected: {
      type: Array,
      default: () => {
        return [];
      },
    },
    defaultSelected: {
      type: String,
      default: "",
    },
  },

  emits: ["onChange"],
  setup(props, ctx) {
    const popoverVisible = ref(false);
    const cascaderRef = ref(null);
    const popoverRef = ref(null);
    const triggerRef = ref(null);

    onMounted(() => {
      document.body.addEventListener("click", clickOutSide);
    });

    onUnmounted(() => {
      document.body.removeEventListener("click", clickOutSide);
    });

    const clickOutSide = (e) => {
      if (popoverRef.value?.contains(e.target) || e.target === triggerRef.value) {
        open();
      } else {
        close();
      }
    };

    const open = () => {
      popoverVisible.value = true;
    };
    const close = () => {
      popoverVisible.value = false;
    };

    const toggle = () => {
      if (popoverVisible.value === true) {
        close();
      } else {
        open();
      }
    };
    const result = computed(() => {
      ctx.emit(
        "onChange",
        JSON.parse(JSON.stringify(props.selected)).map((_) => _.value)
      );
      return props.selected.map((item) => (item as any).name).join("/");
    });

    return {
      popoverVisible,
      open,
      close,
      toggle,
      result,
      cascaderRef,
      popoverRef,
      triggerRef,
    };
  },
};
</script>

<style scoped lang="scss">
$input-height: 32px;
$border-color: #999;
$border-radius: 4px;

.box-shadow {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
}

.le-cascader {
  display: inline-block;
  position: relative;
  .trigger {
    background: white;
    height: $input-height;
    display: inline-flex;
    align-items: center;
    padding: 0 1em;
    min-width: 10em;
    border: 1px solid $border-color;
    border-radius: $border-radius;
  }
  .popover-wrapper {
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    display: flex;
    margin-top: 8px;
    z-index: 999999;
    @extend .box-shadow;
  }
}
</style>
