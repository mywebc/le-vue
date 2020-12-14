<demo>
自定义页脚
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
</Dialog>
<Dialog v-model:visible="isShowDialog2" :isCanClickOverlay="false" :mask="false">
    <template v-slot:title>
        <strong>提示</strong>
    </template>
    <template v-slot:content>
        <p>这是一段信息。</p>
        <p>这是一段信息。</p>
        <p>这是一段信息。</p>
    </template>
    <template v-slot:footer>
        <Button @click="toggleDialog2" level="main">确认文本</Button>
    </template>
</Dialog>
<Button @click="toggleDialog1">without Footer </Button>
<Button @click="toggleDialog2">custom Footer</Button>
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
        const isShowDialog2 = ref(false);
        const toggleDialog1 = () => {
            isShowDialog.value = !isShowDialog.value;
        };

        const toggleDialog2 = () => {
            isShowDialog2.value = !isShowDialog2.value;
        }
        return {
            toggleDialog1,
            isShowDialog,
            isShowDialog2,
            toggleDialog2
        };
    }
}
</script>
