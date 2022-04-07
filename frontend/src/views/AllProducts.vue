<template>
  <Navbar />
  <keep-alive>
    <component :is="comp" />
  </keep-alive>
</template>

<script>
import CardGrid from '.././components/cards/CardGrid.vue'
import Navbar from '.././components/navigation/Navbar.vue'
export default {
  components: { Navbar, CardGrid },
  data() {
    return {
      comp: 'CardGrid',
      all: true,
    }
  },
  methods: {
    change(val) {
      this.comp = val
      if(val === CardGrid) {
        this.all = true
      }
    }
  }
}
</script>

<style>

</style>