<template>
  <div class="home">
    <TopNav />
    <div class="banner">
      <div class="logo">
        <img src="../assets/logo.png" alt />
      </div>
      <div class="intro">
        <h1>Le-UI</h1>
        <h3>基于Vue3和TypeScript的UI框架</h3>
        <div class="links">
          <router-link to="/doc" class="start">查看文档</router-link>
          <a href="http://github.com" class="github" target="_blank">Github</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from "../components/TopNav.vue";
export default {
  components: { TopNav }
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex: 1;
  .banner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 60px;
    box-shadow: 1px 1px 4px #eee;

    .logo {
      img {
        width: 200px;
        height: 200px;
      }
    }
    .intro {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;
      h1 {
        font-weight: 700;
        color: #42b983;
      }
      h3 {
        margin: 20px 0px;
        color: #42b983;
      }
      .links {
          width: 280px;
          display: flex;
          justify-content: space-between;
          align-content: center;
        a {
          display: inline-block;
          width: 8rem;
          text-align: center;
          border-radius: 20px;
          border: 1px solid #42b983;
          padding: 6px 2px;
        }
        .start {
          background-color: #fff;
          color: #42b983;
        }
        .github {
          background-color: #fff;
          color: #42b983;
        }
      }
    }
  }
}
</style>