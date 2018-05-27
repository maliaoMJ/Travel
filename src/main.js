// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import '@/assets/styles/reset.css'
import '@/assets/styles/border.css'
Vue.config.productionTip = false
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'http://img.lanrentuku.com/img/allimg/1212/5-121204193R5-50.gif',

  loadding: 'http://img.lanrentuku.com/img/allimg/1212/5-121204193R5-50.gif',

  attempt: 1
})
Fastclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
