<template>
    <div>
        <h1>Tabs示例</h1>
        <Tabs>
            <Tab title="导航一">tab1</Tab>
            <Tab title="导航二">tab2</Tab>
        </Tabs>
    </div>
</template>

<script lang="ts">
import Tabs from "../lib/Taps.vue"
import Tab from "../lib/Tap.vue"

export default {
    components: {Tabs,Tab}
}
</script>