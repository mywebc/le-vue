<template>
  <div class="topnav">
    <div class="asideIcon" @click="handleClickTopMenu" v-if="isShowAside" />
    <div class="left_logo">
      <router-link to="/">
        <img src="../assets/logo.png" alt />
      </router-link>
      <span>Le-UI</span>
    </div>
    <div class="right_guide">
      <div class="docs">
        <router-link to="/doc">Docs</router-link>
      </div>
      <div class="guide">
        <a href="https://www.github.com">Github</a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    isShowAside: {
      default: false,
      type: Boolean
    },
    toggleAisde: Function
  },
  setup(props) {
    const { toggleAisde } = props;
    const handleClickTopMenu = () => {
      console.log("toggleAisde", toggleAisde);
      toggleAisde && toggleAisde();
    };
    return { handleClickTopMenu };
  }
};
</script>

<style lang="scss" scoped>
.topnav {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 40px;
  border-bottom: 1px solid #eee;
  box-shadow: 2px 2px 10px #eee;
  .left_logo {
    display: flex;
    align-items: center;
    img {
      width: 32px;
      height: 32px;
    }
    & > span {
      display: inline-flex;
      width: 100px;
      color: rgba(0, 0, 0, 0.85);
      font-size: 18px;
      font-family: "Avenir,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji";
      white-space: nowrap;
      text-decoration: none;
      justify-content: center;
      align-items: center;
    }
  }
  .right_guide {
    display: flex;
    > div {
      margin: 0 1em;
      cursor: pointer;
      > a {
        font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
        font-size: 1rem;
        color: #304455;
        &:hover {
          color: rgb(7 177 99);
        }
      }
    }
  }
  .asideIcon {
    position: absolute;
    left: 0;
    width: 32px;
    height: 32px;
    background: url("../assets/menu.svg");
    background-size: 100% 100%;
    cursor: pointer;
  }
}
</style>