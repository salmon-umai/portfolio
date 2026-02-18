<script setup lang="js">
defineProps({
  size: {
    type: [Number, String],
    default: 30,
  },
})
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 45 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="icon"
  >
    <path class="color"
      d="M7.5 7.5H37.5C39.5625 7.5 41.25 9.1875 41.25 11.25V33.75C41.25 35.8125 39.5625 37.5 37.5 37.5H7.5C5.4375 37.5 3.75 35.8125 3.75 33.75V11.25C3.75 9.1875 5.4375 7.5 7.5 7.5Z"
      stroke="currentColor"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path class="color"
      d="M41.25 11.25L22.5 24.375L3.75 11.25"
      stroke="currentColor"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<style scoped>
.icon {
  display: block;
}
.color {
    color: var(--color-sub2);
}
</style>
