<script setup>
import { onMounted, ref } from 'vue';

//ローディング
import FishIcon from '../assets/fish/LoadingFish.svg';
import StarIcon from '../assets/Loadinghitode.svg';

const emit = defineEmits(['finish']);

const progress = ref(0);
const showStar = ref(false);


onMounted(() => {
  let minTimePassed = false;

  //2秒表示
  setTimeout(() => {
    minTimePassed = true;
    finishIfReady();
  }, 2000);

  //プログレスバー演出
  const interval = setInterval(() => {
    if (progress.value < 90) {
      progress.value += 6//3sごとに、進捗を6%ずつ増やしている
    }
  }, 300);

  function finishIfReady() {
    if (minTimePassed) {
      progress.value = 100;
      showStar.value = true;
      clearInterval(interval);

      setTimeout(() => {
        emit('finish');
      }, 1000)//到達してからの時間
    }
  }
});

</script>


<template>
    <!--ローディング-->
    <transition name="fade">
      <div class="loading">
        <div class="bar">
          <div class="progress" :style="{ width: progress + '%' }">
            <img :src="FishIcon" alt="魚" class="fish">
          </div>
        </div>
        <div class="load-wrapper">
          <p id="load-text">
            <span id="text-main">Now Loading</span>
            <span class="dots">
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </span>
          </p>
          <img :src="StarIcon" alt="ヒトデ" v-if="showStar" class="star">
        </div>
      </div>
    </transition>
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

.loading {
  position: fixed;
  inset: 0;
  background: #FFFBF3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
  font-family: "Yomogi", cursive;
  font-size: 25px;
}

.bar-wrapper {
  display: flex;
  align-items: center;
}

.bar {
  width: 350px;
  height: 40px;
  background: #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 10px;
}

.progress {
  height: 100%;
  background: #7bbcff;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 4px;
  transition: width 0.3s ease;
}

#load-text {
  margin-top: 14px;
  letter-spacing: 0.12em;
  animation: floatText 2s ease-in-out infinite;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

@keyframes floatText {
  0% {
    transform: translateY(0);
    opacity: 0.9;
  }

  50% {
    transform: translateY(-6px);
    opacity: 1;
  }

  100% {
    transform: translateY(0);
    opacity: 0.9;
  }
}

.dots span {
  display: inline-block;
  animation: floatDot 1.6s ease-in-out infinite;
}

.dots span:nth-child(1) {
  animation-delay: 0s;
}

.dots span:nth-child(2) {
  animation-delay: 0.2s;
}

.dots span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes floatDot {
  0% {
    transform: translateY(0);
    opacity: 0.7;
  }

  50% {
    transform: translateY(-4px);
    opacity: 1;
  }

  100% {
    transform: translateY(0);
    opacity: 0.7;
  }
}

.star {
  margin-left: 8px;
  margin-top: 6px;
  opacity: 0;
  transform: scale(0.8);
  animation: popStar 0.6s ease-out forwards;
  width: 35px;
}

@keyframes popStar {
  0% {
    opacity: 0;
    transform: scale(0.8) translateY(4px);
  }

  60% {
    opacity: 1;
    transform: scale(1.05) translateY(-2px);
  }

  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 0.6;
}
</style>
