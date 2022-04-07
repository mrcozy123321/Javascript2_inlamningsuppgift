<template>
  <div id="app">
    <Navbar />
    <Carousel />
    <router-view/>
    <CallToAction />
  </div>
</template>

<script>
import CallToAction from './components/navigation/CallToAction.vue'
import Carousel from './components/navigation/Carousel.vue'
import Navbar from './components/navigation/Navbar.vue'

export default {
  components: { Navbar, Carousel, CallToAction },
}
</script>

<style>
  body {
    overflow: hidden;
  }
</style>
