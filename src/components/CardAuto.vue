<script>
import store from '../data/store.js';


export default {
    components: {

    },

    data() {
        return {
            store,

        }
    },
    methods: {
        getImg(path) {
            let risultato = new URL(`../assets/Img/${path}`, import.meta.url);
            return risultato.href;
        },

        addFav(index) {
            if (this.store.cardLists[index].heart == false) {
                this.store.cardLists[index].heart = true
            } else {
                this.store.cardLists[index].heart = false
            }

        }
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

    <div class="bg-light w-75 mx-auto py-2">

        <div class="row p-4 align-content-center">

            <div v-for="car, i in store.cardLists" class="b_shad border col-3 p-4 my-2">

                <div><img style="width: 100%;" :src="getImg(car.immagine)" alt=""></div>
                <div class="position-relative">
                    <p class="my-1">{{ car.modello }} <span><i class="fa-solid fa-circle-check"></i></span></p>
                    <p class="mb-1">{{ car.tipo }}</p>
                    <p class="mb-1">
                        <span class="me-2 my_fs"><i class="my_me fa-sharp fa-solid fa-dollar-sign"></i> {{ car.prezzo
                            }}</span>
                        <span class="my_fs"><i class="mx-1 fa-solid fa-car"></i> {{ car.marchio }}</span>
                        <span class="my_fs"><i class="mx-1 fa-solid fa-gas-pump"></i> {{ car.carburante }}</span>
                    </p>
                    <span @click="addFav(i)" class="position-absolute bottom-0 end-0"
                        :class="(car.heart == false) ? 'lGrey' : 'lRed'"><i
                            class="color_hov fa-solid fa-heart"></i></span>

                </div>

            </div>

        </div>

        <div class="row justify-content-center">
            <div class="col-2 p-3 bg-dark text-light text-center">
                Show All Cars <i class="fa-solid fa-arrow-right-long"></i>
            </div>
        </div>

    </div>

</template>


<style scoped>
.lGrey {
    color: lightgray;
}

.lRed {
    color: red;
}

.b_shad:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.color_hov:hover {
    color: rgb(231, 117, 117);
}

.my_fs {
    font-size: 0.7rem;
}
</style>