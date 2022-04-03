<template>
  <Navbar />
  <Carousel />
  <CallToAction />
</template>

<script>
// import { v4 as uuidv4 } from 'uuid'
  import axios from 'axios'

import CallToAction from './components/navigation/CallToAction.vue'
import Carousel from './components/navigation/Carousel.vue'
import Navbar from './components/navigation/Navbar.vue'

export default {
  components: { Navbar, Carousel, CallToAction },
  data() {
    return {
      products: [
        { _id: '1', name: '', short: '', desc: '', price: '', image: '', stock: '' }
      ],
      apiURL: 'http://localhost:8080/api/products'
    }
  },
  methods: {
    async  fetchProducts() {
      const res = await axios.get(this.apiURL)
      this.products = res.data
    }
  }
}
</script>

<style>
  body {
    overflow: hidden;
  }
</style>
