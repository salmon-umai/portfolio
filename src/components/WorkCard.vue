<script setup lang="js">
import { RouterLink } from 'vue-router';


</script>

<template>
    <div class="main-card">
        <h1 class="section-title">WORKS</h1>
        <slot></slot>
                <div class="button006">
          <router-link to="/#works">制作物一覧に戻る</router-link>
        </div>
    </div>
</template>

<style scoped>
  .main-card {
  width: 100%;
  border-radius: 12px;
  padding-bottom: 5px;
  background-color: var(--color-bg-main);
  margin-top: 90px;
  color: black;
}
.section-title {
  text-align: right;
  margin-right: 30px;
}

/* 戻るボタン */
.button006 a {
  position: relative;
  text-decoration: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 40px 80px;
  max-width: 200px;
  padding: 10px 5px;
  color: var(--color-hamburger-font);
  transition: 0.3s ease-in-out;
  font-weight: 500;
  font-size: 16px;
}

.button006 a:before {
  content: '';
  position: absolute;
  top: calc(50% - 2px);
  left: -2em;
  transform: translateY(calc(-50% - 2px)) rotate(-30deg);
  width: 12px;
  height: 2px;
  background-color: var(--color-hamburger-font);
  transition: 0.3s;
}

.button006 a:after {
  content: '';
  position: absolute;
  top: 50%;
  left: -2em;
  transform: translateY(-50%);
  width: 60px;
  height: 2px;
  background-color: var(--color-hamburger-font);
  transition: 0.3s;
}

.button006 a:hover:before,
.button006 a:hover:after {
  left: -2.5em;
  color: var(--color-sub2);
}

@media (max-width:990px) {
    .section-title {
    margin-right: 0;
  }
  .button006 a {
    margin-right: 20px;
  }
}

@media (max-width:390px) {
    .button006 a {
      margin: 30px 50px;
    }
}


</style>