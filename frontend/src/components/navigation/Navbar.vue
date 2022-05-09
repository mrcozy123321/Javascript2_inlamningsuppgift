<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <router-link to="/"><a class="navbar-brand" href="#"><i class="fa-solid fa-house"></i></a></router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link to="/"><a class="nav-link" aria-current="page" href="#">Home</a></router-link>
        <router-link to="/products"><a class="nav-link" href="#">Products</a></router-link>

      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'NavbarComponent'
}
</script>

<style >
  .navbar-nav a {
    text-decoration: none;
  }
</style>