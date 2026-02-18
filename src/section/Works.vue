<script setup lang="js">

import portfolioThumnail from '../assets/works/top/portfolio_top.png'
import taskThumnail from '../assets/works/top/girdnote_top.png';
import postcodeThumnail from '../assets/works/top/postcode_top.png'
import gameThumnail from '../assets/works/game/game_main.png'

//import CrabImg from'../../assets/crab.svg';

const works = [
    {
        id: 1,
        title: 'タスク管理アプリ「GridNote」',
        thumbnail: taskThumnail,
        tags: ['Vue', 'Node', 'DB接続', 'API設計', '認証', 'AI活用'],
        path: '/works/gridnote',
    },
    {
        id: 2,
        title: 'ポートフォリオサイト',
        thumbnail: portfolioThumnail,
        tags: ['自主制作', 'Vue', 'AI活用'],
        path: '/works/portfolio',
    },
    {
        id: 3,
        title: 'ゲーム検索',
        thumbnail: gameThumnail,
        tags: ['自主制作', 'Vue' ,'外部API','AI活用'],
        path: '/works/game_search'
    },
    {
        id: 4,
        title: '郵便番号検索',
        thumbnail: postcodeThumnail,
        tags: ['課題', 'JavaScript' ,'Ajax'],
        path: '/works/postcode_search'
    }
]
</script>

<template>
    <div id="works" class="section-card main-card fade-in">
            <h1 class="section-title">WORKS<span class="title-sub">制作物一覧</span></h1>
            <!--
            <img :src="CrabImg" alt="かに" class="crab1">
            -->
        <div class="works-grid">
                <div v-for="work in works" :key="work.id">
                    <RouterLink :to="work.path" class="work-card">
                        <div class="thumb">
                            <img :src="work.thumbnail" :alt="work.title"
                            class="work-img">
                            <div class="work-overlay">
                                <span>詳細を見る</span>
                            </div>
                        </div>
                        <h3 class="title">{{ work.title }}</h3>
                       <div class="tags">
                            <p v-for="tag in work.tags" :key="tag"
                            class="tag">
                                #{{ tag }}
                            </p>
                        </div>
                    </RouterLink>
             </div>
        </div>

    </div>
</template>

<style scoped>
    #works {
        padding-bottom: 60px;
    }
    .works-grid {
        padding-top: 30px;
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 40px;
        justify-content: center;
        max-width: 1000px;
        margin: 0 auto;
        padding: 0 20px;
    }
    .title {
        font-size: 1.5rem;
    }
    .work-card {
        display: block;
        cursor: pointer;
        text-decoration: none;
        color: inherit;
        width: 100%;
    }

    .tags {
        margin-top: 5px;
        display: flex;
        gap: 3px;
        font-weight: 500;
        flex-wrap: wrap;
        
    }
    .tag {
        padding: 5px 10px;
        border-radius: 20px;
        font-size: 1.2rem;
        background-color: var(--color-tag1);
        color: var(--color-tag2);
        border: 1px solid var(--color-tag2);
    }
    .thumb {
        width: 100%;
        aspect-ratio: 16 / 9;
        
        position: relative;
        overflow: hidden;
    }
    .work-img {
        border: 1px solid;
        width: 100%;
        height: 100%;
        object-fit: cover;
        text-decoration: none;
        color: inherit;
        
        transition: 
            transform 0.3s ease,
            filter 0.3s ease;
        /*transition: transform 0.2s ease, box-shadow 0.2s ease;
        */
        }
    .work-overlay {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
 
        background: rgba(0, 0, 0, 0.35);
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    .work-overlay span {
        color: #fff;
        padding: 10px 18px;

    }
    .work-card:hover .work-img {
        transform: scale(1.08);
        filter: grayscale(40%) brightness(0.85);
    }
    .work-card:hover .work-overlay {
        opacity: 1;
    }
    .title {
        margin-top: 5px;
        margin-bottom: 5px;
        color: var(--color-sub2);
    }

    .crab1 {
        width: 70px;
        height: auto;
        position: relative;
        left: 80%;
        top: 70%;
    }


    @media (max-width: 724px) {
  .works-grid {
        grid-template-columns: 1fr;
        margin-left: 40px;
        margin-right: 40px;
        }
        
    }    
    @media (max-width: 390px) {
    .works-grid {
        margin-left: 10px;
        margin-right: 10px;
        }
        
    }

</style>