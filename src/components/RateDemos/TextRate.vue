<demo>
辅助文字
</demo>

<template>
<Rate v-model:value="value" :tooltips="['极差', '失望', '一般', '满意', '惊喜']"/>
</template>

<script lang="ts">
import Rate from "../../lib/Rate.vue";
import {
    ref
} from "vue";
export default {
    components: {
        Rate
    },
    setup() {
        const value = ref(2);
        return {
            value
        }
    }
}
</script>
