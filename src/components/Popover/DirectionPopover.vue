<demo>
不同方向
</demo>

<template>
  <popover>
    <template v-slot:content>
      <div>popover内容</div>
    </template>
    <Button>top</Button>
  </popover>

  <popover position="bottom">
    <template v-slot:content>
      <div>popover内容</div>
    </template>
    <Button>bottom</Button>
  </popover>

  <popover position="left">
    <template v-slot:content>
      <div>popover内容</div>
    </template>
    <Button>left</Button>
  </popover>

  <popover position="right">
    <template v-slot:content>
      <div>popover内容</div>
    </template>
    <Button>right</Button>
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
