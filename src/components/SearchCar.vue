<script>
import store from '../data/store.js'
export default {
  name: "SearchCar",
  data() {
    return {
      store,
    }
  },
  methods: {
  }
}
</script>

<template>
  <!-- Ricerca Auto -->
  <div class="w-75 m-auto d-flex mt-5 mb-3">
    <div class="widthInput">
      <input class="text-center p-3 border" type="text" placeholder="Keywords">
    </div>

    <div class="widthInput">
      <input class="text-center p-3 border" type="text" placeholder="Location">
    </div>

    <div class="widthInput">
      <select class="form-select p-3" aria-label="Default select example">
        <option selected class="text-center d-flex">All categories</option>
        <option class="d-flex" v-for="category in store.SearchCar.AllCategories" value="i">{{ category }}
        </option>
      </select>
    </div>

    <div class="widthInput">
      <select class="form-select p-3" aria-label="Default select example">
        <option selected class="text-center">Brand</option>
        <option class="d-flex" v-for="brand in store.SearchCar.Brand" value="i">{{ brand }}</option>
      </select>
    </div>

    <div class="widthInput">
      <select class="form-select p-3" aria-label="Default select example">
        <option selected class="text-center">Fuel Type</option>
        <option class="d-flex" v-for="fuel in store.SearchCar.FuelType" value="i">{{ fuel }}</option>
      </select>
    </div>

    <div class="widthInput">
      <select class="form-select p-3" aria-label="Default select example">
        <option selected class="text-center">Transmission</option>
        <option class="d-flex" v-for="transmission in store.SearchCar.Transmission" value="i">{{ transmission }}
        </option>
      </select>
    </div>

    <div class="widthInput">
      <select class="form-select p-3" aria-label="Default select example">
        <option selected class="text-center">Status</option>
        <option class="custom-option" v-for="status in store.SearchCar.Status" value="i">{{ status }}</option>
      </select>
    </div>

    <div class="widthInput">
      <button type="button" class="btn btn-dark p-3">Search</button>
    </div>

  </div>

  <!-- Modellini in basso -->
  <div class="w-75 m-auto d-flex ombraModels">

    <div class="model bordoModel" v-for="prova in store.Models">
      <img class="w-75 d-block m-auto cursorPointer" :src="prova.Immagine" alt="">
      <h3 class="cursorPointer">{{ prova.Titolo }}</h3>
      <p>{{ prova.Sottotitolo }}</p>
    </div>

  </div>



</template>

<style scoped>

::placeholder {
  text-align: center;
}

.widthInput {
  width: 12.5%;
  margin-right: 1rem;
}

.widthInput * {
  width: 100%;
}

.cursorPointer {
  cursor: pointer;
}

.custom-option {
  display: inline-block !important;
  width: 20% !important;
  /* Adjust the width as needed */
  margin: 1% !important;
  /* Adjust the margin as needed */
}

.model {
  width: 16.66%;
}

.model * {
  text-align: center;
}

.ombraModels {
  box-shadow: 0 .3rem 1rem rgba(0, 0, 0, 0.212) !important;
}

.bordoModel {
  /* border: 1px solid rgba(158, 157, 157, 0.014); */
  box-shadow: 0 0rem 0.1rem rgba(0, 0, 0, 0.329) !important;
}
</style>
