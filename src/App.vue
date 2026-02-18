<script setup>
import { ref } from 'vue';

//import HelloWorld from './components/HelloWorld.vue'
import Bubbles from './components/Bubbles.vue';
import FishBackground from './components/FishBackground.vue';

import Header from './section/Header.vue';
import Sidebar from './section/Sidebar.vue';
import Footer from './section/Footer.vue';

import Loading from './components/Loading.vue';

const isLoading = ref(true);

const handleFinish = () => {
  isLoading.value = false;
  //最初はisLoadingがtrueでそれをfalseにする
}

</script>

<template>
  <div id="app">
    <!--ローディング-->
    <Loading v-if="isLoading" @finish="handleFinish"></Loading>

    <div class="bg-layer">
      <FishBackground></FishBackground>
      <Bubbles></Bubbles>
    </div>

    <Header></Header>

    <div class="app-wrapper">
      <Sidebar :activeSection="activeSection"></Sidebar>
      <div class="right-group">
        <router-view @change-section="activeSection = $event"></router-view>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<style scoped>
.bg-layer {
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background-color: var(--color-bg);
  transition:
    background-color 1.5s ease,
    color 1s ease;
}

.fish {
  width: 30px;
}

</style>
