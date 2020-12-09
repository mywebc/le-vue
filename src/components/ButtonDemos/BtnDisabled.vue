
<demo>
禁用状态
</demo>

<template>
    <Button disabled>normal disabled</Button>
    <Button level="main" disabled>main normal</Button>
    <Button level="danger" disabled>danger normal</Button>
    <Button theme="text" level="danger" disabled>danger text</Button>
</template>

<script lang="ts">
import Button from "../../lib/Button.vue"

export default {
    components: { Button }
}
</script>