<script setup lang="js">
defineProps({//HomeViewから受け取る
    activeSection: String//大文字！
});


</script>

<template>
    <div class="sidebar is-dark">
        <ul>
            <li :class="{ active: activeSection === 'about' }">
                <router-link :to="{ path: '/', hash: '#about' }">- About</router-link>
            </li>
            <li :class="{ active: activeSection === 'profile' }">
                <router-link :to="{ path: '/', hash: '#profile' }">- Profile</router-link>
                </li>
            <li  :class="{ active: activeSection === 'works' }">
                 <router-link :to="{ path: '/', hash: '#works' }">- Works</router-link>
            </li>
            <li :class="{ active: activeSection === 'skills' }">
                 <router-link :to="{ path: '/', hash: '#skills' }">- Skills</router-link>
            </li>
            <li  :class="{ active: activeSection === 'message' }">
                 <router-link :to="{ path: '/', hash: '#message' }">- Message</router-link>
            </li>
        </ul>
    </div>

</template>

<style scoped>
    .sidebar {
        top: 90px;
        left: 40px;
        width: 100%;
        width: 200px;
        height: 280px;
        position: fixed;
        background-color: var(--color-sidebar);
        border-radius: 8%;
    }
    .sidebar ul {
        padding: 0;
    }
    .sidebar ul li {
        list-style-type: none;
        padding-top: 20px;
        padding-left: 30px;
        font-size: 17px;
        font-weight: 700;
        font-family: "Michroma", sans-serif;
        position: relative;
    }
    
    .sidebar a {
        position: relative;
        display: inline-block;
        text-decoration: none;
        color: #388CD1;
    }

    .sidebar li::after {
        content: "";
        position: absolute;
        left: 30px;
        bottom: -4px;
        width: 0;
        height: 2px;
        background-color: #FB8397;
        transition: width 0.3s ease;
    }

    .sidebar a:hover,
    .sidebar li.active a {
        color: #FB8397;
    }

    .sidebar li:hover::after,
    .sidebar li.active::after {
        width: 70%;
    }

    /*レスポンシブ　ハンバーガーメニューに変更 */
    @media (max-width: 1024px) {
  .sidebar {
    display: none;
  }
}
</style>