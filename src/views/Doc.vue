<template>
  <div class="doc">
    <TopNav :isShowAside="isShowAsideIcon" :toggleAisde="toggleAisde" />
    <div class="content">
      <Aside ref="asideRef" v-if="isShowAside" />
      <Main />
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";
import Aside from "../components/Doc/Aside.vue";
import Main from "../components/Doc/Main.vue";
import { ref, onMounted, onUnmounted } from "vue";
import { router } from "../router";

export default {
  components: { TopNav, Aside, Main },
  setup(props) {
    const asideRef = ref(null);
    const isShowAside = ref(true);
    const isShowAsideIcon = ref(false);
    const clientWidth = ref(document.body.clientWidth);

    const toggleAisde = () => {
      isShowAside.value = !isShowAside.value;
    };

    const handleClientResize = () => {
      clientWidth.value = document.body.clientWidth;
      isShowAside.value = clientWidth.value < 600 ? false : true;
      isShowAsideIcon.value = clientWidth.value < 600 ? true : false;
    };

    router.beforeEach((to, from, next) => {
      handleClientResize();
      next();
    });

    onMounted(() => {
      handleClientResize();
      window.onresize = () => {
        handleClientResize();
      };
    });

    onUnmounted(() => {
      window.onresize = null;
    });

    return {
      toggleAisde,
      isShowAside,
      asideRef,
      isShowAsideIcon
    };
  }
};
</script>

<style lang="scss" scoped>
.doc {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
  .content {
    display: flex;
    padding-top: 10px;
    height: 100%;
  }
  @media screen and (max-width: 600px) {
    .aside {
      width: 110px;
    }
  }
}
</style>