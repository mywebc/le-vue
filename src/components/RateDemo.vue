<template>
<div class="rate-doc">
    <h2>Rate 评分</h2>
    <Demo :component="BasicRate" describe="最基本的用法" />
    <Demo :component="DIsableRate" describe="设置只读状态" />
    <Demo :component="HalfRate" describe="allowHalf属性可以支持半选" />
    <Demo :component="ClearRate" describe="可清除" />
    <Demo :component="IconRate" describe="当然你也可以自定义icon" />
    <Demo :component="TextRate" describe="用辅助文字直接地表达对应分数" />
    <h2>API</h2>
    <Table :columns="columns" :dataSource="dataSource" />
    <h2>Methods</h2>
    <Table :columns="columns" :dataSource="dataSource2" />
</div>
</template>

<script lang="ts">
import BasicRate from "./RateDemos/BasicRate.vue";
import DIsableRate from "./RateDemos/DIsableRate.vue";
import HalfRate from "./RateDemos/HalfRate.vue";
import ClearRate from "./RateDemos/ClearRate.vue";
import IconRate from "./RateDemos/IconRate.vue";
import TextRate from "./RateDemos/TextRate.vue";
import Demo from "./Demo.vue";
import Table from "../lib/Table.vue";
import {
    reactive
} from "vue";

export default {
    components: {
        Demo,
        Table
    },
    setup() {
        const columns = reactive([{
                text: "参数",
                field: "params"
            },
            {
                text: "说明",
                field: "description"
            },
            {
                text: "类型",
                field: "type"
            },
            {
                text: "默认值",
                field: "default"
            }
        ]);

        const dataSource = reactive([{
                params: "v-model/value",
                description: "绑定值",
                type: "number",
                default: "-"
            },
            {
                params: "disabled",
                description: "是否禁用",
                type: "boolean",
                default: "false"
            },
            {
                params: "num",
                description: "自定义rate个数",
                type: "number",
                default: "5"
            }, {
                params: "allowHalf",
                description: "是否支持半选",
                type: "boolean",
                default: "false"
            },
            {
                params: "allowClear",
                description: "是否可清除",
                type: "boolean",
                default: "false"
            },
            {
                params: "iconName",
                description: "自定义icon替换的name",
                type: "string",
                default: "-"
            },
            {
                params: "tooltips",
                description: "辅助文字的文案",
                type: "string[]",
                default: "[]"
            }
        ]);

        const dataSource2 = reactive([{
                params: "onChange",
                description: "rate值改变的回调",
                type: "(value: number) => void",
                default: "-"
            },
            {
                params: "onHoverChange",
                description: "hover Rate时的回调",
                type: "(onHoverChange) => void",
                default: "-"
            },
        ]);
        return {
            BasicRate,
            DIsableRate,
            HalfRate,
            ClearRate,
            IconRate,
            TextRate,
            dataSource,
            dataSource2,
            columns
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>
