import Vue from 'vue'
import Vuex from 'vuex'
import Products from './modules/Products/Products'
import Product from './modules/Products/Product'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Products,
    Product
  }
})