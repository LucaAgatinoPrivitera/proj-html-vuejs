<script>
import CardAuto from './CardAuto.vue';
import InfoCar from './InfoCar.vue';
import store from '../data/store.js';
import Recent from './Recent.vue';
import Customer from './Customer.vue';
import Carosello from './Carosello.vue';
import SearchCar from './SearchCar.vue';




export default {
    components: {
        Carosello,
        SearchCar,
        CardAuto,
        InfoCar,
        Customer,
        Recent
    },

    data() {
        return {
            store,

        }
    },
    methods: {

    },
    created() {

    },
    mounted() {

    },
    computed: {

    },
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

<style scoped></style>