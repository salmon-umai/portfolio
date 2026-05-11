<script setup lang="js">
import Stre1 from '../assets/strengths/stre1.svg';
import Stre2 from '../assets/strengths/stre2.svg';
import Stre3 from '../assets/strengths/stre3.svg';
import CatIcon from '../assets/like/ashiato_pink_nl.svg';
import GameIcon from '../assets/like/game_controller_white.svg';
import BlueIcon from '../assets/like/heart_blue.svg';
import kiraIcon from '../assets/like/kirakira_01_yellow_nl.svg';
import MovieIcon from '../assets/like/popcorn.svg';

import Biography from './others/Biography.vue';


import { ref, computed } from 'vue';


//年齢を自動化
const birthDate = new Date('1998-03-04');
const age = computed(() => {
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    const thisYearBirthday = new Date(
        today.getFullYear(),
        birthDate.getMonth(),
        birthDate.getDate()
    );

    if (today < thisYearBirthday) {
        age--;//今年の誕生日がまだ来ていないときは、引く
    }
    return age;
});

//アコーディオン
const isAboutOpen = ref(false);

const closeAbout = () => {
    isAboutOpen.value = false;

    const profileTop = document.getElementById('profile');
    if(profileTop) {
        profileTop.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
};

</script>

<template>
    <div id="profile" class="section-card main-card">
        <h1 class="section-title">PROFILE<span class="title-sub">私について</span></h1>
        <div class="pro-center">
            <div class="pro-left">
                <div class="pro-box">
                    <p class="title name">Name</p>
                    <div class="responsive">
                        <p class="text-main">伊福　江利子</p>
                        <p class="text-sub">IFUKU ERIKO</p>
                    </div>
                </div>
                <div class="pro-box">
                    <p class="title birth">Birth</p>
                    <div class="responsive">
                        <p class="text-main">1998年3月4日</p>
                        <p class="text-sub age">Age:{{ age }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-left">
            <p id="profile-text"> 宮崎県出身。<br>
                宮崎公立大学を卒業後、応研株式会社にて経理ソフトウェアのカスタマーサポートを約5年間勤務。<br>
                「自分の手で何かを作るスキルを身につけたい」という思いから、退職を決意し Web制作を学ぶため職業訓練校へ入学。<br>
                現在はフロントエンドエンジニアとしてのキャリアを目指し、就職活動をしている。
            </p>
        </div>
        <div class="line"></div>
        <div class="pro-center">
            <div class="pro-left">
                <div class="stre-wrapper">
                    <p class="title stre-title">Strengths</p>
                    <div class="stre-list">
                        <div class="stre-item">
                            <img :src="Stre1" :alt="強み3">
                            <h3 class="stre-h3">要望を整理し具体化する力</h3>
                            <p class="stre-desc">カスタマーサポートでの対応経験を通じて、ユーザーの状況や要望を整理し、課題を解決につながる形へ落とし込む力を培いました。</p>
                        </div>
                        <div class="stre-item">
                            <img :src="Stre2" :alt="強み2">
                            <h3 class="stre-h3">ニーズを捉える提案力</h3>
                            <p class="stre-desc">ユーザーの理解度や目的を把握したうえで、複数の選択肢を提示しながら最適な対応方法を提案してきました。</p>
                        </div>
                        <div class="stre-item">
                            <img :src="Stre3" :alt="強み3">
                            <h3 class="stre-h3">探究心と継続力</h3>
                            <p class="stre-desc">分からないことはそのままにせず、
                                すぐに調べて理解を深めることを大切にしています。
                                時間がかかっても粘り強く取り組み、
                                納得できるまで取り組みます。</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <button class="about-btn" @click="isAboutOpen = true" v-if="!isAboutOpen">
            About me +
        </button>
        <transition name="expand">
            <div v-if="isAboutOpen" class="about-detail">
                <div class="line"></div>
                <div class="pro-center">
                    <div class="pro-left">
                        <div class="pro-box like-wrapper">
                            <p class="title">Like</p>
                            <ul class="like-list">
                                <li><img :src="kiraIcon" alt="" class="like-icon">
                                    <span class="like-main">ものづくり</span><br>
                                    <span class="like-sub">作っている時間が楽しい</span>
                                </li>
                                <li><img :src="BlueIcon" alt="" class="like-icon">
                                    <span class="like-main">青色</span><br>
                                    <span class="like-sub">デスク周りは水色系でまとめがち</span>
                                </li>
                                <li><img :src="CatIcon" alt="" class="like-icon">
                                    <span class="like-main">猫</span><br>
                                    <span class="like-sub">実家の2匹と遊ぶ時間が至福</span>
                                </li>
                                <li><img :src="GameIcon" alt="" class="like-icon">
                                    <span class="like-main">ゲーム</span><br>
                                    <span class="like-sub">RPGや牧場、推理系など。世界観に浸るタイプ</span>
                                </li>
                                <li><img :src="MovieIcon" alt="" class="like-icon movieIcon">
                                    <span class="like-main">映画館で見る映画</span><br>
                                    <span class="like-sub">エンドロールを見ると、</span><br>
                                    <span class="like-sub">たくさんの人が関わっているのを感じて元気がもらえる</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="line"></div>
                <div class="pro-center like-wrapper">
                    <div class="bio-wrapper">
                        <div class="bio-center">
                            <p class="title bio-title biography">Biography</p>
                            <Biography></Biography>
                        </div>
                    </div>

                </div>

                <button class="about-close" @click="closeAbout">close ×</button>

            </div>
        </transition>


    </div>
</template>

<style scoped>
#profile-text {
    margin: 0 auto;
    font-size: 1.2rem;
}

.pro-center {
    display: flex;
    justify-content: center;
}

.pro-left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.pro-box {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;
    margin-bottom: 0;
    margin-bottom: 10px;

}

.title {
    width: 100px;
    padding-top: 6px;
    padding-bottom: 6px;
    border-radius: 30px;
    font-size: 1.6rem;
    font-weight: 700;
    text-align: center;
    background-color: var(--color-main);
    color: var(--color-sub);
    margin-right: 50px;
}

.text-main {
    color: var(--color-sub2);
    font-size: 1.6rem;
    font-weight: 500;
}

.text-sub {
    color: var(--color-sub3);
    font-size: 1.5rem;
    font-weight: 500;
    margin-left: 20px;
}

.text-left {
    font-size: 1.6rem;
    max-width: 600px;
    text-align: left;
    color: var(--color-sub2);
    margin: 0 auto;
    line-height: 1.8;
    margin-bottom: 20px;
}

.stre-wrapper {
    position: relative;
    padding-top: 45px;
}

.stre-title {
    padding-left: 30px;
    padding-right: 30px;
    top: 0;
    left: 0;
    margin-left: 30px;
}

.stre-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
    margin: auto 50px;
}

