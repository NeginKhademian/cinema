import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import router from './routers'
import mainLayout from '@/layout/main.vue'
import Modal from "@/components/modal.vue"
import '../public/css/clear.css'
import store from './store/index'
// register global components
Vue.component('mainLayout',mainLayout)
Vue.component('Modal',Modal)
// register router
Vue.use(VueRouter)

// register store
Vue.use(Vuex)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
