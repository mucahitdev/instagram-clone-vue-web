import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import appcss from './styles/app.css'

Vue.config.productionTip = false
new Vue({
  appcss,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
