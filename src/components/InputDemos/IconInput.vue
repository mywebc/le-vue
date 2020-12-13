<demo>
带 icon 的输入框
</demo>

<template>
<Input placeholder="请输入内容" prefixIcon="usercenter1" v-model:value="value1" /> &nbsp;
<Input placeholder="请输入内容" suffixIcon="search" v-model:value="value2" />
</template>

<script lang="ts">
import Input from "../../lib/Input.vue";
import {
    ref
} from "vue";

export default {
    components: {
        Input
    },
    setup() {
        const value1 = ref("");
        const value2 = ref("");
        return {
            value1,
            value2
        }
    }
}
</script>
