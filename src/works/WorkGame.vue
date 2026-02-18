<script setup>
import { onMounted, nextTick, ref } from 'vue';

import HamburgerMenu from '../section/HamburgerMenu.vue';
import WorkCard from '../components/WorkCard.vue';
import ImageModal from '../components/ImageModal.vue';

import thumbImg from '../assets/works/game/game_main.png';
import thumbImg2 from '../assets/works/game/game_main2.png';
import thumbImg3 from '../assets/works/game/game_main3.png';
import thumbImg4 from '../assets/works/game/game_main4.png';

import ModalImg from '../assets/works/game/game_modal.png';

const tags = [
  '自主制作',
  'Vue',
  '外部API',
  'AI活用',
  'レスポンシブ対応'
]

//ImageModal
const open = ref(false);
const index = ref(0);

//カルーセル　外部ライブラリ
// Splide　デフォルト
//元：
// var splide = new Splide( '.splide' );
//splide.mount(); これをVueに置き換え
onMounted(async () => {
  await nextTick()

  const imgs = document.querySelectorAll('.thumb-img');
  let loaded = 0;

  const init = () => {
    new Splide('.splide', {
      heightRatio: 9 / 16, // 16:9
    }).mount();
  }

  imgs.forEach(img => {
    if (img.complete) {
      loaded++
    } else {
      img.addEventListener('load', () => {
        loaded++
        if (loaded === imgs.length) init()
      })
    }
  })

  if (loaded === imgs.length) init()
});

const thumbImages = [
  { src: thumbImg, alt: "サムネ1" },
  { src: thumbImg2, alt: "サムネ2" },
  { src: thumbImg3, alt: "サムネ3" },
  { src: thumbImg4, alt: "サムネ3" }
];

const ModalImages = [
  { src: ModalImg, alt: "デザインラフ1" }
];


</script>

<template>
  <HamburgerMenu></HamburgerMenu>
  <div class="right-group">
    <div class="main-card">
      <WorkCard>
        <div class="main">
          <section class="splide" aria-label="Splideの基本的なHTML">
            <div class="splide__track thumb-wrapper">
              <ul class="splide__list">
                <li class="splide__slide" v-for="img in thumbImages" :key="img.src">
                  <img :src="img.src" :alt="img.alt" class="thumb-img">
                </li>
              </ul>
            </div>
          </section>

          <div class="main-line">
            <div class="work-top">
              <h2>ゲーム検索</h2>
              <div class="tags">
                <p v-for="tag in tags" :key="tag" class="tag">
                  #{{ tag }}
                </p>
              </div>
            </div>
            <div class="work-btn">
              <div class="button">
                <a href="https://fee0707.fkohuman.com/m01/game_search/" target="_blank" rel="noopener"><span
                    id="project">　　サイトを見る　</span></a>
              </div>
              <div class="button">
                <a href="https://github.com/salmon-umai/game_search" target="_blank" rel="noopener"><span id="github">　　Github　</span></a>
              </div>
            </div>
          </div>

          <div class="desc">
            <h3 class="desc-title">概要</h3>
            <div class="desc-card">
              <P class="desc-sub">
                RAWG APIを使用したゲーム検索アプリです。
                キーワード検索に加え、プラットフォームおよびジャンルの複数選択による絞り込み機能を実装しました。
                APIの仕様上、ゲームの説明文は英語データのみ提供されているためUIは英語表記で統一しています。（一部タイトルは日本語対応あり）
              </P>
             <button class="modal-img" @click="open = true">
             <span class="modal-span">▶</span>デザインラフ
            </button>
            </div>
             
            <ImageModal
            :open="open" 
            title="デザインラフ" :images="ModalImages"
            v-model:index="index" @close="open=false">
            </ImageModal>

            <div class="desc">
              <h3 class="desc-title">技術的な取り組み</h3>
              <div class="desc-card">
                <ul class="desc-sub skill">
                  <li>
                    <span class="skill-main">外部API連携（RAWG API）：</span>
                    <br>
                    RAWG APIを利用し、人気作品や新着作品の取得、キーワード検索機能を実装しました。
                    APIの仕様を確認し、必要なパラメータを組み立ててデータを取得する構成です。
                  </li>
                  <li>
                    <span class="skill-main"> URLクエリによる状態管理：</span>
                    <br>検索条件やページ番号をURLに含めて管理する設計にしました。
                    ページを再読み込みしても同じ検索結果を表示できるほか、ブラウザの戻る／進む操作でも検索状態が崩れないようにしました。
                  </li>
                  <li><span class="skill-main">複数条件を組み合わせた検索処理：</span>
                    <br>プラットフォームやジャンルは複数選択できる仕様とし、選択された値を配列で管理しています。
                    APIへリクエストを送る際には条件に応じてパラメータを組み立てる処理を実装しました。
                  </li>
                  <li>
                    <span class="skill-main">お気に入り機能の共通化：</span>
                    <br>localStorageを用いてゲームIDを保存し、Composableとしてロジックを共通化しました。
                    コンポーネント間で状態を共有できる設計にしています。
                  </li>
                </ul>
              </div>
            </div>

            <div class="desc">
              <h3 class="desc-title">製作期間</h3>
              <div class="desc-card">
                <P class="desc-sub">
                <p class="period">約1週間</p>
                <ul>
                  <li>設計：1日</li>
                  <li>API連携実装：3日</li>
                  <li>検索条件実装/調整：2～3日</li>
                </ul>
                </P>
              </div>
            </div>

            <div class="desc">
              <h3 class="desc-title">使用言語・技術</h3>
              <div class="desc-card">
                <P class="desc-sub">HTML / CSS / JavaScript / Vue.js / RAWG API/ Figma </P>
              </div>
            </div>

          </div>
        </div>
      </WorkCard>

    </div>
  </div>
