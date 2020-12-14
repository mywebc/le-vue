<template>
<div class="dialog-doc">
    <h2>Dialog 对话框</h2>
    <Demo :component="BasicDialog" describe="最基本的用法" />
    <Demo :component="FooterDialog" describe="Footer插槽允许你自定义页脚，不传即为不显示页脚" />

</div>
</template>

<script lang="ts">
import {
    ref
} from "vue";
import Demo from "./Demo.vue";
import BasicDialog from "../components/DialogDemos/BasicDialog.vue";
import FooterDialog from "../components/DialogDemos/FooterDialog.vue";

export default {
    components: {
        Demo
    },
    setup() {
        return {
            BasicDialog,
            FooterDialog
        }
    }
};
</script>

<style lang="scss" scoped>
.dialog-doc {
    width: 100%;
}
</style>
