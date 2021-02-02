<template>
  <div class="datepicker-doc">
    <h2>DatePicker 日期选择器</h2>
    <Demo :component="BasicDatePicker" describe="基本用法" />
  </div>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import BasicDatePicker from "./DatePickerDemos/BasicDatePicker.vue";

export default {
  components: {
    Demo,
  },
  setup() {
    return {
      BasicDatePicker,
    };
  },
};
</script>

<style lang="scss" scoped>
.datepicker-doc {
  width: 100%;
}
</style>
