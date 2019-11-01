import Vue from 'vue';
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {path: '/', component: Msite},
        {path: '/msite', component: Msite}
    ]
})