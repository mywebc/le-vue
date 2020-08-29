<template>
	<Teleport to="body">
		<div v-if="visible">
				<div class="le-dialog-overlay" @click="handleOverlay" v-if="isShowOverlay"></div>
				<div class="le-dialog-wrapper">
						<div class="le-dialog">
								<header>
										<slot name="title" />
										<span @click="close" class="le-dialog-close"></span>
								</header>
								<main>
										<slot name="content" />
								</main>
								<footer>
										<slot name="footer"/>
									</footer>
						</div>
				</div>
		</div>
	</Teleport>
</template>

<script lang="ts">
import Button from "./Button.vue";
export default {
    components: {
        Button
    },
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        isCanClickOverlay: {
            type: Boolean,
            default: true
        },
				mask: {
            type: Boolean,
            default: true
        },
    },
    setup(props, context) {
        const close = () => {
            context.emit("update:visible", false);
        };
        const handleOverlay = () => {
            props.isCanClickOverlay && close();
        };
        return {
            close,
            handleOverlay
        };
    }
};
</script>

<style lang="scss">
$radius: 4px;
$border-color: #f0f0f0;

.le-dialog {
    background: white;
    border-radius: $radius;
    box-shadow: 0 0 3px fade_out(black, 0.8);
    min-width: 20em;
    max-width: 90%;

    &-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: fade_out(black, 0.5);
        z-index: 10;
    }

    &-wrapper {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 11;
    }

    >header {
        padding: 12px 16px;
        border-bottom: 1px solid $border-color;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 20px;
    }

    >main {
        padding: 12px 16px;
    }

    >footer {
        border-top: 1px solid $border-color;
        padding: 12px 16px;
        text-align: right;
    }

    &-close {
        position: relative;
        display: inline-block;
        width: 16px;
        height: 16px;
        cursor: pointer;

        &::before,
        &::after {
            content: "";
            position: absolute;
            height: 1px;
            background: black;
            width: 100%;
            top: 50%;
            left: 50%;
        }

        &::before {
            transform: translate(-50%, -50%) rotate(-45deg);
        }

        &::after {
            transform: translate(-50%, -50%) rotate(45deg);
        }
    }
}
</style>
