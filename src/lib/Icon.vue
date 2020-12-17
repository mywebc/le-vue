<template>
<svg class="le-icon">
    <use :xlink:href="`#icon-${name}`" :class="name"></use>
</svg>
</template>

<script lang="ts">
import  "../assets/js/iconFont.js";

export default {
    props: {
        name: {
            type: String,
        }
    }
}
</script>

<style lang="scss" scoped>
.le-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>
