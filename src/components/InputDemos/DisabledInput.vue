<demo>
禁用状态
</demo>

<template>
    <Input placeholder="请输入内容" disabled v-model:value="value"/>
</template>

<script lang="ts">
import Input from "../../lib/Input.vue";
import { ref } from "vue";

export default {
    components: {
        Input
    },
     setup() {
        const value = ref("")
        return {
            value
        }
    }
}
</script>

