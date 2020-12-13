<demo>
基本用法
</demo>

<template>
<Input placeholder="请输入内容" v-model:value="value" />
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
        const value = ref("123")
        return {
            value
        }
    }
}
</script>
