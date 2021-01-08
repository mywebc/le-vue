<template>
  <div class="aside">
    <ul class="aside_items">
      <li>
        <router-link to="/doc/intro" active-class="activeCurrent">介绍</router-link>
      </li>
      <!--
       <li>
        <router-link to="/doc/install" active-class="activeCurrent">安装</router-link>
      </li>
      -->
      <li>
        <router-link to="/doc/get-started" active-class="activeCurrent">快速上手</router-link>
      </li>

      <h4>components</h4>
      <br>
      <span>通用</span>
       <li>
        <router-link to="/doc/button" active-class="activeCurrent">Button 按钮</router-link>
      </li>
       <li>
        <router-link to="/doc/icon" active-class="activeCurrent">Icon</router-link>
      </li>
      <span>布局</span>
        <li>
        <router-link to="/doc/layout" active-class="activeCurrent">Layout 布局</router-link>
      </li>
      <span>导航</span>
       <li>
        <router-link to="/doc/affix" active-class="activeCurrent">Affix 固钉</router-link>
      </li>
      <li>
        <router-link to="/doc/pager" active-class="activeCurrent">Pager 页码</router-link>
      </li>
      <span>数据录入</span>
        <li>
        <router-link to="/doc/switch" active-class="activeCurrent">Switch 开关</router-link>
      </li>
       <li>
        <router-link to="/doc/input" active-class="activeCurrent">Input 输入框</router-link>
      </li>
       <li>
        <router-link to="/doc/radio" active-class="activeCurrent">Radio 单选框</router-link>
      </li>
      <li>
        <router-link to="/doc/checkBox" active-class="activeCurrent">CheckBox 复选框</router-link>
      </li>
      <li>
        <router-link to="/doc/rate" active-class="activeCurrent">Rate 评分</router-link>
      </li>
      <span>数据展示</span>
       <li>
        <router-link to="/doc/spin" active-class="activeCurrent">Spin 加载中</router-link>
      </li>
     
       <li>
        <router-link to="/doc/collapse" active-class="activeCurrent">Collapse 折叠面板</router-link>
      </li>
       <li>
        <router-link to="/doc/tabs" active-class="activeCurrent">Tabs 标签页</router-link>
      </li>
       <li>
        <router-link to="/doc/carousel" active-class="activeCurrent">Carousel 走马灯</router-link>
      </li>
      <span>信息反馈</span>
        <li>
        <router-link to="/doc/drawer" active-class="activeCurrent">Drawer 抽屉</router-link>
      </li>
      <li>
        <router-link to="/doc/message" active-class="activeCurrent">Message 信息提示</router-link>
      </li>
      <li>
        <router-link to="/doc/dialog" active-class="activeCurrent">Dialog 对话框</router-link>
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
      list-style: none;
      a {
        color: rgba(0,0,0,.7);
        display: inline-block;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: start;
        align-items: center;
        padding-left: 50px;
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
    h4 {
      padding-left: 50px;
    }
    span {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.45);
        padding-left: 50px;
        display: inline-block;
        height: 40px;
        line-height: 40px;
      }
  }
}
</style>
