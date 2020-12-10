<template>
<div :class="{
	'le-input': true,
	'le-input-disabled': disabled ,
	'clearable': clearable,
	'show-password': showPassword,
	'show-prefixIcon': prefixIcon,
	'show-suffixIcon': suffixIcon
}
	">
    <!-- 前缀 -->
    <div v-if="prefixIcon" class="prefixIcon">
        <Icon :name="prefixIcon" />
    </div>
    <!-- input -->
    <template v-if="inputType !== 'textarea'">
        <input :type="inputType" :placeholder="placeholder" ref="inputRef" :readonly="disabled">
    </template>
    <!-- textarea -->
    <template v-if="inputType === 'textarea'">
        <textarea  :rows="row"></textarea>
    </template>

    <!-- 后缀 -->
    <div v-if="suffixIcon && !clearable && !showPassword" class="suffixIcon">
        <Icon :name="suffixIcon" />
    </div>

    <div v-if="clearable && !showPassword && !suffixIcon" class="close" @click="clearInputVal">
        <Icon name="close" />
    </div>
    <div v-if="showPassword && !clearable && !suffixIcon" class="password" @click="togglePassword">
        <Icon :name="passwordVisible ? 'visible': 'not-visible'" :style="{ fill: 'rgba(0,0,0,0.45)' }" />
    </div>
</div>
</template>

<script lang="ts">
import {
    computed,
    ref
} from 'vue';
import Icon from "../lib/Icon.vue";

export default {
    components: {
        Icon
    },
    props: {
        disabled: {
            type: Boolean,
            default: false,
        },
        clearable: {
            type: Boolean,
            default: false
        },
        showPassword: {
            type: Boolean,
            default: false
        },
        prefixIcon: {
            type: String,
        },
        suffixIcon: {
            type: String,
        },
        placeholder: {
            type: String,
            default: "请输入内容"
        },
        type: {
            type: String,
            default: "text"
        },
        row: {
            type: [String ,Number],
            default: 2
        }
    },
    setup(props, context) {
        const inputRef = ref(null);
        const passwordVisible = ref(false);

        const clearInputVal = () => {
            inputRef.value.value = ""
        }

        const togglePassword = () => {
            passwordVisible.value = !passwordVisible.value
        }

        const inputType = computed(() => {
            return passwordVisible.value ? 'password' : props.type
        })

        return {
            clearInputVal,
            inputRef,
            togglePassword,
            passwordVisible,
            inputType
        }
    }
}
</script>

<style lang="scss" scoped>
.le-input {
    position: relative;
    display: inline-flex;
    align-items: center;

    input {
        font-size: 14px;
        padding: 4px 11px;
        line-height: 20px;
        border-radius: 4px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
        color: rgba(0, 0, 0, 0.65);
        outline: none;
        display: flex;

        &:focus {
            border: 1px solid #5db2f7;
        }

        &:hover {
            border: 1px solid #5db2f7;
        }
    }

    &.clearable,
    &.show-password,
    &.show-suffixIcon {
        input {
            padding-right: 20px !important;
        }
    }

    &.show-prefixIcon {
        input {
            padding-left: 20px !important;
        }
    }

    & .close,
    & .password,
    & .suffixIcon {
        position: absolute;
        right: 4px;
        cursor: pointer;
    }

    & .prefixIcon {
        position: absolute;
        left: 4px;
    }

    &.le-input-disabled {
        input {
            cursor: not-allowed;
            color: rgba(0, 0, 0, 0.25);
            border-color: #d9d9d9;
            background-color: #e6e6e6;
        }
    }
}
</style>
