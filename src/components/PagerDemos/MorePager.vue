<demo>
更多
</demo>
<template>
  <Pager :totalPage="100" v-model:currentPage="currentPage" />
</template>

<script lang="ts">
import Pager from "../../lib/Pager.vue";
import Button from "../../lib/Button.vue";
import { ref } from "vue";

export default {
  components: { Button, Pager },
  setup() {
    const currentPage = ref(1);
    return {
      currentPage,
    };
  },
};
</script>