</template>

<style scoped>
.right-group {
  margin-left: calc(220px + 50px);
  /* サイドバー + 余白 */
  margin-right: 10px;
  max-width: 1400px;
  width: 100%;
  box-sizing: border-box;
}

h2 {
  font-size: 1.7rem;
}

.thumb-wrapper {
  width: 100%;
  /*枠からはみ出さないように */
  max-width: 800px;
}

.thumb-img {
  width: 100%;
  height: auto;
  border: 1px solid;
}

.modal-img {
    background: none;
    border: none;
    color: var(--color-hover);
    cursor: pointer;
    font-size: 1.4rem;
    margin-top: 10px;
    font-weight: 700;
}
.modal-img:hover {
  border-bottom: 2px solid var(--color-main);
  opacity: 0.8;
}
.modal-span {
  font-size: 1.4rem;
  margin-right: 10px;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.main-line {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  color: var(--color-sub2);
}

.main-line h2 {
  margin-bottom: 0;
}

.tags {
  display: flex;
  gap: 3px;
  margin-top: 2px;
  margin-bottom: 20px;
  color: var(--color-tag2);
  flex-wrap: wrap;
}

.tag {
  background-color: var(--color-tag1);
  height: 20px;
  padding: 5px 10px;
  font-size: 1.3rem;
  border-radius: 20px;
  border: 1px solid var(--color-tag2);
}

.desc {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 700px;
}

.desc-title {
  margin-bottom: 0;
  color: var(--color-sub2);
  font-weight: 800;
  font-size: 1.6rem;
  border-bottom: 2px solid var(--color-main);
  width: 100%;
}

.desc-card {
  color: var(--color-sub2);
  max-width: 600px;
  padding: 10px 40px;
  margin-bottom: 10px;
  width: 100%;
  border-radius: 8px;
}

.desc-sub {
  font-size: 1.3rem;
  line-height: 1.6;
}

.skill {
  padding-left: 0;
}

.skill-main {
  font-size: 1.5rem;
  font-weight: 700;
}

.period {
  font-weight: 700;
}

.period-ul {
  padding-left: 20px;
}

.work-btn {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
}

.modal-flex {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

/*ボタン　テンプレートあり 
作品をみる　Github*/
.button a {
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  max-width: 280px;
  padding: 10px 0px 10px 15px;
  font-family: "Noto Sans Japanese";
  line-height: 1.8;
  text-decoration: none;
  color: var(--color-sub2);
  transition: 0.3s ease-in-out;
  font-weight: 700;
  font-size: 1.6rem;
}

.button a:before,
.button a:after {
  content: "";
  position: absolute;
  display: block;
  top: 50%;
}

.button a:before {
  width: 0.5rem;
  height: 0.5rem;
  left: 1.1rem;
  border-top: solid 2px #fff;
  border-right: solid 2px #fff;
  z-index: 2;
  transform: translateY(-50%) rotate(45deg);
  transition: all 0.3s;
}

.button a:after {
  left: 0;
  background: var(--color-sub2);
  z-index: 1;
  width: 3rem;
  height: 3rem;
  border-radius: 4rem;
  transform: translateY(-50%);
  transition: all 0.5s;
}

.button a span {
  position: relative;
  transition: all 0.3s;
  z-index: 3;
}

.button a:hover span {
  color: #fff;
}

.button a:hover:before {
  left: 2.5rem;
  border-top: solid 2px #fff;
  border-right: solid 2px #fff;
}

.button a:hover:after {
  right: 0;
  width: 100%;
  background: var(--color-sub2);
}

body {
  vertical-align: middle;
  padding: 50px 0;
  text-align: center;
}

@media (min-width: 1025px) {
  .right-group {
    width: auto;
    /* ← PCだけ許可 */
  }
}

/* タブレット以下（PC前提を解除） */
@media (max-width: 1024px) {
  .right-group {
    margin: 0 auto;
    max-width: 900px;
    width: 100%;
    padding: 0 30px;
    box-sizing: border-box;
    margin-left: 0;
    margin-right: 0;
  }

  .main-card {
    padding-left: 40px;
    padding-right: 40px;
    overflow-x: hidden;
  }

}

@media (max-width: 900px) {
  .right-group {
    padding-left: 0;
    padding-right: 0;
  }

  .desc-sub {
    margin-left: 20px;
    margin-right: 20px;
    font-size: 1.3rem;
  }

  .thumb-wrapper {
    max-width: 600px;
  }

  #project,
  #github {
    margin-left: 10px;
    font-size: 1.4rem;
  }
  .modal-span,
  .modal-img {
  font-size: 1.3rem;
}
}

/* スマホ */
@media (max-width: 390px) {

  h2 {
    margin-left: 20px;
  }

  .tags {
    margin-left: 20px;
  }

  .tag {
    font-size: 1.2rem;
  }

  .button a {
    padding-left: 10px;
  }

  .modal-img {
    font-size: 1.3rem;
    margin-left: 30px;
  }

  .main-card {
    padding-left: 0px;
    padding-right: 0px;
    overflow-x: hidden;
  }

  .desc-title {
    font-size: 1.4rem;
    padding-left: 20px;
    padding-right: 20px;
    margin: 10px auto;
    max-width: 300px;

  }

  .desc-sub {
    font-size: 1.2rem;
    margin: 0 auto;
    max-width: 320px;
  }

  .skill-main {
    font-size: 1.3rem;
  }

  #project,
  #github {
    font-size: 1.3rem;
  }

  .tag {
    font-size: 1.1rem;
  }

  .thumb-img {
    max-width: 350px;
    margin-left: 20px;
    margin-right: 20px;
  }

}
</style>