.stre-item {
    flex: 1;
    text-align: center;
    margin-top: 20px;
}

.stre-item img {
    width: 120px;
    height: 120px;
}

.stre-h3 {
    width: 200px;
    font-size: 1.2em;
    margin: 0 auto;
    color: var(--color-sub2);
}
.stre-desc {
    color: var(--color-sub2);
    margin: 0 auto;
    text-align: left;
    font-size: 1.1em;
    max-width: 400px;
}


.about-btn,
.about-close {
    position: relative;
    display: block;
    margin: 0 auto 30px;
    padding: 18px 60px;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 0.15em;
    border: 1px solid #975a71;
    cursor: pointer;
    z-index: 1;
    color: #fff;
    background-color: transparent;
    margin-top: 50px;
}

.about-btn::before,
.about-close::before {
    content: "";
    position: absolute;
    top: 6px;
    left: 6px;
    width: 100%;
    height: 100%;
    background: var(--color-accent);
    transition: all 0.3s ease;
    z-index: -1;
}


.about-btn:hover::before,
.about-close:hover::before {
    top: 0;
    left: 0;
}


.expand-enter-active,
.expand-leave-active {
    transition: all 0.3s ease;
}

.expand-enter-from,
/*表示される直前*/
.expand-leave-to {
    /*消えきった後*/
    max-height: 0;
    opacity: 0;
}

.expand-enter-to,
/*開ききった状態 */
.expand-leave-from {
    /*閉じ始める直前の状態 */
    max-height: 500px;
    opacity: 1;
}

.about-detail {
    overflow: hidden;
    margin-top: 16px;
    border-radius: 12px;
    text-align: left;
    line-height: 1.8;
}

.about-close {
    margin-top: 24px;
    text-align: center;
}

.line {
    margin: auto;
    margin-bottom: 30px;
    width: 80%;
    border-top: 2px dashed var(--color-main);

}

.like-wrapper {
    flex-direction: column;
    align-items: flex-start;
}

.like-list li {
    list-style-type: none;
}

.like-icon {
    width: 30px;
    height: auto;

}

.movieIcon {
    width: 25px;
    margin-left: 7px;
}

.like-main {
    color: var(--color-sub2);
    font-size: 15px;
    margin-left: 15px;
    margin-right: 20px;
    font-weight: 700;
    position: relative;
    top: -8px;
    font-family: "DotGothic16", sans-serif;

}

.like-sub {
    color: var(--color-sub2);
    margin-left: 55px;
    font-size: 14px;
    letter-spacing: 0.12em;
    position: relative;
    top: -10px;
    /*font-family: "Zen Maru Gothic", sans-serif;*/
}

.bio-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.bio-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* ★ 中央寄せ */
    width: 100%;
    margin-top: 24px;
}
.bio-title {
    padding-left: 30px;
    padding-right: 30px;
    margin-right: 280px;
    margin-bottom: 20px;
}

.responsive {
    display: flex;
}
@media (max-width: 1024px) {
    .stre-list {
        flex-direction: column;
    }
}
@media (max-width: 800px) {
    .text-main {
        font-size: 1.3rem;
    }
    .text-sub {
        font-size: 1.2rem;
    }
    .title {
        font-size: 1.4rem;
    }
    .name,
    .age {
        margin-right: 20px;
    }
    .biography {
        margin-left: 60px;
    }
}

@media (max-width: 390px) {
  .pro-box {
    flex-direction: column;
    gap: 5px;
  }
  .name,
  .birth,
  .stre-title {
    padding-left: 100px;
    padding-right: 100px;
    margin: auto;
  }
  .title {
    margin: auto;
    padding-left: 70px;
    padding-right: 70px;
  }
  .text-sub {
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 5px;
  }
  .age {
    margin-right: 60px
  }
  #profile-text {
    margin-top: 20px;
  }
  .like-sub {
    margin-left: 0;
  }
  .biography {
    margin-bottom: 20px;
  }
  .stre-wrapper {
    padding-top: 20px;
  }
}

</style>