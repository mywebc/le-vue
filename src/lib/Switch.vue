<template>
  <button @click="handleClick" :class="{checked:clickToggle}">
    <span></span>
  </button>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  setup(props) {
    const clickToggle = ref(false);

    const handleClick = () => {
      clickToggle.value = !clickToggle.value;
    };
    return {
      handleClick,
      clickToggle
    };
  }
};
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;

button {
  height: $h;
  width: $h * 2;
  border: none;
  border-radius: $h/2;
  position: relative;
}

span {
  position: absolute;
  height: $h2;
  width: $h2;
  top: 2px;
  left: 2px;
  background: white;
  border-radius: $h/2;
  transition: left 250ms;
}
button.checked {
  background: blue;
}

button.checked > span {
  left: calc(100% - #{$h2} - 2px);
}

button:focus {
    outline: none;
}
</style>