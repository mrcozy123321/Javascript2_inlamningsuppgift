<template>
  <Navbar />
  <Carousel />
  <CallToAction />
</template>

<script>
// import { v4 as uuidv4 } from 'uuid'

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
