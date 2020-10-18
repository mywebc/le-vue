<template>
  <div class="aside">
    <ul class="aside_items">
      <li>
        <router-link to="/doc/switch" active-class="activeCurrent">Switch组件</router-link>
      </li>
      <li>
        <router-link to="/doc/button" active-class="activeCurrent">Button组件</router-link>
      </li>
      <li>
        <router-link to="/doc/dialog" active-class="activeCurrent">Dialog组件</router-link>
      </li>
      <li>
        <router-link to="/doc/tabs" active-class="activeCurrent">Tabs组件</router-link>
      </li>
      <li>
        <router-link to="/doc/input" active-class="activeCurrent">Input组件</router-link>
      </li>
      <li>
        <router-link to="/doc/form" active-class="activeCurrent">Form组件</router-link>
      </li>
      <li>
        <router-link to="/doc/select" active-class="activeCurrent">Select组件</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {};
</script>
 
<style lang="scss" scoped>
.aside {
  width: 260px;
  border-right: 1px solid #eee;
  box-shadow: 2px 2px 10px #eee;
  .aside_items {
    li {
      height: 40px;
      cursor: pointer;
      a {
        color: #000;
        display: inline-block;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      &:hover {
        a {
          color: rgb(7 177 99);
        }
      }
      .activeCurrent {
        border-right: 3px solid rgb(7 177 99);
        background: rgb(236 253 245);
      }
    }
    .activeCurrent {
      color: rgb(7 177 99);
    }
  }
}
</style>

