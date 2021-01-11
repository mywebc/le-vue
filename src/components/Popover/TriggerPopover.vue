<demo>
触发方式
</demo>

<template>
  <popover trigger="hover">
    <template v-slot:content>
      <div>popover内容</div>
    </template>
    <Button>top hover</Button>
  </popover>

  <popover position="top">
    <template v-slot:content>
      <div>popover内容</div>
    </template>
    <Button>top click</Button>
  </popover>

  <popover position="bottom" trigger="hover">
    <template v-slot:content>
      <div>popover内容</div>
    </template>
    <Button>bottom hover</Button>
  </popover>

  <popover position="bottom">
    <template v-slot:content>
      <div>popover内容</div>
    </template>
    <Button>bottom click</Button>
  </popover>
</template>

<script lang="ts">
import Popover from "../../lib/Popover.vue";
import Button from "../../lib/Button.vue";
import { ref } from "vue";

export default {
  components: { Popover, Button },
};
</script>

<style lang="scss" scoped>
.le-popover {
  margin-right: 20px;
}
</style>
