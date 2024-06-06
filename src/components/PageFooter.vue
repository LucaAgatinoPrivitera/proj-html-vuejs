<script>
import AutocarFooter from './AutocarFooter.vue'
import store from '../data/store.js'

export default {
    components: {
        AutocarFooter
    },

    data() {
        return {
            store
        }
    },

    methods: {
        getImg(path) {
            let risultato = new URL(`../assets/Img/${path}`, import.meta.url);
            return risultato.href;
        },
    }
}
</script>

<template>
    <AutocarFooter/>
</template>

<style scoped>

</style>
