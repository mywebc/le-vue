<template>
<div class="icon-doc">
    <h2>Icon 图标</h2>
    <Demo :component="BasicIcon" describe="直接通过设置name属性来使用即可。" />
    <h2>图标来源</h2>
    <p>目前图标来源均来自<a target="_blank" href="https://www.iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.d9df05512&cid=19238">阿里巴巴国际站官方图标库</a>；
    name属性可以直接参考此图标库。
    </p>
</div>
</template>

<script lang="ts">
import Icon from "../lib/Icon.vue"
import Demo from "./Demo.vue";
import BasicIcon from "./IconDemos/BasicIcon.vue";

export default {
    components: {
        Icon,
        Demo
    },
    setup() {
        return {
            BasicIcon
        }
    }

}
</script>

<style lang="scss" scoped>
.icon-doc {
    width: 100%;
}
</style>
