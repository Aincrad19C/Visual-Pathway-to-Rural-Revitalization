import {createRouter, createWebHashHistory} from "vue-router";

const router = createRouter({
    mode: 'history',
    history: createWebHashHistory(),
    routes: [
        { path: '/', redirect: '/map' },
        { path: '/map', component: () => import('./components/Map.vue') },
        { path: '/articles', component: () => import('./components/Articles.vue') },
        { path: '/about', component: () => import('./components/About.vue')},
        { path: '/foc', component: () => import('./components/FreeOfCharge.vue')},
        { path: '/creators', component: () => import('./components/Creators.vue')}
    ]
})
export default router;
