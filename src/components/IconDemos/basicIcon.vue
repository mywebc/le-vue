<demo>
基本用法
</demo>

<template>
<Icon name='txt' />
<Icon name='pin' />
<Icon name='reeor' />
<Icon name='close' />
<Icon name='share' />
<Icon name='sorting' :style="{ fill: '#f56c6c' }" />
<Icon name='flag' :style="{ fill: '#409eff' }" />
<Icon name='Top' :style="{ fill: '#219c91' }" />
<Icon name='video' :style="{ fill: '#67c23a' }" />
<Icon name='vs' :style="{ fill: 'skyblue' }" />
</template>

<script lang="ts">
import Icon from "../../lib/Icon.vue"
export default {
    components: {
        Icon
    }
}
</script>

<style lang="scss" scoped>
.le-icon {
    width: 24px;
    height: 24px;
}
</style>
