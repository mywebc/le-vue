<template>
  <div class="le-cascaderItem" :style="{ height: height }">
    <div class="left">
      <div
        class="label"
        v-for="item in items"
        @click="onClickLabel(item)"
        :class="{ disabled: item?.disabled }"
      >
        <span class="name">{{ item.name }}</span>
        <span class="icons">
          <template v-if="item.name === loadingItem.name">
            <icon class="loading" name="loading"></icon>
          </template>
          <template v-else>
            <icon class="next" v-if="rightArrowVisible(item)" name="arrow-right"></icon>
          </template>
        </span>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <cascader-items
        ref="right"
        :items="rightItems"
        :height="height"
        :loading-item="loadingItem"
        :load-data="loadData"
        :level="level + 1"
        :selected="selected"
        @update:selected="onUpdateSelected"
      ></cascader-items>
    </div>
  </div>
</template>

<script lang="ts">
import Icon from "../Icon.vue";
import { onMounted, PropType, computed, watch, watchEffect, reactive } from "vue";
export default {
  name: "CascaderItems",
  components: { Icon },
  props: {
    items: {
      type: Array as PropType<any[]>,
    },
    height: {
      type: String,
    },
    loadingItem: {
      type: Object,
      default: () => ({}),
    },
    selected: {
      type: Array as PropType<any[]>,
      default: () => [],
    },
    loadData: {
      type: Function,
    },
    level: {
      type: Number,
      default: 0,
    },
  },
  emits: ["update:selected"],

  setup(props, ctx) {
    const rightArrowVisible = (item) => {
      return props.loadData ? !item.isLeaf : item.children;
    };

    const onClickLabel = (item) => {
      if (item?.disabled) return;
      let copy = JSON.parse(JSON.stringify(props.selected));
      copy[props.level] = item;
      copy.splice(props.level + 1);
      ctx.emit("update:selected", copy);
    };

    const onUpdateSelected = (newSelected) => {
      ctx.emit("update:selected", newSelected);
    };

    const rightItems = computed(() => {
      if (props.selected[props.level]) {
        let selected = props.items.filter(
          (item) => item.name === props.selected[props.level].name
        );
        if (selected && selected[0].children && selected[0].children.length > 0) {
          return selected[0].children;
        }
      }
    });

    return {
      rightArrowVisible,
      onClickLabel,
      onUpdateSelected,
      rightItems,
    };
  },
};
</script>

<style scoped lang="scss">
$border-color: #999;
$border-color-light: lighten($border-color, 30%);
$grey: #eee;
.le-cascaderItem {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100px;
  .left {
    height: 100%;
    padding: 0.3em 0;
    overflow: auto;
  }
  .right {
    height: 100%;
    border-left: 1px solid $border-color-light;
  }
  .label {
    padding: 0.5em 1em;
    display: flex;
    align-items: center;
    cursor: pointer;
    white-space: nowrap;
    &:hover {
      background: $grey;
    }
    > .name {
      margin-right: 1em;
      user-select: none;
    }
    .icons {
      margin-left: auto;
      .next {
        transform: scale(0.5);
      }
      .loading {
        animation: le-spin 2s infinite linear;
      }
    }
    &.disabled {
      cursor: not-allowed;
      background-color: rgba(0, 0, 0, 0.03);
      color:rgba(0, 0, 0, 0.25);
    }
  }
}
</style>
