<demo>
带 icon 的输入框
</demo>

<template>
    <Input placeholder="请输入内容" prefixIcon="usercenter1"/> &nbsp;
    <Input placeholder="请输入内容" suffixIcon="search"/>
</template>

<script lang="ts">
import Input from "../../lib/Input.vue"
export default {
    components: {
        Input
    }
}
</script>

