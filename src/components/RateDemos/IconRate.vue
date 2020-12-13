<demo>
替换icon
</demo>

<template>
<Rate v-model:value="value" iconName="smile"/>
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
