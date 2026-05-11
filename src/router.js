import { createRouter, createWebHistory } from "vue-router";

import HomeView from './section/HomeView.vue';
import Work1 from './works/WorkPortfolio.vue';
import Work2 from './works/WorkTask.vue';
import Work3 from './works/WorkGame.vue';
import Work4 from './works/WorkPostCode.vue';


const router = createRouter({
    history: createWebHistory('/m01/portfolio/'),
    routes:[
        {
            path: '/',
            name:'Home',
            component: HomeView,
        },        
        {
            path: '/works/portfolio',
            name:'Work1',
            component: Work1
        },
        {
            path: '/works/gridnote',
            name:'Work2',
            component: Work2
        },
        {
            path: '/works/game_search',
            name:'Work3',
            component: Work3
        },        
        {
            path: '/works/postcode_search',
            name:'Work4',
            component: Work4
        },
    ],

    scrollBehavior(to) {
        if(to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth'
            };
        }
        return{ top: 0};
    }
});

export default router;