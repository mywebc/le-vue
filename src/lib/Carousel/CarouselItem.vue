<template>
  <template v-if="animationEnabled">
    <transition name="slide">
      <div class="le-carousel-item" v-if="visible" :class="{ reverse }">
        <slot></slot>
      </div>
    </transition>
  </template>
  <template v-else>
    <div class="le-carousel-item" v-if="visible" :class="{ reverse }">
      <slot></slot>
    </div>
  </template>
</template>

<script lang="ts">
import {
  computed,
  reactive,
  onUpdated,
  watch,
  watchEffect,
  toRefs,
  inject,
  ref,
  nextTick,
} from "vue";
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    reverse: {
      type: Boolean,
    },
  },

  setup(props, ctx) {
    const state = toRefs(
      inject("state") as {
        currentSelectName: string;
        animationEnabled: boolean;
        lastIndex: number;
        currentSelectIndex: number;
        totalLength: number;
      }
    );
    const visible = ref(state.currentSelectName.value == props.name);

    watchEffect(() => {
      visible.value = state.currentSelectName.value == props.name;
    });

    return {
      ...toRefs(state),
      visible,
    };
  },
};
</script>

<style lang="scss" scoped>
.le-carousel-item {
  width: 100%;
  height: 100%;
}
.slide-leave-active {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s;
}
.slide-enter {
  transform: translateX(100%);
}
.slide-enter.reverse {
  transform: translateX(-100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}
.slide-leave-to.reverse {
  transform: translateX(100%);
}
</style>
