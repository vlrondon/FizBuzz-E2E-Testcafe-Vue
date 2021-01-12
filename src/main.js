import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'

import Home from  './components/Pages/Home'
import FixedRange from  './components/Pages/FixedRange'
import PageNotFound from  './components/404'
import CustomRange from "./components/Pages/CustomRange";


Vue.use(VueRouter)

Vue.config.productionTip = false
const appRoutes = [
  { path: '/', component: Home },
  { path: '/home', component: Home, name:'homeRoute', alias: '/myhome' },
  { path: '/range', component: FixedRange, name:'rangeRoute' },
  { path: '/custom-range', component: CustomRange, name:'customRangeRoute' },
  { path: '*', component: PageNotFound, name:'notfoundRoute' },
];

const routerObj = new VueRouter({
  routes:appRoutes,
  mode:'history'
});

new Vue({
  render: h => h(App),
  router:routerObj
}).$mount('#app')
