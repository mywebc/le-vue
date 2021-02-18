<template>
<div class="main">
    <div class="doc-wrapper">
        <router-view></router-view>
    </div>
</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main {
    width: 100%;
    // height: calc(100vh - 80px);
    display: flex;
    // overflow: hidden;

    .doc-wrapper {
        width: 100%;
        // overflow: auto;
        padding: 20px 40px 40px 40px;
    }
}
</style>
