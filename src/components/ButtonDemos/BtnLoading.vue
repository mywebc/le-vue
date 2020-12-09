
<demo>
加载状态
</demo>

<template>
    <Button loading>normal loading</Button>
    <Button theme="text" level="danger" loading>danger text loading</Button>
</template>

<script lang="ts">
import Button from "../../lib/Button.vue"

export default {
    components: { Button }
}
</script>