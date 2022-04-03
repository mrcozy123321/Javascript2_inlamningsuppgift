<template>
  <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../../assets/img/image1.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="../../assets/img/image2.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="../../assets/img/image3.jpg" class="d-block w-100" alt="...">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarouselComponent',

}
</script>

<style scoped>
  .carousel-inner {
    height: 100vh;
    position: relative;
  }
</style>