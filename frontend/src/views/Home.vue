<template>
  <Navbar />
  <Carousel />
  <CallToAction />
</template>

<script>
import CallToAction from '../components/navigation/CallToAction.vue'
import Carousel from '../components/navigation/Carousel.vue'
import Navbar from '../components/navigation/Navbar.vue'
export default {
  components: { Navbar, Carousel, CallToAction },
  name: 'HomeComponent',
  methods: {
    
  }
}
</script>

<style>

</style>