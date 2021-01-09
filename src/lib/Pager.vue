<template>
  <div
    class="le-pager"
    :class="{ hide: hidePager === true && totalPage <= 1, simple, [size]: size }"
  >
    <span class="le-pager-nav prev" :class="{ disabled: currentPage === 1 }">
      <icon name="arrow-left" @click="handlePrevClick"></icon>
    </span>

    <template v-for="page in pages">
      <template v-if="page === currentPage">
        <span class="le-pager-item current" :data-number="currentPage">{{ page }}</span>
      </template>

      <template v-else-if="page === '...'">
        <icon class="le-pager-separator" name="ellipsis"></icon>
      </template>

      <template v-else>
        <span class="le-pager-item other" @click="onClickPage(page)">{{ page }}</span>
      </template>
    </template>

    <span class="le-pager-nav next" :class="{ disabled: currentPage === totalPage }">
      <icon name="arrow-right" @click="handleNextClick"></icon>
    </span>
  </div>
</template>
<script lang="ts">
import Icon from "./Icon.vue";
import { computed, PropType } from "vue";
export default {
  components: { Icon },
  props: {
    totalPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
    hidePager: {
      type: Boolean,
      default: true,
    },
    simple: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String as PropType<"small" | "default">,
      default: "default",
      validator: (val: string) => ["small", "default"].includes(val),
    },
  },
  emits: ["update:currentPage", "prevClick", "nextClick", "currentChange"],
  setup(props, ctx) {
    const unique = (array) => {
      const obj = {};
      // 去重
      array.map((i) => {
        obj[i] = true;
      });
      return Object.keys(obj).map((string) => parseInt(string, 10));
    };

    const onClickPage = (n: number) => {
      if (n >= 1 && n <= props.totalPage) {
        ctx.emit("update:currentPage", n);
        ctx.emit("currentChange", n)
      }
    };

    const pages = computed(() => {
      return unique(
        [
          1,
          props.currentPage - 1,
          props.currentPage,
          props.currentPage + 1,
          props.currentPage + 2,
          props.currentPage + 3,
          props.currentPage + 4,
          props.currentPage + 5,
          props.totalPage,
        ]
          .filter((n) => n >= 1 && n <= props.totalPage)
          .sort((a, b) => a - b)
      ).reduce((prev, current, index, array) => {
        prev.push(current);
        // 前后数字大于时截断
        let canAddSeparator =
          array[index + 1] !== undefined && array[index + 1] - array[index] > 1;
        if (canAddSeparator) {
          prev.push("...");
        }
        return prev;
      }, []);
    });

    const handlePrevClick = () => {
      onClickPage(props.currentPage - 1);
      ctx.emit("prevClick", props.currentPage - 1);
    };

    const handleNextClick = () => {
      onClickPage(props.currentPage + 1);
      ctx.emit("nextClick", props.currentPage + 1);
    };

    return { pages, onClickPage, handlePrevClick, handleNextClick };
  },
};
</script>
<style scoped lang="scss">
$width: 28px;
$height: 28px;
$widthSmall: 22px;
$heightSmall: 22px;
$font-size: 12px;
$border-radius: 4px;
$border-color1: #e1e1e1;
$blue: #4a90e2;
$grey: #eee;
.le-pager {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  user-select: none;
  &.hide {
    display: none;
  }
  &-separator {
    width: $width;
    font-size: 14px;
  }
  &-item {
    min-width: $width;
    height: $height;
    font-size: 16px;
    border: 1px solid $border-color1;
    border-radius: 4px;
    padding: 0 4px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 4px;
    cursor: pointer;
    &.current,
    &:hover {
      border-color: $blue;
    }
    &.current {
      cursor: default;
    }
  }
  &-nav {
    margin: 0 4px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: $grey;
    height: $height;
    width: $width;
    border-radius: $border-radius;
    font-size: 14px;
    cursor: pointer;
    &.disabled {
      cursor: default;
      svg {
        fill: darken($grey, 30%);
      }
    }
  }
  &.simple {
    .prev {
      background-color: #fff;
    }
    .le-pager-item {
      border: none;
      &.current,
      &:hover {
        color: $blue;
      }
    }
    .next {
      background-color: #fff;
    }
  }
  &.small {
    .le-pager-item {
      font-size: 12px;
      width: $widthSmall;
      height: $heightSmall;
    }
    .prev {
      width: $widthSmall;
      height: $heightSmall;
    }
    .next {
      width: $widthSmall;
      height: $heightSmall;
    }
  }
}
</style>
