<script setup lang="js">
import SkillBar from './others/SkillBar.vue';

import CodeIcon from '../assets/skill/code.svg';
import dbIcon from '../assets/skill/database.svg';
import ToolIcon from '../assets/skill/tool.svg';



const codingSkills = [
    { name: 'HTML・CSS', level: 5, desc:'レスポンシブ対応・基本構築' },
    { name: 'JavaScript', level: 3, desc:'基礎的な理解' },
    { name: 'jQuery', level: 2, desc:'ライブラリの理解のための学習' },
    { name: 'Vue', level: 4, desc:'コンポーネント化/DBとの接続' },
    { name: 'Node', level: 2, desc:'Vueとの接続/API作成' },
];
const dbSkills = [
    { name: 'MySQL', level: 3, desc:'基本的なSQL構文の理解' },
    { name: 'PostgreSQL', level: 2, desc:'Vueとの接続' },
];
const toolSkills = [
    { name: 'Illustrator', level: 1, desc:'SVG画像の簡単な編集' },
    { name: 'Canva', level: 3, desc:'簡単な資料作成・アニメーション' },
    { name: 'Figma', level: 3, desc:'簡単なデザインラフの作成' },
    { name: 'VS Code', level: 4, desc:'開発環境として使用' },
    { name: 'GitHub', level: 1, desc:'ソースコード管理' },
    { name: 'Render', level: 1, desc:'GitHub連携によるアプリ公開' },
];

</script>

<template>
    <div id="skills" class="section-card main-card  fade-in">
        <h1 class="section-title">SKILLS<span class="title-sub">スキル・資格</span></h1>
        <div class="skill-box">
            <h3 class="skillbar-title"> スキルバーの基準</h3>
            <div class="skill-legend">
                <div class="skill-row">
                    <SkillBar :level="5"></SkillBar>
                    <span class="skill-text">
                        : 画面構成を考え、実装まで一通り対応できる</span>
                </div>
                <div class="skill-row">
                    <SkillBar :level="4"></SkillBar>
                    <span class="skill-text">
                        : 調べながら実装することができる</span>
                </div>
                <div class="skill-row">
                    <SkillBar :level="3"></SkillBar>
                    <span class="skill-text">
                        : 基礎理解があり、簡単な実装ができる</span>
                </div>
                <div class="skill-row">
                    <SkillBar :level="2"></SkillBar>
                    <span class="skill-text">
                        : 学習を通して触れたことがある</span>
                </div>
                <div class="skill-row">
                    <SkillBar :level="1"></SkillBar>
                    <span class="skill-text">
                        : 概要を把握している</span>
                </div>
                <div class="skill-time">
                    <h3 class="part-title"> 学習時間 </h3>
                    <p class="part-text">
                        職業訓練校：<span class="highlight"> フロントエンドエンジニア養成科</span><br>
                        総訓練時間　<span class="highlight">516</span>時間
                    </p>
                    <ul>
                        <li class="part-text">
                            フロントエンド開発に必要なHTML/CSSコーティング、JavaScript(jQuery,Vue)などの知識及び技能の習得。
                        </li>
                        <li class="part-text">
                            Webサイトのコーティングや動的サイト、アプリ制作を計画的に実施。
                        </li>
                    </ul>
                </div>
                <div class="skill-cer">
                    <h3 class="part-title"> 資格 </h3>
                    <p class="part-text">Webクリエイター試験エキスパート　　2025年10月取得</p>
                </div>
            </div>
        </div>

        <div class="skill-box">
            <div class="width">
                <img :src="CodeIcon" alt="コード" class="icon-img">
                <h2  class="set-title">Coding</h2>
            </div>
            <div class="skill-row set-row" v-for="set in codingSkills"
            :key="set.name">
                <h3 class=" set-h3">{{ set.name }}</h3>
                <SkillBar :level="set.level"></SkillBar>
                <p class="set-text">{{ set.desc }}</p>
            </div>
        </div>
        <div class="skill-box">
            <div class="width">
                <img :src="dbIcon" alt="データベース" class="icon-img">
                <h2  class="set-title">DateBase</h2>
            </div>
            <div class="skill-row set-row" v-for="set in dbSkills"
            :key="set.name">
                <h3 class=" set-h3">{{ set.name }}</h3>
                <SkillBar :level="set.level"></SkillBar>
                <p class="set-text">{{ set.desc }}</p>
            </div>
        </div>
        <div class="skill-box">
            <div class="width">
                <img :src="ToolIcon" alt="ツール" class="icon-img">
                <h2  class="set-title">Tool</h2>
            </div>
            <div class="skill-row set-row" v-for="set in toolSkills"
            :key="set.name">
                <h3 class=" set-h3">{{ set.name }}</h3>
                <SkillBar :level="set.level"></SkillBar>
                <p class="set-text">{{ set.desc }}</p>
            </div>
        </div>

    </div>
</template>
<style scoped>
#skills {
    padding-bottom: 40px;
}
.skill-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    background-color: var(--color-box);
    max-width: 600px;
    border: 1px solid var(--color-main);
    border-radius: 20px;
    padding-bottom: 30px;
    margin-bottom: 10px;
}
.skillbar-title {
    color: var(--color-main2);
    font-size: 16px;
    margin-right: 380px;
}
.part-title {
    color: var(--color-main2);
    margin-bottom: 5px;
    margin-left: 40px;
    margin-right: 40px;
    font-size: 16px;
     border-bottom: 2px solid var(--color-main2);
    
}
.part-text {
    color: var(--color-sub2);
    margin-left: 50px;
    margin-right: 30px;
    font-size: 14px;

}
.highlight {
    font-weight: 600;
}
li {
list-style-type: circle;
}
.skill-legend {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.skill-row {
    margin-left: 120px;
    display: grid;
    grid-template-columns: 120px 190px 1fr;
    align-items: center;
    gap: 12px;
    width: 100%;
}
.set-row {
    margin-left: 100px;
    grid-template-columns: 120px 120px 1fr;
}

.skill-text {
    font-size: 12px;
    line-height: 1;
    /*行高 */
    margin-left: 30px;
    margin-bottom: 13px;
    font-weight: 600;
    color: var(--color-sub2);
    white-space: nowrap;
}
.width {
    display: flex;
    gap: 10px;
}
.set-title {
    color: var(--color-sub2);
    font-family: "Michroma", sans-serif;
    letter-spacing: 0.6px;
    font-size: 20px;
}
.set-h3 {
    margin: 0;
    text-align: right;
    color: var(--color-sub2);
    font-size: 14px
}
.skill-desc {
  font-size: 12px;
  color: var(--color-sub2);
  white-space: nowrap;
}
.set-text{
    margin-left: 40px;
    color: var(--color-sub2);
    font-size: 13px;

}
.set-text,
.set-h3 {
    position: relative;
    bottom: 7px;
}

@media (max-width: 724px) {
.skillbar-title {
    margin: 10px auto;
}
.skill-legend {
  width: 100%;
}
.skill-row {
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.skill-bar {
    margin-bottom: 0;
    margin-left: 10px;
    margin: 0 auto;
}
.skill-text {
    font-size: 0.9em;
    margin: 0 auto ;
}
.part-title {
    margin: auto 20px;
}
.part-text {
    font-size: 0.98em;
    margin-left: 20px;
}
.set-h3 {
    bottom: 0;
    margin: auto;
}
.set-text {
    margin: 0 auto;
}
}

@media (max-width: 390px) {
    .skill-text {
        font-size: 0.9rem;
    }
}
</style>