<demo>
基本用法
</demo>

<template>
  <popover>
    <template v-slot:content>
      <div>popover内容</div>
    </template>
    <Button>click me</Button>
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
