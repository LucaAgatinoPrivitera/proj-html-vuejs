<script>
import Carosello from './components/Carosello.vue'
import SearchCar from './components/SearchCar.vue'
import CardAuto from './components/CardAuto.vue'
import InfoCar from './components/InfoCar.vue'
import Customer from './components/Customer.vue'
import Recent from './components/Recent.vue'

export default{
  components:{
    Carosello,
    SearchCar,
    CardAuto,
    InfoCar,
    Customer,
    Recent
  }
}
</script>

<template>
  <Carosello />
  <SearchCar />

  <CardAuto />
  <InfoCar />

  <Customer />
  <Recent />
</template>

<style scoped>

</style>
