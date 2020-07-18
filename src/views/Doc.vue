<template>
  <div class="doc">
    <TopNav />
    <div class="content">
      <Aside />
      <Main />
    </div>
  </div>
</template>

<script>
import TopNav from "../components/TopNav.vue";
import Aside from "../components/Doc/Aside.vue";
import Main from "../components/Doc/Main.vue";

export default {
  components: { TopNav, Aside, Main }
};
</script>

<style lang="scss" scoped>
.doc {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex: 1;
  .content {
    display: flex;
    flex: 1;
    padding-top: 10px;
  }
}
</style>