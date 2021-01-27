<demo>
基础用法
</demo>

<template>
  <Tabs v-model:selected="current">
    <Tab title="导航一">tab1</Tab>
    <Tab title="导航二">tab2</Tab>
    <Tab title="导航三">tab3</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from "../../lib/Tabs.vue";
import Tab from "../../lib/Tab.vue";
import { ref } from "vue";
export default {
  components: { Tabs, Tab },
  setup() {
    const current = ref("导航一");

    return { current };
  },
};
</script>
