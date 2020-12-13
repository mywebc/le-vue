<demo>
布局二
</demo>

<template>
<Layout>
    <Header>Header</Header>
    <Layout>
        <Side>Side</Side>
        <Content>Content</Content>
    </Layout>
    <Footer>Footer</Footer>
</Layout>
</template>

<script lang="ts">
import {
    Content,
    Layout,
    Footer,
    Header,
    Side
} from "../../lib/Layout"

export default {
    components: {
        Content,
        Layout,
        Footer,
        Header,
        Side
    }
}
</script>

<style lang="scss" scoped>
.le-layout {
    color: #fff;
    font-size: 14px;

    .le-layout-header {
        background-color: #7dbcea;
        height: 80px;
    }

    &>.le-layout {
        .le-layout-content {
            background-color: rgba(16, 142, 233, 1);
            height: 200px;
        }

        .le-layout-side {
            background-color: #3ba0e9;
            height: 200px;
            width: 100px;
        }
    }

    .le-layout-footer {
        background-color: #7dbcea;
        height: 80px;
    }
}
</style>
