<demo>
基本用法
</demo>
<template>
  <Pager :totalPage="5" v-model:currentPage="currentPage" @currentChange="aa"/>
</template>

<script lang="ts">
import Pager from "../../lib/Pager.vue";
import Button from "../../lib/Button.vue";
import { ref } from "vue";

export default {
  components: { Button, Pager },
  setup() {
    const currentPage = ref(1);
    const aa = (x) => {
      console.log(x)
    }
    return {
      currentPage,
      aa
    };
  },
};
</script>
