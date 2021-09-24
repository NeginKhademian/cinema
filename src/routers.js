import Vue from 'vue'
import VueRouter from 'vue-router'
import reserved from './pages/reserved/index.vue'
import Home from "./pages/index.vue"
import notFound from "./components/notfound.vue"
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
   
  },
  {
    path:"/reserved",
    name:"reserved",
    component:reserved,
  },
  { path: '*',component:notFound },

]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router
