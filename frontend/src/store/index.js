// import Vue from 'vue'
import { createStore } from 'vuex'
import Products from './modules/Products/Products'
import Product from './modules/Products/Product'



const store = createStore({
    modules: {
      Products,
      Product
    }
})

export default store