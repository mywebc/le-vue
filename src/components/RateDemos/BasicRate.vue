<demo>
基本用法
</demo>

<template>
<Rate v-model:value="value" @onChange="handleChange" />
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
        const handleChange = (i) => {
            console.log("change", i)
        };
        return {
            handleChange,
            value
        }
    }
}
</script>
