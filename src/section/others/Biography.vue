<script setup lang="js">
import SeaImg from '../../assets/biograhy/sea2.jpg';
import PCImg from '../../assets/biograhy/pc.jpg';

const biographyList = [
    /*{
        year: ,
        text: "",
        image: null
    },*/
    {
        year: 1998,
        text: "鹿児島県生まれ。2歳頃に宮崎県へ引っ越し、自然に囲まれた環境で育つ。",
        image: null
    },
    {
        year: 2013,
        text: "中学生まで夏休み期間は、母の故郷フィリピン・レイテ島で過ごす。英語は拙いが、文化の違いの中で適応力を身に着ける。",
        image: SeaImg
    },
    {
        year: 2016,
        text: "宮崎公立大学人文学部国際文化学科に入学。\nフラダンス部に入って公演を経験。講義でHTML・CSSに触れ、「面白いかも」と興味を持つ。",
        image: null
    },
    {
        year: 2020,
        text: "大学を卒業後、福岡県へ。\n応研株式会社にて経理ソフトウェアのカスタマーサポート業務を約5年従事。ユーザー対応を通して課題整理力を培う。",
        image: null
    },
    {
        year: 2024,
        text: "エンジニアとして働く先輩の影響でWeb制作に再び関心を持ち、キャリア転換を決意。",
        image: null
    },
    {
        year: 2025,
        text: "7月に退職、職業訓練校フロントエンド養成科に入学。Web制作の基礎から実践的な開発まで学習中。",
        image: PCImg
    }
]
</script>
<template>
    <section class="biograhy">

        <div class="bio-list">

            <div v-for="item in biographyList" :key="item.year" class="bio-item">

                <div class="bio-year">{{ item.year }}年</div>

                <div class="img-on">
                    <div v-if="item.image" class="bio-image" :class="{ 'img-on': item.image }">
                        <img :src="item.image" alt="">
                    </div>

                    <div class="bio-card">
                        <p class="bio-text">{{ item.text }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.biograhy {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 60px;
}

.bio-list {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 40px;
    max-width: 600px;
    max-height: 55vh;
    overflow-y: auto;
    scrollbar-color: var(--color-accent) var(--color-main);
}

.bio-item {
    font-size: 14px;
    display: grid;
    grid-template-columns: 70px auto;
    column-gap: 10px;
}

.bio-image {
    width: 280px;
    height: auto;
    margin: 8px 0 12px;
}


.bio-image img {
    width: 100%;
    height: auto;
    border-radius: 50%;
}

.bio-year {
    text-align: right;
    font-weight: 500;
    color: var(--color-sub2);
}

/* カード */
.bio-card {
    background-color: var(--color-bio);
    border-radius: 16px;
    padding: 20px 24px;
    margin-right: 20px;
}

/* 本文 */
.bio-text {
    font-size: 14px;
    line-height: 1.8;
    color: var(--color-bio2);
    white-space: pre-line;
    /*改行用 */
}

.img-on {
    display: flex;
    gap: 10px;

}

@media (max-width: 620px) {
.img-on {
    flex-direction: column;
    align-items: center;
  }
   .bio-image {
    width: 170px;
    margin: 0 auto 12px;
  }

  .bio-card {
    margin-right: 0;
    width: 90%;
    padding: 15px 10px;
  }
}
</style>