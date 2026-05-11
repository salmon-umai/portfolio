<script setup>
import { onMounted, nextTick, ref } from 'vue';

import HamburgerMenu from '../section/HamburgerMenu.vue';
import WorkCard from '../components/WorkCard.vue';
import ImageModal from '../components/ImageModal.vue';

import thumbImg from '../assets/works/gridnote/gridnote_main.png';
import thumbImg2 from '../assets/works/gridnote/gridnote_main2.png';
import thumbImg3 from '../assets/works/gridnote/gridnote_main3.png';

import ModalImg from '../assets/works/gridnote/gridnote_1.png';
import ModalImg2 from '../assets/works/gridnote/gridnote_2.png';
import ModalImg3 from '../assets/works/gridnote/gridnote_3.png';

import UseCase from '../assets/works/gridnote/UseCase.png';
import ER from '../assets/works/gridnote/ER.png';
import SFD from '../assets/works/gridnote/SFD.png';

import RDD from '../assets/works/gridnote/RDD.png';


const tags = [
  '自主制作', 'Vue', 'Node', 'DB接続', 'API設計', '認証', 'AI活用'
]

//ImageModal
const openDesign = ref(false);
const indexDesign = ref(0);

const openDocument = ref(false);
const indexDocument = ref(0);

const openRDD = ref(false);
const indexRDD = ref(0);

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
    if(img.complete) {
      loaded++
    } else {
      img.addEventListener('load', () => {
        loaded++
        if(loaded === imgs.length) init()
      })
    }
  })

   if (loaded === imgs.length) init()
});

const thumbImages = [
  { src: thumbImg, alt: "サムネ1" },
  { src: thumbImg2, alt: "サムネ2" },
  { src: thumbImg3, alt: "サムネ3" }
];

const ModalImages = [
  { src: ModalImg, alt: "デザインラフ1" },
  { src: ModalImg2, alt: "デザインラフ2" },
  { src: ModalImg3, alt: "デザインラフ3" }
];

const ModalImages2 = [
  { src: UseCase, alt: "ユースケース図" },
  { src: ER, alt: "ER図" },
  { src: SFD, alt: "画面遷移図" }
];

