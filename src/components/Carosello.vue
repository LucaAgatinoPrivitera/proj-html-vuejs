<script>
import store from '../data/store.js'
export default {
  name: "Carosello",
  data(){
    return{
      store,
    }
  }
}
</script>

<template>
  <div id="caroselloHeight">
    <div class="w-75">
      <p>{{ store.CaroselloSottotitolo }}</p>
    </div>
  </div>

</template>

<style scoped>
#caroselloHeight {
  height: 60vh;
  background-color: red;
}
</style>
