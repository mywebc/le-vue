<template>
<div class="input-doc">
    <h2>Input 输入框</h2>
    <Demo :component="BasicInput" describe="最基本的用法" />
    <Demo :component="DisabledInput" describe="设置disabled,可以禁用" />
    <Demo :component="ClearableInput" describe="设置clearable属性，可清除" />
    <Demo :component="ShowPassword" describe="使用show-password,即可得到一个密码框" />
    <Demo :component="IconInput" describe="可以通过 prefix-icon 和 suffix-icon 属性在 input 组件首部和尾部增加显示图标" />
    <Demo :component="TextareaInput" describe="设置type属性指定为文本域" />
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

export default {
    components: {
        Demo
    },
    setup() {
        return {
            BasicInput,
            DisabledInput,
            ClearableInput,
            ShowPassword,
            IconInput,
            TextareaInput
        }
    }
}
</script>

<style lang="scss" scoped>
.input-doc {
    width: 100%;
}
</style>
