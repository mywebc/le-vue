<template>
  <div class="topnav">
    <div class="left_logo">
      <router-link to="/">
        <img src="../assets/logo.png" alt />
      </router-link>
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
    img {
      width: 40px;
      height: 40px;
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
}
</style>