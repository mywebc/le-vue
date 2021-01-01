<template>
  <div class="le-affix" ref="affixRef">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
export default {
  props: {
    offsetTop: {
      type: Number,
      default: 0,
    },
  },
  setup(props, ctx) {
    const affixRef = ref<HTMLDivElement>(null);
    const originTopRef = ref(0);

    onMounted(() => {
      originTopPosition();
      console.log(originTopRef.value);
      window.addEventListener("scroll", handleScroll, true);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll, true);
    });

    const originTopPosition = () => {
      if (window.scrollY === 0) {
        originTopRef.value = affixRef.value.getBoundingClientRect().top;
      } else {
        const { scrollX, scrollY } = window;
        window.scrollTo(scrollX, 0);
        originTopRef.value = affixRef.value.getBoundingClientRect().top;
        window.scrollTo(scrollX, scrollY);
      }
    };

    const handleScroll = (e) => {
      const { top, bottom, left, right } = affixRef.value.getBoundingClientRect();
      if (
        props.offsetTop !== undefined &&
        e.srcElement.scrollTop >= originTopRef.value - props.offsetTop
      ) {
        affixRef.value.style.position = "fixed";
        affixRef.value.style.width = right - left + "px";
        affixRef.value.style.height = bottom - top + "px";
        affixRef.value.style.left = left + "px";
        affixRef.value.style.top = props.offsetTop + "px";
      } else {
        affixRef.value.style.position = "static";
      }
    };

    return { affixRef };
  },
};
</script>

<style lang="scss" scoped>
.le-affix {
  z-index: 200;
}
</style>