const ModalRDD = [
  { src: RDD, alt: "要件定義書" }
]


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
              <h2>タスク管理アプリ「GridNote」</h2>
              <div class="tags">
                <p v-for="tag in tags" :key="tag" class="tag">
                  #{{ tag }}
                </p>
              </div>
            </div>
            <div class="work-btn">
              <div class="button">
                <a href="https://gridnote-demo-1.onrender.com"
                 target="_blank" rel="noopener"
                ><span id="project">　　サイトを見る</span></a>
              </div>
              <div class="button">
                <a href="https://github.com/salmon-umai/gridnote"
                target="_blank"
                  rel="noopener noreferrer"><span id="github">　　Github　</span></a>
              </div>
            </div>
            <span id="comment">※デモ環境のため、新規登録機能に制限があります。</span>
          </div>

          <div class="desc">
            <h3 class="desc-title">概要</h3>
            <div class="desc-card">
              <p class="desc-sub">
              職業訓練校でデータベースとの接続を課題として
              作成したTODOアプリをベースに、個人で機能を拡張した
              タスク管理アプリです。
              優先度を視覚的に把握できるようにすることを目的に、
              カテゴリごとに項目管理、テーマカラーの設定・編集、カレンダー表示などの機能を実装しました。
              </p>
              <p class="desc-sub red">
                ※本アプリ（デモ環境）は、Render（無料プラン）にデプロイしいるため、初回ログイン時に時間がかかる場合があります。
              </P>
            <button class="modal-img" @click="openDesign = true">
             <span class="modal-span">▶</span>デザインラフ
            </button>
            </div>
            
            <ImageModal
            :open="openDesign" 
            title="デザインラフ" :images="ModalImages"
            v-model:index="indexDesign" @close="openDesign=false">
            </ImageModal>
          </div>

          <div class="desc">
            <h3 class="desc-title">設計</h3>
            <div class="desc-card">
              <P class="desc-sub">
               要件定義を行い機能や画面構成を整理し、ER図や画面遷移図を作成しました。
              </P>
              <div class="modal-flex">
                <button class="modal-img" @click="openRDD = true">
                <span class="modal-span">▶</span>要件定義書
                </button>

                <button class="modal-img" @click="openDocument = true">
                <span class="modal-span">▶</span>ユースケース図 / ER図 / 画面遷移図
                </button>
              </div>
            </div>

            <ImageModal
            :open="openRDD" 
            title="要件定義書" :images="ModalRDD"
            v-model:index="indexRDD" @close="openRDD=false">
            </ImageModal>
            
            <ImageModal
            :open="openDocument" 
            title="設計資料" :images="ModalImages2"
            v-model:index="indexDocument" @close="openDocument=false">
            </ImageModal>
          </div>

          <div class="desc">
            <h3 class="desc-title">技術的な取り組み</h3>
            <div class="desc-card">
              <ul class="desc-sub skill">
                <li>
                    <span class="skill-main">DB設計：</span>
                    <br>
                    要件定義を行った上で、ユーザー・タブ・項目の3つのテーブルで
                    管理する構成としました。項目は、論理削除（is_deleted）を採用し、データの安全性を考慮しました。
                    ER図を作成した上で設計を行い、機能拡張や実装時の負荷を意識した構成を検討しました。
                </li>
                <li>
                  <span class="skill-main">共通コンポーネントを実装：</span>
                  <br>背景のデザインをコンポーネント化し、UIを再利用しやすい構成
                  で実装しました。また、画面中央に表示されるモーダルの開閉や
                  フォーム要素のイベント処理も共通化し、各画面にロジックが分散しない設計を意識しています。
                </li>
                <li><span class="skill-main">Node.js + Express によるAPIを構築：</span>
                    <br>Vue.jsとデータベースを接続するため、
                    Node.js + Express を用いてAPIを構築しました。
                    認証用ミドルウェアを利用し、ログインユーザーに紐づくデータのみ取得できるよう設計しています。
                </li>
                <li>
                    <span class="skill-main">テーマカラーの変更：</span>
                    <br>アプリ全体のテーマカラーをまとめて切り替えられるよう、CSS変数を用いて実装しました。選択したカラーテーマはそれぞれのIDをDBで保存し、カラーコード自体はVue側で管理しています。
                    また、再ログイン時にも設定が反映されるようにしています。
                  </li>
              </ul>
            </div>
          </div>
          <div class="desc">
            <h3 class="desc-title">課題</h3>
            <div class="desc-card">
              <P class="desc-sub">
                　カレンダー表示中にカテゴリを切り替えた場合、リストボタンを押すまで項目が表示されない挙動があります。
                カテゴリをクリックしただけでもリスト表示に切り替わる構成へ改善したいと考えています。<br>
                　また、サイドバーを設計したためコンポーネント間のデータの受け渡しが増え、構成が複雑になりました。
                状態管理の整理やコンポーネントの責務をより明確に分ける設計を検討します。
              </P>
            </div>
          </div>

          <div class="desc">
            <h3 class="desc-title">製作期間</h3>
            <div class="desc-card">
              <P class="desc-sub">
                <p class="period">約2.5カ月(2025年11月～2026年1月制作)</p>
                <ul class="period-ul">
                  <li>・要件整理/機能の検討(画面遷移図、ER図、デザインラフ)：7日程度</li>
                  <li>・デザインラフ作成(Figma)：3日程度</li>
                  <li>・実装/調整：約2カ月</li>
                </ul>
              </P>
            </div>
          </div>

          <div class="desc">
            <h3 class="desc-title">使用言語・技術</h3>
            <div class="desc-card">
              <P class="desc-sub">HTML / CSS / JavaScript / Vue.js / Node.js / Express / MySQL / JWT / Axios / Figma </P>
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
  padding: 5px 10px;
  font-size: 1.3rem;
  border-radius: 20px;
  border: 1px solid var(--color-tag2);
  line-height: 1;
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
.red {
  color: #fc4343;
}
.skill {
    padding-left: 0;
}
.skill-main {
  font-size: 1.5rem;
  font-weight: 700;
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

#comment {
  font-size: 1.4rem;
  color: #fc4343;
  font-weight: 600;
}

.skill li {
  margin-bottom: 10px;
}

body {
  vertical-align: middle;
  padding: 50px 0;
  text-align: center;
}


li {
  list-style: none;
}
.period {
  font-weight: 700;
}
.period-ul {
  padding-left: 20px;
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
    .thumb-wrapper{
    max-width: 600px;
  }
    #project, #github {
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
  #comment {
    font-size: 1.2rem;
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
  #project, #github {
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
