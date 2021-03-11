import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'src/styles/app.css'

Vue.config.productionTip = false
// todo adjbuıdbaw
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
