<template>
  <div class="main">
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  padding: 20px 40px;
  overflow: auto;
}
</style>



