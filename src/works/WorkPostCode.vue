<script setup>
import { onMounted, nextTick } from 'vue';

import HamburgerMenu from '../section/HamburgerMenu.vue';
import WorkCard from '../components/WorkCard.vue';

import thumbImg from '../assets/works/postcode_main.png';
import thumbImg2 from '../assets/works/postcode_main2.png';
import thumbImg3 from '../assets/works/postcode_main3.png';


const tags = [
  '課題',
  'JavaScript',
  'jQuery',
  'Ajax',
  'レスポンシブ対応'
]

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
              <h2>郵便番号検索</h2>
              <div class="tags">
                <p v-for="tag in tags" :key="tag" class="tag">
                  #{{ tag }}
                </p>
              </div>
            </div>
            <div class="work-btn">
              <div class="button">
                <a href="https://fee0707.fkohuman.com/m01/postcode_search/"
                target="_blank"
                rel="noopener noreferrer"
                ><span id="project">　　サイトを見る　</span></a>

              </div>
              <div class="button">
                <a href="https://github.com/salmon-umai/postcode-search"
                  target="_blank"
                  rel="noopener noreferrer"
                ><span id="github">　　Github　</span></a>
              </div>
            </div>
          </div>

          <div class="desc">
            <h3 class="desc-title">概要</h3>
            <div class="desc-card">
              <P class="desc-sub">
              職業訓練校の課題として制作した、住所検索アプリです。
              Ajaxを用いた非同期通信の理解と、外部データ（CSV）との
              連携を目的に制作しました。<br>
              都道府県を選択し、郵便番号や住所キーワードで検索すると、
              該当する住所一覧を表示し、一覧をクリックすると
              地図を表示する仕組みを実装しています。
              データはCSVファイルから取得し、
              JavaScript側で加工・検索処理を行っています。
              現在は九州地方のデータのみ対応しています。
                </P>
            </div>
          
          </div>

          <div class="desc">
            <h3 class="desc-title">技術的な取り組み</h3>
            <div class="desc-card">
              <ul class="desc-sub skill">
                <li>AjaxによるCSVファイルの非同期読み込み</li>
                <li>CSVデータの分割・配列化・条件検索処理</li>
                <li>AND / OR検索のボタン切り替え実装</li>
                <li>検索結果の住所からGoogleMap表示（住所文字列から地図を表示）</li>
              </ul>
            </div>
          </div>
          <div class="desc">
            <h3 class="desc-title">使用言語・技術</h3>
            <div class="desc-card">
              <P class="desc-sub">HTML / CSS / JavaScript / jQuery / Ajax </P>
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
    color: var(--color-accent);
    cursor: pointer;
    font-size: 1.5rem;
    margin-top: 10px;
    font-weight: 700;
}
.modal-span {
  font-size: 1.3rem;
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
