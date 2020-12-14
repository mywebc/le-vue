<demo>
基本用法
</demo>

<template>
<Dialog v-model:visible="isShowDialog" :isCanClickOverlay="false" :mask="false">
    <template v-slot:title>
        <strong>提示</strong>
    </template>
    <template v-slot:content>
        <p>这是一段信息。</p>
        <p>这是一段信息。</p>
        <p>这是一段信息。</p>
    </template>
    <template v-slot:footer>
        <Button @click="toggleDialog">确认</Button>
        <Button @click="toggleDialog">取消</Button>
    </template>
</Dialog>
<Button @click="toggleDialog">点击打开dialog </Button>
</template>

<script lang="ts">
import Dialog from "../../lib/Dialog.vue";
import Button from "../../lib/Button.vue";
import {
    ref
} from "vue";

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
}
</script>
