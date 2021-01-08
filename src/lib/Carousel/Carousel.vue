<template>
  <div
    class="le-carousel"
    :style="{ height: height + 'px' }"
    @mouseover="handleHover"
    @mouseleave="handleLeave"
  >
    <component
      v-for="(c, i) in defaults"
      :is="c"
      :key="c"
      :data-index="i"
      :class="{ active: currentSelectIndex == i - 1 }"
    />

    <div v-if="dots" class="dotsWrapper">
      <span
        v-for="(dot, i) in defaults"
        :key="dot"
        :class="{
          dot: true,
          active: currentSelectIndex == i,
        }"
        @click="handleDotsClick(i)"
      ></span>
    </div>

    <div v-if="arrow" class="arrow_left" @click="handelArrowLeft">
      <Icon name="arrow-left" />
    </div>
    <div v-if="arrow" class="arrow_right" @click="handelArrowRight">
      <Icon name="arrow-right" />
    </div>
  </div>
</template>

<script lang="ts">
import CarouselItem from "./CarouselItem.vue";
import Icon from "../Icon.vue";
import {
  computed,
  onMounted,
  ref,
  watchEffect,
  provide,
  reactive,
  onUpdated,
  nextTick,
} from "vue";
export default {
  props: {
    height: {
      type: Number,
      default: 200,
    },
    selected: {
      type: String,
    },
    autoPlay: {
      type: Boolean,
      default: true,
    },
    autoPlayDelay: {
      type: Number,
      default: 3000,
    },
    dots: {
      type: Boolean,
      default: true,
    },
    animationEnabled: {
      type: Boolean,
      default: true,
    },
    arrow: {
      type: Boolean,
      default: false,
    },
  },
  components: { Icon },
  setup(props, ctx) {
    const defaults = ctx.slots.default();
    const names = defaults.map((_) => _.props.name);
    const currentSelectIndexTemp =
      names.indexOf(props.selected) === -1 ? 0 : names.indexOf(props.selected);
    // 当前轮播索引
    const currentSelectIndex = ref<number>(currentSelectIndexTemp);
    // 当前轮播的值
    const currentSelectName = ref(props.selected);
    // 上一次轮播索引
    const lastIndex = ref(0);
    const timeId = ref(null);

    const state = reactive({
      currentSelectName,
      animationEnabled: props.animationEnabled,
      lastIndex,
      currentSelectIndex,
      totalLength: names.length,
    });

    provide("state", state);

    onMounted(() => {
      if (props.autoPlay) {
        autoPlay();
      }
    });

    watchEffect(() => {
      defaults.forEach((_) => {
        if (_.type !== CarouselItem) {
          throw new Error("Carouse的子组件必须是CarouselItem标签");
        }
      });
    });

    const handleDotsClick = (i: number) => {
      const index = getIndex();
      lastIndex.value = index;
      currentSelectIndex.value = i;
      updateReserve();
      nextTick(() => {
        currentSelectName.value = names[i];
      });
    };

    const autoPlay = () => {
      if (timeId.value !== null) return;

      let run = () => {
        const index = getIndex();
        lastIndex.value = index;
        if (index >= names.length - 1) {
          currentSelectIndex.value = 0;
          updateReserve();
          nextTick(() => {
            currentSelectName.value = names[0];
          });
        } else {
          currentSelectIndex.value = index + 1;
          updateReserve();
          nextTick(() => {
            currentSelectName.value = names[index + 1];
          });
        }
        timeId.value = setTimeout(run, props.autoPlayDelay);
      };
      timeId.value = setTimeout(run, props.autoPlayDelay);
    };

    const handleHover = () => {
      window.clearTimeout(timeId.value);
      timeId.value = null;
    };

    const handleLeave = () => {
      if (props.autoPlay) {
        autoPlay();
      }
    };

    const handelArrowLeft = () => {
      const index = getIndex();
      lastIndex.value = index;
      if (index <= 0) {
        currentSelectIndex.value = names.length - 1;
        updateReserve();
        nextTick(() => {
          currentSelectName.value = names[names.length - 1];
        });
      } else {
        currentSelectIndex.value = index - 1;
        updateReserve();
        nextTick(() => {
          currentSelectName.value = names[index - 1];
        });
      }
    };

    const handelArrowRight = () => {
      const index = getIndex();
      lastIndex.value = index;
      if (index >= names.length - 1) {
        currentSelectIndex.value = 0;
        updateReserve();
        nextTick(() => {
          currentSelectName.value = names[0];
        });
      } else {
        currentSelectIndex.value = index + 1;
        updateReserve();

        nextTick(() => {
          currentSelectName.value = names[index + 1];
        });
      }
    };

    const getIndex = () => {
      return names.indexOf(currentSelectName.value);
    };

    const judgeReserve = () => {
      if (lastIndex.value === 0) {
        if (currentSelectIndex.value === names.length - 1) {
          return true;
        } else {
          return false;
        }
      } else if (lastIndex.value === names.length - 1) {
        if (currentSelectIndex.value === 0) {
          return false;
        } else {
          return true;
        }
      } else if (lastIndex.value < currentSelectIndex.value) {
        return false;
      } else {
        return true;
      }
    };

    const updateReserve = () => {
      defaults.forEach((_) => {
        Object.assign(_.props, {
          reverse: judgeReserve(),
        });
      });
    };

    return {
      defaults,
      handleDotsClick,
      currentSelectName,
      currentSelectIndex,
      handleHover,
      handleLeave,
      handelArrowLeft,
      handelArrowRight,
    };
  },
};
</script>

<style lang="scss" scoped>
.le-carousel {
  display: flex;
  position: relative;
  overflow: hidden;
  &-dots {
    padding: 8px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    > span {
      width: 20px;
      height: 20px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      background: #ddd;
      border-radius: 50%;
      margin: 0 8px;
      font-size: 12px;
      &:hover {
        cursor: pointer;
      }
      &.active {
        background: #4a90e2;
        color: white;
        &:hover {
          cursor: default;
        }
      }
    }
  }
  & .dotsWrapper {
    position: absolute;
    bottom: 15px;
    display: flex;
    left: 50%;
    transform: translate(-50%);
    .dot {
      display: block;
      background-color: #fff;
      opacity: 0.3;
      width: 16px;
      height: 3px;
      border-radius: 1px;
      margin: 0 2px;
      transition: all 0.3s ease;
      cursor: pointer;
      &.active {
        width: 24px;
        opacity: 0.9;
      }
    }
  }
  .arrow_left,
  .arrow_right {
    position: absolute;
    top: 50%;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: rgba(31, 45, 61, 0.11);
    color: #fff;
    &:hover {
      background-color: rgba(31, 45, 61, 0.23);
    }
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-50%);
    cursor: pointer;
  }
  .arrow_left {
    left: 10px;
  }
  .arrow_right {
    right: 10px;
  }
}
</style>
