<template>
<div :class="{
'le-rate': true,
'disabled': disabled
}">
    <ul class="le-rate-wrapper">
        <li v-for="i in num" @mouseenter="handleMouseEnter(i)" @mouseleave="handleMouseLeave" :class="{
            'selected': i<=currentSelect, 'currentHover': i<currentHover ,'halfSelected': i === halfSelect}">
            <div v-if="allowHalf" class="le-rate-first" @click="handleClick(i,'half')">
                <Icon :name="iconName" />
            </div>
            <div class="le-rate-second" @click="handleClick(i,'whole')">
                <Icon :name="iconName" />
            </div>
        </li>
    </ul>
    <span class="le-rate-tooltips" v-if="tooltips.length === num">{{tooltips[currentSelect-1]}}</span>
</div>
</template>

<script lang="ts">
import Icon from "./Icon.vue";
import {
    ref,
    PropType
} from "vue";

export default {
    props: {
        num: {
            type: Number,
            default: 5
        },
        value: {
            type: Number,
            default: 0
        },
        disabled: {
            type: Boolean,
            default: false
        },
        allowHalf: {
            type: Boolean,
            default: false
        },
        allowClear: {
            type: Boolean,
            default: false
        },
        iconName: {
            type: String,
            default: 'collection-fill'
        },
        tooltips: {
            type: Array as PropType < string[] > ,
            default: () => [],
        }
    },
    components: {
        Icon
    },
    emits: ['onChange', 'onHoverChange', 'update:value'],
    setup(props, ctx) {

        const halfSelect = ref(-1);

        let defaultValue = 0
        const tempValue = Math.floor(props.value)
        if (props.value - tempValue > 0 && props.allowHalf) {
            defaultValue = tempValue
            halfSelect.value = tempValue + 1
        } else {
            defaultValue = props.value
        }

        const currentHover = ref(0);
        const currentSelect = ref(defaultValue);

        const handleMouseEnter = (i: number) => {
            currentHover.value = i;
            onHoverChange(i)
        }

        const handleMouseLeave = () => {
            currentHover.value = 0;
            ctx.emit("onHoverChange", 0)
        }

        const handleClick = (i: number, type: string) => {
            if (type === "whole") {
                const newIndex = props.allowClear && currentSelect.value === i ? 0 : i
                currentSelect.value = newIndex
                onChange(newIndex)
            } else {
                const newIndex = props.allowClear && currentSelect.value === i ? 0 : i - 0.5
                const halfIndex = props.allowClear && currentSelect.value === i ? 0 : i
                currentSelect.value = newIndex
                onChange(newIndex)
                halfSelect.value = halfIndex
            }
        }

        const onHoverChange = (i: number) => {
            ctx.emit("onHoverChange", i)
        }

        const onChange = (i: number) => {
            ctx.emit("update:value", i)
            ctx.emit("onChange", i)
        }

        return {
            handleMouseEnter,
            handleMouseLeave,
            handleClick,
            currentHover,
            currentSelect,
            halfSelect
        }
    }
}
</script>

<style lang="scss" scoped>
$rateNormal: #dadada;
$rateHighLight: #eae84f;

.le-rate {
    display: flex;
    align-items: flex-end;

    .le-rate-wrapper {
        display: inline-flex;

        &>li {
            list-style: none;
            cursor: pointer;
            position: relative;

            &>.le-icon {
                fill: $rateNormal;
                width: 1.5em;
                height: 1.5em;
            }

            &>.le-rate-first {
                position: absolute;
                width: 1.5em;
                height: 1.5em;
                left: 0;
                top: 0;
                width: 50%;
                height: 100%;
                overflow: hidden;

                &>.le-icon {
                    fill: $rateNormal;
                    width: 1.5em;
                    height: 1.5em;
                    opacity: 0;
                }

                &:hover {
                    &>.le-icon {
                        fill: $rateHighLight;
                        opacity: 1;
                    }

                }
            }

            &>.le-rate-second {

                &>.le-icon {
                    fill: $rateNormal;
                    width: 1.5em;
                    height: 1.5em;
                }

                &:hover {
                    &>.le-icon {
                        fill: $rateHighLight;

                    }
                }
            }

            &.currentHover {
                .le-rate-first {
                    .le-icon {
                        fill: $rateHighLight;
                    }
                }

                .le-rate-second {
                    .le-icon {
                        fill: $rateHighLight;
                    }
                }
            }

            &.selected {
                &>.le-rate-second {
                    &>.le-icon {
                        fill: $rateHighLight;
                    }
                }
            }

            &.halfSelected {
                .le-rate-first {
                    .le-icon {
                        fill: $rateHighLight;
                        opacity: 1;
                    }
                }
            }
        }
    }

    &.disabled {
        .le-rate-wrapper {
            pointer-events: none;
            cursor: not-allowed;
        }
    }

    .le-rate-tooltips {
        font-size: 14px;
    }
}
</style>
