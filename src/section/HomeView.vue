<script setup>
import { onMounted, ref } from 'vue';
//import HelloWorld from './components/HelloWorld.vue'
import Sidebar from './Sidebar.vue'
import HamburgerMenu from './HamburgerMenu.vue';

import About from './About.vue'
import Profile from './Profile.vue'
import Skills from './Skills.vue'
import Works from './Works.vue'
import Message from './Message.vue';



//スクロール Sidevar.vueに渡す用
const activeSection = ref("");

onMounted(() => {
  const sections = document.querySelectorAll(".section-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          activeSection.value = entry.target.id;
        }
      });
    },
    {
      rootMargin: "-40% 0px -40% 0px"
    }
  );
  sections.forEach(sec => observer.observe(sec));
});

</script>

<template>
  <div id="app">
    <div class="app-wrapper">
      <HamburgerMenu></HamburgerMenu>
      <Sidebar :activeSection="activeSection"></Sidebar>
      <!--親コンポーネントが持っているactiveSectionという
      stateをSidebarにactiveSectionという名前で渡す処理-->
      <div class="right-group">
        <About></About>
        <Profile></Profile>
        <Works></Works>
        <Skills></Skills>
        <Message></Message>
      </div>

    </div>
  </div>

</template>

<style scoped>
.app-wrapper {
  position: relative;
  z-index: 1;
  /* 背景より前 */
  min-height: 100vh;
  overflow: visible;
}

.right-group {
  margin-left: calc(220px + 10px + 40px);
  margin-right: 40px;
  max-width: 1400px;  

  width: calc(100% - 220px - 40px);
  padding-right: 50px;
  box-sizing: border-box;
}

.main-card {
  width: 100%;
  border-radius: 12px;
  padding-bottom: 5px;
  background-color: var(--color-bg-main);
}

@media (max-width: 1024px) {
  .right-group {
    margin: 0 auto;
    max-width: 800px;
    width: 100%;
    padding: 0 30px;
    box-sizing: border-box;
  }
  .main-card {
    padding-left: 20px;
    padding-right: 20px;
  }
}

</style>
