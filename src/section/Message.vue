<script setup lang="js">
import MailIcon from '../assets/message/mail.vue';
import GithubIcon from '../assets/message/github.vue';

import icon from '../assets/hitode_blue_nl.svg';

</script>

<template>
    <div id="message" class="section-card main-card  fade-in">
        <img :src="icon" alt="ヒトデ" class="hitode">
        
        <h1 class="section-title">MESSAGE<span class="title-sub">最後に</span></h1>
        <div class="message-wraper">
            <div class="message-text">
                <p>ここまでご覧いただきありがとうございます。</p>
                <p>現在はフロントエンドを中心に、Vueを用いた制作に取り組んでいます。
                    Vueの知識をもとに、今後はReactの学習にも取り組んでいきたいと考えています。</p>
                <p>　また、Node.jsを用いた簡単なAPI実装などにも触れ、
                    フロントエンドと連携するバックエンドの役割についても学んでいます。</p>
            </div>
            <div class="message-text">
                <p>将来的には、フロントエンドを軸としながらバックエンドの理解も深め、
                    機能やデータの流れを含めて全体の設計ができるエンジニアになることを目標としています。
                </p>
            </div>

            <div class="message-last">
                <p>このサイトを通して、私について少しでも知っていただければ幸いです。</p>
                <p>気になることがありましたら、お気軽にご連絡ください。</p>
            </div>
            <div class="contact">
                <div class="flex">
                    <MailIcon class="message-img"></MailIcon>
                    <a href="mailto:ifukueriko@gmail.com" class="url">
                        ifukueriko@gmail.com</a>
                </div>
                <div class="flex">
                    <GithubIcon class="message-img github"></GithubIcon>
                    <a href="https://github.com/salmon-umai" target="_blank" rel="noopener" class="url">
                        https://github.com/salmon-umai
                    </a>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
.hitode {
    width: 50px;
    height: auto;
    position: absolute;
    bottom: 20px;
    left: 80%;
    transform: rotate(10deg);
}

#message {
    position: relative;
    margin-bottom: 40px;
    padding-bottom: 40px;
}

.message-wraper {
    padding-left: 80px;
    padding-right: 80px;
    font-size: 14px;
    color: var(--color-sub2);
}

.contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    margin-left: 100px
}

.contact a {
    text-decoration: none;
    color: var(--color-footer);
}

.message-img {
    width: 30px;
    height: auto;
    margin: 5px;
}

.flex {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    width: 100%;
    max-width: 400px;
    font-size: 18px;
    margin-bottom: 10px;
}

.message-text {
    margin-bottom: 10px;
    font-size: 1.1em;
}
.message-text p {
    margin-bottom: 10px;
}

.message-last {
    margin-top: 30px;
    margin-bottom: 20px;
    font-size: 15px;

}

.url {
    background-color: var(--color-main);
    padding: 8px 20px;
    border-radius: 20px;
    margin-top: 5px;
}

@media (max-width: 767px) {
    .message-wraper {
        padding: 20px;
    }
    .contact {
        margin: 20px auto;
        font-size: 0.99em;

    }
    .flex {
        flex-direction: column;
        gap: 0px;
    }
    .message-img {
        margin: 0;
    }
    .github {
        margin-top: 20px;
        width: 30px;
    }
    .contact a {
        font-size: 14px;
    }

}
</style>