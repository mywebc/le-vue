<template>
<div class="layout-doc">
    <h2>Layout 布局</h2>
    <div class="des">
        <h3>组件概述</h3>
        <p>* Layout：布局容器，其下可嵌套 Header Sider Content Footer 或 Layout 本身，可以放在任何父容器中。</p>
        <p>* Header：顶部布局，自带默认样式，其下可嵌套任何元素。</p>
        <p>* Sider：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素。</p>
        <p>* Content：内容部分，自带默认样式，其下可嵌套任何元素。</p>
        <p>* Footer：底部布局，自带默认样式，其下可嵌套任何元素。</p>
        <span>注意：采用 flex 布局实现，请注意浏览器兼容性问题。</span>
    </div>
    <Demo :component="LayoutDemo1" describe="布局一" />
    <Demo :component="LayoutDemo2" describe="布局二" />
    <Demo :component="LayoutDemo3" describe="布局三" />
    <Demo :component="LayoutDemo4" describe="布局四" />
</div>
</template>

<script lang="ts">
import Table from "../lib/Table.vue";
import LayoutDemo1 from "./LayoutDemos/LayoutDemo1.vue";
import LayoutDemo2 from "./LayoutDemos/LayoutDemo2.vue";
import LayoutDemo3 from "./LayoutDemos/LayoutDemo3.vue";
import LayoutDemo4 from "./LayoutDemos/LayoutDemo4.vue";
import Demo from "./Demo.vue";

export default {
    components: {
        Demo,
        Table
    },
    setup() {
        return {
            LayoutDemo1,
            LayoutDemo2,
            LayoutDemo3,
            LayoutDemo4
        }
    }
}
</script>

<style lang="scss" scoped>
.layout-doc {
    width: 100%;

    .des {
        font-size: 16px;
        margin: 10px 0;
        p {
            display: flex;
            align-items: center;
            margin: 6px 0;
        }
        span {
            font-size: 14px;
            font-style: italic;
            color: #697b8c;
        }
    }
}
</style>
