import axios from '@/axios'

export default {
  state: {
    products: [],
  },
  getters: {
    products: state => state.products
  },
  mutations: {
    GET_PRODUCTS: (state, products) => {
      state.products = products
    }
  },
  actions: {
    getProducts: async ({commit}) => {
      const res = await axios.get('/products')
      commit('GET_PRODUCTS', res.data)
    }
  }
}