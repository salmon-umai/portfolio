<script setup lang="js">

</script>

<template>
    <div id="about" class="section-card">
        <h1>Welcome to<br>
            Ifuku Eriko's <br>Portfolio site</h1>

        <div class="text">
            <p>こちらは、伊福のポートフォリオサイトです。</p>
            <p>職業訓練校での課題制作や、個人で制作したWebアプリ・サイトをまとめています。
            </p>
        </div>
        <div class="container_04">
            <div class="scrollbar-text_04"><span>scroll</span></div>
            <div class="scrollbar_04"></div>
        </div>


    </div>
</template>

<style scoped>
#about {
    padding-top: 50px;
    /* ヘッダー分 */
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: "DotGothic16", sans-serif;

}

h1 {
    font-size: 40px;
    font-family: "DotGothic16", sans-serif;
    /* font-family: "Michroma", sans-serif;*/
    color: var(--color-main);
    font-weight: 400;
}

.text {
    margin-top: auto;
    font-size: 17px;
    color: var(--color-main);
}
.text p {
  margin-bottom: 1.2em;
  letter-spacing: 0.5em;
}

.container_04 {
    position: relative;
    margin-top: 200px;
    display: flex;
    justify-content: center;
    margin-top: auto;
    padding-bottom: 40px
}

.scrollbar-text_04 {
    display: inline-block;
    position: absolute;
    bottom: 0;
    padding: 10px 10px 110px;
    color: var(--color-main);
    font-size: 10px;
    font-family: serif;
    line-height: 1;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    /*writing-mode: vertical-lr;*/
    left: 50%;
    transform: translateX(-50%);
    font-family: "DotGothic16", sans-serif;

}

.scrollbar_04 {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 1px;
}

.scrollbar_04::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 1px;
    height: 100px;
    background: var(--color-main);
}

.scrollbar_04::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: -4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--color-main);
    animation: circlemove 3s ease-in-out infinite,
        cirlemovehide 3s ease-out infinite;
}

@keyframes circlemove {
    0% {
        bottom: 95px;
    }

    100% {
        bottom: 0px;
    }
}

@keyframes cirlemovehide {
    0% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }

    80% {
        opacity: 0.9;
    }

    100% {
        opacity: 0;
    }
}
</style>