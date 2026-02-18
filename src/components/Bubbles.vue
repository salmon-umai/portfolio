<script setup lang="js">
    import { ref, onMounted } from 'vue';

    const bubbles = ref([]);

    const createBubble = (id) => {
        return {
            id,
            left: Math.random() * 100, //横の位置vw
            size: 5 + Math.random() * 10,
            duration: 15 + Math.random() * 18, //速さ
            delay: Math.random() * 10,
            opacity: 0.4 + Math.random() * 0. //タイミング
        };
    };

    onMounted(() => {
        const count = 15; //泡の数
        bubbles.value = Array.from({ length: count }, (_, i) =>
        createBubble(i));
    });

</script>

<template>
    <div class="bubble-layer">
        <span 
        v-for="bubble in bubbles" :key="bubble.id"
        class="bubble"
        :style="{
            left: bubble.left + 'vw',
            width: bubble.size + 'px',
            height: bubble.size + 'px',
            animationDuration: bubble.duration + 's',
            animationDelay: bubble.delay + 's',
            opacity: bubble.opacity
        }"></span>
    </div>

</template>

<style scoped>
    .bubble-layer {
        position: fixed;
        inset: 0;
        pointer-events: none;
        z-index: 1;
    }

    .bubble {
        position: absolute;
        bottom: -10px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        box-shadow:   
        0 0 4px rgba(200, 230, 255, 0.4);
        animation-name: bubbleUp;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }

    @keyframes bubbleUp {
        from {
            transform: translateY(0) scale(1);
        } to {
            transform: translateY(-120vh) scale(1.2);
        }
    }

    .is-dark .bubble {
        background: rgba(200, 240, 255, 0.8);
        box-shadow: 0 0 8px rgba(200, 240, 255, 0.6);
    }
</style>