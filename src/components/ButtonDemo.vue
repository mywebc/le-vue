<template>
  <div class="butotn_doc">
    <div>Button按钮</div>
    <Button>按钮</Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";

export default {
  components: { Button }
};
</script>

<style lang="scss" scoped>
.butotn_doc {
  width: 100%;
  min-width: 100px;
  padding: 10px 40px;
}
</style>