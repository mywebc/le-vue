<template>
  <div>
    dialog示例
    <Button @click="toggleDialog">toggle</Button>
    <Dialog v-model:visible="isShowDialog" :isCanClickOverlay="false" :mask="false">
      <template v-slot:title>
        <strong>提示</strong>
      </template>
      <template v-slot:content>
        <strong>内容区域</strong>
      </template>
      <template v-slot:footer>
          <Button @click="toggleDialog">确认</Button>
          <Button @click="toggleDialog">取消</Button>
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";

export default {
  components: {
    Dialog,
    Button
  },
  setup() {
    const isShowDialog = ref(false);
    const toggleDialog = () => {
      isShowDialog.value = !isShowDialog.value;
    };
    return {
      toggleDialog,
      isShowDialog
    };
  }
};
</script>
