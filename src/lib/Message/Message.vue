<template>
  <Teleport to="body">
    <div class="le-message-wrapper" v-if="visible">
      <div class="le-message">
        <main>
          <Icon :name="iconType" :class="iconType" />
          {{ message }}
          <span @click="close" class="le-message-close"></span>
        </main>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts">
import { reactive, onMounted, nextTick, PropType, ref, watch } from "vue";
import Icon from "../Icon.vue";
export default {
  components: { Icon },
  props: {
    message: {
      type: String,
    },
    duration: {
      type: Number,
      default: 1000,
    },
    visible: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String as PropType<"info" | "success" | "error" | "warning">,
      default: "info",
      validator: (val: string) => ["info", "success", "error", "warning"].includes(val),
    },
    showClose: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:visible", "onClose"],
  setup(props, ctx) {
    const state = reactive({
      visible: false,
    });

    const handleIconType = (type: "info" | "success" | "error" | "warning") => {
      if (type === "info") return "prompt";
      if (type === "error") return "close";
      return type;
    };

    const iconType = ref<any>(handleIconType(props.type));

    const close = () => {
      nextTick(() => {
        ctx.emit("update:visible", false);
        ctx.emit("onClose")
      });
    };

    onMounted(() => {
      setTimeout(() => {
        close();
      }, props.duration);
    });

    return { state, close, iconType };
  },
};
</script>

<style lang="scss" scoped>
$radius: 4px;
$border-color: #f0f0f0;
$blue: #40a9ff;
$warning: #e69b2b;
$success: #67c23a;
$error: #f56c6c;

.le-message {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.8);
  min-width: 14em;
  max-width: 90%;

  &-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 40px;
    z-index: 100;
    animation: fadeInRight linear 150ms;
  }

  > main {
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .le-icon {
      width: 1.5em;
      height: 1.5em;
      &.prompt {
        fill: $blue;
      }
      &.close {
        fill: $error;
      }
      &.warning {
        fill: $warning;
      }
      &.success {
        fill: $success;
      }
    }
  }

  &-close {
    position: relative;
    display: inline-block;
    width: 12px;
    height: 12px;
    cursor: pointer;

    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
@keyframes fadeInRight {
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(0);
  }
}
</style>
