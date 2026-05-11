<script setup lang="js">
import { ref, onMounted } from 'vue';

//魚一覧
const fishImages = [
    new URL('../assets/fish/blueFish.svg', import.meta.url).href,
    new URL('../assets/fish/blueFish2.svg', import.meta.url).href,
    new URL('../assets/fish/blueFish2.svg', import.meta.url).href,
    new URL('../assets/fish/orangeFish.svg', import.meta.url).href,
    new URL('../assets/fish/pinkFish.svg', import.meta.url).href
];

const fishes = ref([]);

//魚1匹生成
const createFish = (id) => {
    const src =
     fishImages[Math.floor(Math.random() * fishImages.length)]

     return {
        id,
        src,
        top: Math.random() * 80, //縦の位置
        size: 14 + Math.random() * 18,
        duration: 20 + Math.random() * 25, //速さ
        delay: Math.random() * 2 //タイミング
     }
};

onMounted(() => {
    const count = 6 //表示する数
    fishes.value = Array.from({ length: count },
    (_, i) => createFish(i)
)
});

</script>

<template>
    <div class="fish-layer">
        <img
         v-for="fish in fishes" :key="fish.id"
         :src="fish.src" class="fish"
         :style="{
            top: fish.top + 'vh',
            width: fish.size + 'px',
            animationDuration: fish.duration + 's',
            animationDelay: fish.delay + 's'
         }"
        >
    </div>
</template>

<style scoped>
    .fish-layer {
        position: absolute;
        inset: 0;
        pointer-events: none;
    }

    .fish {
        position: absolute;
        right: -100px;
        animation-name: swim;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        opacity: 0.6;
    }

    @keyframes swim {
        from {
            transform: translateX(0);
        } to {
            transform: translateX(-120vw);
        }
    }

</style>

