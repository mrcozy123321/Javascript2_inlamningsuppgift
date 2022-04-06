import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
window.axios = require('axios');

new Vue({
  router,
  store,
  el: '#app',
  template: '<App/>',
  render: h => h(App),
  components: { App },
}).$mount('#app')

