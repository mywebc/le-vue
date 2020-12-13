<demo>
可清除
</demo>

<template>
<Rate v-model:value="value" allowClear/>
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
        const value = ref(1);
        return {
            value
        }
    }
}
</script>
