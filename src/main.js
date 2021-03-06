import Vue from 'vue'
import { Button } from 'mint-ui'

import App from './App.vue'
import router from './router'
import store from './store'
import './mock/mockServer'

Vue.component(Button.name, Button)

new Vue({
render: (h) => h(App) ,
router,
store
}).$mount('#app')