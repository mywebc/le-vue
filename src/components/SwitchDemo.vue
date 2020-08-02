<template>
  <Switch v-model:value="switchVal" :disabled="false" @onChange="handleChange" trueColor="green"/>
</template>
<script lang="ts">
import Switch from "../lib/Switch.vue";
import { ref } from "vue";

export default {
  components: { Switch },
  setup() {
    const switchVal = ref(false);
    const handleChange = (val) => {
        console.log("改变后的值", val)
    }
    return { switchVal,handleChange };
  }
};
</script>