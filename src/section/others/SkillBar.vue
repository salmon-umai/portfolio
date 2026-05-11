<script setup lang="js">
defineProps({
    level: {
        type: Number,
        required: true,
    },
    max: {
        type: Number,
        default: 5,
    },
});

</script>

<template>
    <div class="skill-bar">
        <span v-for="n in max" :key="n"
            class="skill-cell" :class="{ active: n <= level }">
        </span>
    </div>
</template>

<style scoped>
    .skill-bar {
        display: grid;
        grid-auto-flow: column;
        margin-bottom: 10px;

    }
    .skill-cell {
        width: 28px;
        height: 16px;
        background: #e0e0e0;
        border-right: 1px solid var(--color-sub2);
        border-left: 1px solid var(--color-sub2);
    }
    .skill-cell.active {
        background: var(--color-main2);
    }
    .skill-cell:nth-child(2),
    .skill-cell:nth-child(3),
    .skill-cell:nth-child(4),
    .skill-cell:nth-child(5) {
        border-left: none;
    }
</style>