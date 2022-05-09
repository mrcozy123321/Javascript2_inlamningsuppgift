<template>
  <Navbar />
  <div class="container d-flex" v-if="product">
    <img class="image-size" :src="(product.image)" alt="Card image">
    <div class="product-info">
      <h2 class="product-title">{{ product.name }}</h2>
      <h2 class="product-title flex-right">${{ product.price }}</h2>
      <p class="product-body">{{ product.desc }}</p>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/navigation/Navbar.vue'
import { mapActions, mapGetters} from 'vuex'
export default {
  components: { Navbar },
  props: ['id'],  
    methods: {
    ...mapActions(['getOneProduct']),

  },
  computed: {
    ...mapGetters(['product'])
  },
  created() {
    this.getOneProduct(this.id)
  },

  
}
</script>

<style scoped>
  .image-size {
    width: 600px;
  }
  .flex-right {
    display: flex;
    justify-content: right;
    margin-right: 3rem;
  }
  .product-title {
    padding: 1rem;
    font-size: 3rem;
  }
  .product-body {
    margin-top: 3rem;
    padding: 0 1rem;
  }
  .product-info {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
  }
</style>