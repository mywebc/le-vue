<template>
<div class="input-doc">
    <h2>Input 输入框</h2>
    <Demo :component="BasicInput" describe="最基本的用法" />
    <Demo :component="DisabledInput" describe="设置disabled,可以禁用" />
    <Demo :component="ClearableInput" describe="设置clearable属性，可清除" />
    <Demo :component="ShowPassword" describe="使用show-password,即可得到一个密码框" />
    <Demo :component="IconInput" describe="可以通过 prefix-icon 和 suffix-icon 属性在 input 组件首部和尾部增加显示图标" />
    <Demo :component="TextareaInput" describe="设置type属性指定为文本域" />
    <h2>API</h2>
    <Table :columns="columns" :dataSource="dataSource" />
    <h2>Methods</h2>
    <Table :columns="columns" :dataSource="dataSource2" />
</div>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import BasicInput from "./InputDemos/BasicInput.vue";
import DisabledInput from "./InputDemos/DisabledInput.vue";
import ClearableInput from "./InputDemos/ClearableInput.vue";
import ShowPassword from "./InputDemos/ShowPassword.vue";
import TextareaInput from "./InputDemos/TextareaInput.vue";
import IconInput from "./InputDemos/IconInput.vue";
import Table from "../lib/Table.vue"
import {
    reactive
} from "vue";

export default {
    components: {
        Demo, Table
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

        const dataSource = reactive([
             {
                params: "v-model/value",
                description: "默认的绑定值",
                type: "string",
                default: "-"
            },
            {
                params: "clearable",
                description: "是否可清空",
                type: "boolean",
                default: "false"
            },
            {
                params: "disabled",
                description: "是否禁用",
                type: "boolean",
                default: "false"
            },
            {
                params: "showPassword",
                description: "是否为密码框",
                type: "boolean",
                default: "false"
            }, {
                params: "prefixIcon",
                description: "前缀图标",
                type: "string",
                default: "-"
            },
            {
                params: "suffixIcon",
                description: "后缀图标",
                type: "string",
                default: "-"
            },
            {
                params: "placeholder",
                description: "输入框占位文本",
                type: "string",
                default: "-"
            },
            {
                params: "type",
                description: "类型",
                type: "string",
                default: "text，textarea 和其他 原生 input 的 type 值"
            }, {
                params: "row",
                description: "textarea指定行数",
                type: "string,number",
                default: "2"
            },
        ]);

        const dataSource2 = reactive([{
                params: "blur",
                description: "在 Input 失去焦点时触发",
                type: "(event: Event) => void",
                default: "-"
            },
            {
                params: "focus",
                description: "在 Input 获得焦点时触发",
                type: "(event: Event) => void",
                default: "-"
            },
            {
                params: "change",
                description: "仅在输入框失去焦点或用户按下回车时触发",
                type: "bool(value: string) => void",
                default: "-"
            },
            {
                params: "input",
                description: "在 Input 值改变时触发",
                type: "(value: string) => void",
                default: "-"
            },
            {
                params: "clear",
                description: "在点击由 clearable 属性生成的清空按钮时触发",
                type: "-",
                default: "-"
            },
        ]);

        return {
            BasicInput,
            DisabledInput,
            ClearableInput,
            ShowPassword,
            IconInput,
            TextareaInput,
            dataSource2,
            dataSource,
            columns
        }
    }
}
</script>

<style lang="scss" scoped>
.input-doc {
    width: 100%;
}
</style>
