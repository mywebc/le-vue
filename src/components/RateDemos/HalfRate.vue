<demo>
支持半选
</demo>

<template>
<Rate v-model:value="value" allowHalf/>
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
        const value = ref(3.5);
        return {
            value
        }
    }
}
</script>
