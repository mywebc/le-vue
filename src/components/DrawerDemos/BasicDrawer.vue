<template>
  <Button @click="drawerDeafult">default</Button>
</template>

<script lang="ts">
import Button from "../../lib/Button.vue";
export default {
  components: { Button },
  setup() {
    const drawerDeafult = () => {
        console.log("asdasd")
    };
    return {
      drawerDeafult,
    };
  },
};
</script>
