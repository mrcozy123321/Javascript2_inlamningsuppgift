<template>
  <div class="col">
    <div class="card h-100">
      <router-link to="'/products/' + product._id" class="text-decoration-none text-dark">
      <img class="card-img-top" :src="(product.image)" alt="Card image">
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <h5 class="card-title">${{ product.price }}</h5>
        <p class="card-text">{{ product.short }}</p>
      </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: ['product']
}
</script>

<style>

</style>