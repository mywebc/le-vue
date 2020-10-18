<template>
  <div class="home">
    <div class="home_header">
      <img src="../assets/logo.png" alt />
      <span>Le-UI</span>
    </div>
    <div class="home_main">
      <div class="home_left">
        <div class="intro">
          <h1>Le-UI</h1>
          <h3>一套基于Vue3和TypeScript的UI框架</h3>
          <div class="links">
            <router-link to="/doc" class="start">查看文档</router-link>
            <a href="http://github.com" class="github" target="_blank">Github</a>
          </div>
        </div>
      </div>
      <div class="home_right">
        <Svg />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";
import Svg from "./svg.vue";

export default {
  components: { TopNav, Svg }
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100vh;
  .home_header {
    height: 64px;
    padding-left: 10%;
    display: flex;
    align-items: center;
    img {
      width: 32px;
      height: 32px;
    }
    & > span {
      display: inline-flex;
      width: 100px;
      overflow: hidden;
      color: rgba(0, 0, 0, 0.85);
      font-size: 18px;
      font-family: "Avenir,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji";
      white-space: nowrap;
      text-decoration: none;
      line-height: 64px;
      justify-content: center;
      align-items: center;
    }
  }
  .home_main {
    display: flex;
    padding: 100px 100px;
    .home_left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 60px;
      flex: 1;

      .intro {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        h1 {
          // color: #42b983;
          color: #000;
        }
        h3 {
          text-align: center;
          margin: 20px 0px;
          color: #515a6e;
        }
        .links {
          width: 280px;
          display: flex;
          justify-content: center;
          align-content: center;
          flex-wrap: wrap;
          a {
            display: inline-block;
            width: 8rem;
            text-align: center;
            border-radius: 20px;
            border: 1px solid #42b983;
            padding: 6px 2px;
          }
          .start {
            background-color: #42b983;
            color: #fff;
            &:hover {
              opacity: 0.8;
            }
            margin-right: 20px;
            margin-top: 10px;
          }
          .github {
            margin-top: 10px;
            background-color: #fff;
            color: #42b983;
          }
        }
      }
    }
    .home_right {
      width: 500px;
      height: 500px;
      flex: 1;
    }
  }
  @media screen and (max-width: 800px) {
    .home_right {
      display: none;
    }
  }
  @media screen and (max-width: 480px) {
    .home_left {
      .intro {
        .links {
          width: 8rem !important;
          flex-wrap: wrap !important;
          .start {
            margin-right: 0 !important;
          }
        }
      }
    }
  }
}
</style>