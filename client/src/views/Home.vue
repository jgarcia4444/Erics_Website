<template>
  <div class="container-fluid text-center">
    <div class="container-fluid" id="mainSection">
      <div class="jumbotron jumbtron-fluid">
        <h2>
          Looking for a home?
        </h2>
        <p class="lead">
          Don't know where to start?
        </p>
        <button class="btn btn-danger" type="button">Find a home</button>
      </div>
    </div>
    
    
    <div class="container-fluid" id="findAHomeSection">
      <form>
        <h2>
          Find a Home
        </h2>
        <div class="form-group row">
          <div class="col-sm-6">
            <label for="firstName">First Name</label>
            <input class="form-control" type="text" id="firstName" />
          </div>
          <div class="col-sm-6">
            <label for="lastName">Last Name</label>
            <input class="form-control" id="lastName" type="text" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style>

  body {
    background-color: #000;
}

  .jumbotron {
    margin: 1rem auto 1rem auto; 
    background-color: rgba(260, 260, 260, 0.5);
    color: #fff;
  }

  #mainSection {
    height: 100vh;
  }


</style>


<script>
export default {
  name: 'home',
}
</script>
