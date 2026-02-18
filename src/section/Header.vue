<script setup lang="js">
    import { ref } from 'vue';

    import GithubIcon from '../assets/header/GithubIcon.svg';
    import MailIcon from '../assets/header/MailIcon.svg';
    import SunTheme from '../assets/header/SunTheme.svg';
    import MoonTheme from '../assets/header/MoonTheme.svg';

    import GithubActive from '../assets/header/GithubIconActive.svg';
    import MailActive from '../assets/header/MailActive.svg';
    import SunActive from '../assets/header/SunActive.svg';
    import MoonActive from '../assets/header/MoonActive.svg';

    const isActive = ref(null);

    const isDark = ref(false);
    const toggleTheme = () => {
        isDark.value = !isDark.value
        document.body.classList.toggle('is-dark', isDark.value);
    }
</script>

<template>
    <header class="header">
        <a href="https://github.com/salmon-umai" target="_blank" rel="noopener" class="icon-link"
        @mouseenter="isActive = 'github'"
        @mousedown="isActive = 'github'"
        @mouseup="isActive = null"
        @mouseleave="isActive = null">
            <img
                :src="isActive === 'github' ? GithubActive : GithubIcon"
                :alt="Githubのアイコン"
                class="header-icon"
            >
        </a>
        <RouterLink :to="{ path: '/', hash: '#message' }"  class="icon-link"
        @mouseenter="isActive = 'mail'"
        @mousedown="isActive = 'mail'"
        @mouseup="isActive = null"
        @mouseleave="isActive = null"
       >
            <img
                :src="isActive === 'mail' ? MailActive : MailIcon"
                :alt="メールのアイコン"
                class="header-icon"
            >
        </RouterLink>
        <a href="#" class="icon-link theme-btn"
        @click="toggleTheme"
        @mouseenter="isActive = 'theme'"
        @mousedown="isActive = 'theme'"
        @mouseup="isActive = null"
        @mouseleave="isActive = null"
        >
            <img
                :src="
                isDark
                ? ( isActive === 'theme' ? MoonActive : MoonTheme ) 
                : ( isActive === 'theme' ? SunActive : SunTheme )
                "
                :alt="テーマのアイコン"
                class="header-icon"
            >
        </a>
        
    </header>
</template>

<style scoped>
.header {
    position: fixed;
    top: 20px;
    right: 40px;
    z-index: 10;
    display: flex;
    gap: 10px;
}

.header-icon {
    width: 40px;
    height: auto;
    cursor: pointer;
    transition: 
    transform 0.2s ease,
    box-shadow 0.2s ease;
    transform-origin: center;
}

.icon-link:hover .header-icon {
    transform: scale(1.2) translateY(1px);
}

.theme-btn img {
    transition: transform 0.3s ease, opacity 0.3s ease;
}

body.is-dark .theme-btn img {
  transform: rotate(30deg);
}


</style>