
<demo>
设置等级
</demo>

<template>
    <Button>normal</Button>
    <Button level="main">main normal</Button>
    <Button level="danger">danger normal</Button>
    <Button theme="link" level="main">main link</Button>
    <Button theme="link" level="danger">danger link</Button>
    <Button theme="text" level="main">main text</Button>
    <Button theme="text" level="danger">danger text</Button>
</template>

<script lang="ts">
import Button from "../../lib/Button.vue"

export default {
    components: { Button }
}
</script>