<template>
    <div class="container" id="findAHomeSection">
      <form>
        <h2>
          Find a Home
        </h2>
        <div class="form-group row">
          <div class="col-sm-6">
            <label for="firstName">First Name</label>
            <input v-model="user.firstName" class="form-control" type="text" id="firstName" required/>
          </div>
          <div class="col-sm-6">
            <label for="lastName">Last Name</label>
            <input v-model="user.lastName" class="form-control" id="lastName" type="text" required/>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-6">
            <label  for="email">Email</label>
            <input v-model="user.email" class="form-control" id="email" type="email" required/>
            <small>We'll never share your email.</small>
          </div>
          <div class="col-sm-6">
            <label for="phoneNumber">Phone Number</label>
            <input v-model="user.phoneNumber" class="form-control" id="phoneNumber" type="text" required/>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-6">
            <label for="zipCode">Zip Code</label>
            <input v-model="user.zipCode" class="form-control" type="text" id="zipCode" required />
          </div>
          <div class="col-sm-6">
            <label for="numberOfRooms">Number of Rooms</label>
            <input v-model="user.numberOfRooms" class="form-control" type="text" id="numberOfRooms" required />
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-6">
            <label for="numberOfBathrooms">Number of Bathrooms</label>
            <input v-model="user.numberOfBathrooms" class="form-control" type="text" id="numberOfBathrooms" required/>
          </div>
          <div class="col-sm-6">
            <label for="preferredContact">Preferred way of contact</label>
            <input v-model="user.preferredContact" class="form-control" id="preferredContact" type="text" required />
            <small>(Email / Phone Call / Text)</small>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm">
            <label for="priceRange">Budget: {{ user.priceRange }}</label>
            <input min="100000" max="1000000" step="25000" v-model="user.priceRange" type="range" class="form-control-range" id="priceRange" required/>
          </div>
        </div>
        <button @click="formSubmitted=true;" type="submit" class="btn btn-danger">Submit</button>
      </form>
    </div>
</template>

<script>
export default {
    data: () => ({
      // formSubmitted: false,
      user: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        zipCode: '',
        numberOfRooms: '',
        numberOfBathrooms: '',
        preferredContact: '',
        priceRange: 0,
      },

    }),
    methods: {
      // Once the form is submitted add the form data to the database.
      // addFormData() {

      // },
    },
};
</script>

<style>
#findAHomeSection {
  height: 90vh;
  border: 1px solid red;
}

form {
  padding-top: 1rem;
}

.col-sm-6 {
  margin-top: 2rem;
}

.modal {
  color: white;
}
</style>
