<template>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <cards  v-for="product in products" :key="product._id" :product="product"/>
  </div>
</template>

<script>
import Cards from './Cards.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: { Cards },
  methods: {
    ...mapActions(['getProducts']),
    all() {
      this.getProducts()
    }
  },
  computed: {
    ...mapGetters(['products'])
  },
  mounted() {
    this.getProducts()
  }
}
</script>

<style>

</style>