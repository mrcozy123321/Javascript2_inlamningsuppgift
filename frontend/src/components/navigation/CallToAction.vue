<template>
  <button type="button" class="btn btn-success centerbutton btn-size" data-mdb-ripple-color="dark">Take a look at our products!</button>
</template>

<script>
export default {

}
</script>

<style scoped>
  .btn-size {
    padding: 5rem 10rem;
  }
  .centerbutton {
    margin: 0 auto;
    text-align: center;
    position:absolute;
    z-index:50;
    top:50%;
    left:50%;
    margin-top:-5rem;
    margin-left:-12.5rem;
  }
</style>