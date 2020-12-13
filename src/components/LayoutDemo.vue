<template>
<div class="layout-doc">
    <h2>Layout 布局</h2>
    <Demo :component="LayoutDemo1" describe="布局一" />

</div>
</template>

<script lang="ts">
import Table from "../lib/Table.vue";
import LayoutDemo1 from "./LayoutDemos/LayoutDemo1.vue";
import Demo from "./Demo.vue";

export default {
    comments: {
        Demo,
        Table
    },
    setup() {
        return {
            LayoutDemo1
        }
    }
}
</script>

<style lang="scss" scoped>
.layout-doc {
    width: 100%;
}
</style>
