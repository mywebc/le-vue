<template>
  <article class="markdown-body" v-html="content"></article>
</template>

<script lang="ts">
import { ref } from "vue";
import "github-markdown-css/github-markdown.css";

export default {
  props: {
    content: {
      type: String,
      required: true,
    },
  },
  setup() {},
};
</script>

