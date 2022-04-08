import Vue from 'vue'
// import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
window.axios = require('axios');

// const app = createApp(App)

// app.use(router);
// app.use(store);
// app.mount('#app');

new Vue({
  router,
  store,
  el: '#app',
  template: '<App/>',
  render: h => h(App),
  components: { App },
}).$mount('#app')

