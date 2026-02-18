<script setup>
import { computed } from 'vue';

const props = defineProps({
    //親に渡す　defineは型を指定できる
    open: Boolean,
    title: String,
    images: { type: Array, required: true } 
    //[src, alt]
});

const emit = defineEmits(["close"]);

const index = defineModel("index", { default: 0});

const current = 
computed(() => props.images[index.value]);
//computed:表示する画像を追従するため
//props.images 親から渡される画像配列
//index が変わったら、自動で表示する画像も変える
//例：index.value === 0　→ props.images[0]

const next = () => {
    index.value = (index.value + 1) % props.images.length;
};
//最後までいったら最初に戻すため（％で余りを出してループするスライダー）
//例：今のindexが2(つまり3枚目)　(2+1)%3 = 0 ←0に戻る

const prev = ( )=> {
    index.value = 
    (index.value - 1 + props.images.length) %
    props.images.length;
};

</script>

<template>
    <teleport to="body">
        <div v-if="open" class="modal" @click.self="emit('close')">
            <div class="panel">
                <header>
                    <h3>{{ title }}</h3>
                    <button @click="emit('close')">×</button>
                </header>
                <div class="pager">
                    {{ index + 1 }} / {{ images.length}}
                </div>
                <div class="viewer">
                    <button class="nav left" @click="prev"><</button>
                    <img :src="current.src" :alt="current.alt">
                    <button class="nav right" @click="next">></button>
                </div>

            </div>
        </div>
    </teleport>
</template>

<style scoped>
header {
    position: relative;/*×の基準 */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 17px;
}
header button {
    position: absolute;
    top: 6px;
    right: 10px;
    background: none;
    border: none;
    font-size: 30px;
    cursor: pointer;
}
.modal {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,.55);
    display: grid;
    place-items: center;
    z-index: 999;
}
.panel {
    width: min(1100px, 96vw);
    background: #fff;
    padding: 16px;
    overflow-y: auto;/*縦はスクロール */
    overflow-x: hidden;/*横ははみ出さない */
}
.viewer {
    height: 75vh;
    max-width: 960px;   /*コンテンツ幅 */
    margin: 0 auto;  
}
.viewer img {
    object-fit: contain;/*コンテンツを、コンテナーにどのようにはめ込むかを設定*/
    max-width: 100%;
    display: block;/*imgはデフォルトでinlineでmarginが効かないため、blockに */
    margin: 0 auto;
}
.nav {
    position: fixed;
    transform: translateY(-50%);
    top: 50%;
    background: none;
    border: none;
    cursor: pointer;
}
.left {
    font-size: 30px;
    left: 65px;
}
.right {
    right: 65px;
    font-size: 30px;
}
.pager {
  text-align: center;
  font-size: 13px;
  opacity: 0.7;
}

@media (max-width:990px) {
    .left {
    left: 20px;
    }
    .right {
    right: 20px;
    }
}
</style>