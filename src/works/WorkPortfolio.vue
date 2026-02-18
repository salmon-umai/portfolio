<script setup>
import { onMounted, nextTick, ref } from 'vue';

import HamburgerMenu from '../section/HamburgerMenu.vue';
import WorkCard from '../components/WorkCard.vue';
import ImageModal from '../components/ImageModal.vue';

import thumbImg from '../assets/works/portfolio_main.png';
import thumbImg2 from '../assets/works/portfolio2.png';

import ModalImg from '../assets/works/portfolio_1.png'
import ModalImg2 from '../assets/works/portfolio_2.png'
import ModalImg3 from '../assets/works/portfolio_3.png'


const tags = [
  '自主制作',
  'Vue',
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
  { src: thumbImg2, alt: "サムネ2" }
];

const ModalImages = [
  { src: ModalImg, alt: "デザインラフ1" },
  { src: ModalImg2, alt: "デザインラフ2" },
  { src: ModalImg3, alt: "デザインラフ3" }
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
              <h2>ポートフォリオサイト</h2>
              <div class="tags">
                <p v-for="tag in tags" :key="tag" class="tag">
                  #{{ tag }}
                </p>
              </div>
            </div>
            <div class="work-btn">
              <div class="button">
                <a href="https://fee0707.fkohuman.com/m01/portfolio/"
                  target="_blank"
                  rel="noopener noreferrer"><span id="project">　　サイトを見る　</span></a>
              </div>
              <div class="button">
                <a href="#"><span id="github">　　Github　</span></a>
              </div>
            </div>
          </div>

          <div class="desc">
            <h3 class="desc-title">概要</h3>
            <div class="desc-card">
              <P class="desc-sub">
                自身の経歴や制作物をまとめたポートフォリオサイトです。
                趣味であるゲームの要素を取り入れ、海の中をイメージしたデザインで制作しました。</P>
            <button class="modal-img" @click="open = true">
             <span class="modal-span">▶</span>デザインラフ
            </button>
            </div>
            
            <ImageModal
            :open="open" 
            title="デザインラフ" :images="ModalImages"
            v-model:index="index" @close="open=false">
            </ImageModal>
          </div>

          <div class="desc">
            <h3 class="desc-title">技術的な取り組み</h3>
            <div class="desc-card">
              <ul class="desc-sub skill">
                <li>
                  <span class="skill-main">Vue.jsによるコンポーネント設計:</span>
                  <br>ヘッダーやセクションの枠など、
                  繰り返し使うパーツを分けたり、セクションごとに分けたいとコンポーネント化し、
                  再利用性と管理のしやすさを意識しました。</li>
                  <li><span class="skill-main">CSS変数を用いたテーマ切り替え:</span>
                    <br>:root（ライトモード）と .is-darkで変数を定義し、
                    クラスを切り替えることでサイト全体の配色が同期して切り替わる仕組みを構築しました。
                  </li>
                  <li>
                    <span class="skill-main">アイコンの動的制御:</span>
                    <br>CSS変数との連動性を高めるため、
                    SVGをVueコンポーネントとして実装し、アイコンも色も変えるように実装しました。
                  </li>

              </ul>

            </div>
          </div>

          <div class="desc">
            <h3 class="desc-title">課題</h3>
            <div class="desc-card">
              <P class="desc-sub">
                制作を通して、画面幅ごとの余白調整やレイアウト調整に試行錯誤する場面がありました。
                また、カルーセル表示に外部ライブラリを導入した際に意図した表示にならないことがあり、
                AIを活用して動作する形にはできましたが設定や挙動の仕組みについて十分に理解できていない部分があるため、
                改めてドキュメントを読み込んで原因を整理していきたいと考えています。</P>
            </div>
          </div>

          <div class="desc">
            <h3 class="desc-title">製作期間</h3>
            <div class="desc-card">
              <P class="desc-sub">
                <p class="period">約1カ月</p>
                <ul class="period-ul">
                  <li>・要件整理/ワイヤーフレーム: 2日程度</li>
                  <li>・デザインラフ作成(Figma): 約1週間</li>
                  <li>・実装/調整: 約3週間</li>
                </ul>
              </P>
            </div>
          </div>

          <div class="desc">
            <h3 class="desc-title">使用言語・技術</h3>
            <div class="desc-card">
              <P class="desc-sub">HTML / CSS / JavaScript / Vue.js / Figma </P>
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
  font-size: 1.6rem;
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
