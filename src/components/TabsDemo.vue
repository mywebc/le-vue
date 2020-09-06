<template>
    <div>
        Tabs示例
        <Tabs>
            <Tab title="导航一">tab1</Tab>
            <Tab title="导航二">tab2</Tab>
        </Tabs>
    </div>
</template>

<script lang="ts">
import Tabs from "../lib/Tabs.vue"
import Tab from "../lib/Tab.vue"

export default {
    components: {Tabs,Tab}
}
</script>