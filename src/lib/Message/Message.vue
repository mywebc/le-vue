<template>
  <transition name="message-fade">
    <div class="le-message" v-show="visible">{{message}}</div>
  </transition>
</template>

<script lang="ts">
import { reactive, onMounted, nextTick } from "vue";
export default {
  emits: ["close"],
  props: {
    message: {
      type: String
    }
  },
  setup(props, ctx) {
    const state = reactive({
      visible: false,
    });

    const close = () => {
      state.visible = false;
      nextTick(() => {
        ctx.emit("close");
      });
    };

    onMounted(() => {
      state.visible = true;
    });

    return { state, close };
  },
};
</script>
