import axios from '@/axios'

export default {
  state: {
    product: null,
    newProduct: null
  },
  getters: {
    product: state => state.product,
    newProduct: state => state.newProduct
  },
  mutations: {
    GET_A_PRODUCT: (state, product) => {
      state.product = product
    },
    DELETE_A_PRODUCT: (state, product) => {
      state.product = product
    },
    NEW_PRODUCT: (state, newProduct) => {
      state.newProduct = newProduct
    }
  },
  actions: {
    getOneProduct: async ({commit}, _id) => {
      const res = await axios.get('/products/' + _id)
      commit('GET_A_PRODUCT', res.data)
    },
    deleteOneProduct: async ({commit}, _id) => {
      const res = await axios.delete('/products/' + _id)
      commit('DELETE_A_PRODUCT', res.data)
    },
    addProduct: async ({commit}, data) => {
      const newProduct = {
        name:   data.name,
        short:  data.short,
        desc:   data.desc,
        price:  data.price,
        image:  data.image,
        stock:  data.stock
      }
      await axios.post('/products/', newProduct)
      commit('NEW_PRODUCT', {newProduct})
    }
  }
}