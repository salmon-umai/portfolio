<script setup lang="js">
import { ref } from 'vue';

defineProps({//HomeViewから受け取る
    activeSection: String//大文字！
});

const isMenuOpen = ref(false);
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
    isMenuOpen.value = false;
};

</script>

<template>
    <div class="hamburger">
        <!--ハンバーガーバー：×にする変化するボタン-->
        <div class="menu-btn" :class="{ open: isMenuOpen }" @click="toggleMenu">
            <span></span>
            <span></span>
            <span></span>
        </div>

        <div class="menu-overlay" v-bind:class="{ active: isMenuOpen }">
            <ul>
                <li>
                    <RouterLink :to="{ path: '/', hash: '#about' }" @click="closeMenu">- About</RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ path: '/', hash: '#profile' }" @click="closeMenu">- Profile</RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ path: '/', hash: '#works' }" @click="closeMenu">- Works</RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ path: '/', hash: '#skills' }" @click="closeMenu">- Skills</RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ path: '/', hash: '#message' }" @click="closeMenu">- Message</RouterLink>
                </li>
            </ul>
        </div>
    </div>

</template>

<style scoped>
/* ハンバーガーボタン本体 */
.menu-btn {
  width: 32px;
  height: 24px;
  position: fixed;
  top: 25px;
  left: 24px;
  cursor: pointer;
  z-index: 800;
}

li {
    list-style: none;
    margin-bottom: 20px;
}
/* 三本線 */
.menu-btn span {
    position: absolute;
    display: block;
    height: 4px;
    width: 100%;
    background-color: var(--color-sub2); /* 好きな色でOK */
    transition: 0.3s;
}

.menu-btn span:nth-child(1) {
    top: 0;
}

.menu-btn span:nth-child(2) {
    top: 10px;
}

.menu-btn span:nth-child(3) {
    bottom: 0;
}

/*-------------×に変化-------------*/
.menu-btn.open span:nth-child(1) {
    transform: rotate(45deg);
    top: 10px
}

.menu-btn.open span:nth-child(2) {
    opacity: 0;
}

.menu-btn.open span:nth-child(3) {
    transform: rotate(-45deg);
    bottom: 10px;
}

/*-------------オーバーレイ-------------*/
.menu-overlay {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background: var(--color-hamburger);
    backdrop-filter: blur(12px);
    /*ガラスモーフィズム*/

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.4s;
    z-index: 700;
}

.menu-overlay a {
    color: var(--color-hamburger-font);
    text-decoration: none;
    font-size: 30px;
    margin: 20px 0;
    letter-spacing: 0.15em;
    transition: color 0.3s, transform 0.3s;
    font-weight: 500;
    /*線の太さ　400が標準　smallは情報の重要度を下げるもの*/
}

.menu-overlay a:hover {
    color: var(--color-sub2);
    transform: translateY(-3px);
}

.menu-overlay.active {
    opacity: 1;
    /*opacity:不透明度100％*/
    pointer-events: all;
    /*有効に戻す*/
}

.hamburger {
  display: none;
}

/* 1024px以下：表示（SP / タブレット） */
@media (max-width: 1024px) {
  .hamburger {
    display: block;
  }
}

@media (max-width: 990px) {
.menu-overlay a {
    font-size: 25px;
}
}
</style>