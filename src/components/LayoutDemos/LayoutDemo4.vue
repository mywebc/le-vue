<demo>
布局四
</demo>

<template>
<Layout>
    <Side>Side</Side>
    <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
    </Layout>
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

    .le-layout-side {
        background-color: #3ba0e9;
        height: 360px;
        width: 100px;
    }

    &>.le-layout {
        .le-layout-header {
            background-color: #7dbcea;
            height: 80px;
        }

        .le-layout-content {
            background-color: rgba(16, 142, 233, 1);
            height: 200px;
        }

        .le-layout-footer {
            background-color: #7dbcea;
            height: 80px;
        }
    }
}
</style>
