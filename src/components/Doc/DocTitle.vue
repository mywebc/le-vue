<template>
  <div class="doc_common_title">
    <section>
      <h1>{{componentName}}</h1>
      <p class="text">{{componentTxt}}</p>
    </section>
    <section>
      <h2>何时使用</h2>
      <p class="text">{{componentDescription}}</p>
    </section>
    <section>
      <h2>代码示例</h2>
    </section>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    componentName: String,
    componentTxt: String,
    componentDescription: String
  }
};
</script>

<style lang="scss" scoped>
.doc_common_title {
  section {
    padding: 20px;
    padding-bottom: 0;
    padding-left: 25px;
    max-width: 1000px;
    margin: 0 auto;
    margin-bottom: 20px;
    font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
    color: #273849;
    > h1 {
      font-weight: 500;
      margin-bottom: 10px;
    }
    > h2 {
      font-weight: 400;
      margin-bottom: 10px;
    }
    .text {
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
      color: rgba(0, 0, 0, 0.65);
    }
  }
}
</style>