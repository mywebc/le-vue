<template>
  <button class="le-switch" @click="handleClick" :class="{checked:value,disabled: disabled}">
    <span></span>
  </button>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  props: {
    value: Boolean,
    disabled: Boolean,
    trueColor: String,
    falseColor: String
  },
  setup(props, context) {
    const handleClick = () => {
      if (props.disabled) return;
      context.emit("update:value", !props.value);
      context.emit("onChange", !props.value);
    };
    
    props.trueColor && document.getElementsByTagName("body")[0].style.setProperty("--true_color", props.trueColor);
    props.falseColor && document.getElementsByTagName("body")[0].style.setProperty("--false_color", props.falseColor);
    
    return {
      handleClick
    };
  }
};
</script>

<style lang="scss">
$height: 22px;
$heightInner: $height - 4px;
$true-color: var(--true_color, #1890ff);
$false-color: var(--false_color, rgba(0, 0, 0, 0.4));

.le-switch {
  height: $height;
  width: $height * 2;
  border: none;
  border-radius: $height/2;
  background: $false-color;
  position: relative;
  > span {
    position: absolute;
    height: $heightInner;
    width: $heightInner;
    top: 2px;
    left: 2px;
    background: white;
    border-radius: $heightInner/2;
    transition: left 250ms;
  }
}

.le-switch.checked {
  background: $true-color;
  > span {
    left: calc(100% - #{$heightInner} - 2px);
  }
}

.le-switch.disabled {
  cursor: no-drop;
  opacity: 0.5;
}

.le-switch:focus {
  outline: none;
}
</style>