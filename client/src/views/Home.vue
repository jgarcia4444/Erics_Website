<template>
  <div class="container-fluid text-center">
    <div class="container-fluid" id="mainSection">
      <div class="jumbotron jumbtron-fluid">
        <h2>
          Eric Kramer Reality
        </h2>
        <p class="lead">
          Helping poeple find homes in the coachella valley.
        </p>
        <button class="btn btn-danger" type="button" href="/findAHome">
          <router-link class="nav-link" to="/findAHome">
            Find a home
          </router-link>
        </button>
      </div>
      <div class="container-fluid">
        <div id="propertyCarousel" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item">
              <img class="d-block w-100" src="#" alt="First slide"/>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="#" alt="Second slide">
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="#" alt="Third slide">
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
    
  </div>
</template>

<style>

body {
  background-color: #000;
  color: #fff;
}

.jumbotron {
  background-color: rgba(260, 260, 260, 0.0);
}

#mainSection {
  height: 100vh;
}

#propertyCarousel {
  margin-top: 1rem;
}



</style>


<script>
export default {
  name: 'home',
}
</script>
