<template>
<div :class="{
    'le-layout': true,
    'hasSide': hasSide
}">
    <slot></slot>
</div>
</template>

<script lang="ts">
import { Side } from "./index";
import { ref } from "vue";

export default {
    setup(props, { slots }){
        const hasSide  = ref(false);
        const defaults = slots.default();
        defaults.forEach(_ => {
            if (_.type === Side) {
                hasSide.value = true
            }
        });
        return {
            hasSide
        }
    }
}
</script>

<style lang="scss" scoped>
.le-layout {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    &.hasSide {
    flex-direction: row;
  }
}
</style>
