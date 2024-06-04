<script>
import store from '../data/store.js'
export default {
  name: "Carosello",
  data() {
    return {
      store,
      caroselloImg: 0
    }
  },
  methods: {
    caroselloAvanti() {
      if (this.caroselloImg < this.store.Carosello.length - 1) {
        console.log(this.store.number)

        this.caroselloImg++
        store.number++
      }
      else {

        this.caroselloImg--
        store.number--
      }

    },
    CaroselloIndietro() {
      if (this.caroselloImg > 0) {
        console.log(this.store.number)
        this.caroselloImg--
        store.number--
      }
      else {
        this.caroselloImg++
        store.number++
      }

    }
  }
}
</script>

<template>
  <Transition>
    <!-- <div id="caroselloHeight" class="position-relative prova"
      v-bind:style="{ 'background-image': `url(${store.Carosello[store.number].firstImage})` }"> -->
    <div id="caroselloHeight" class="position-relative">
      <div v-for="(immagine, i) in store.Carosello" :key="i" id="backgroundImage">
        <img class="imgBack" :class="{ 'opacity-100': caroselloImg === i, 'opacity-0': caroselloImg !== i }" alt=""
          :src="immagine.firstImage">
      </div>


      <div id="bottoni" class="d-flex justify-content-between align-items-center px-4 h-100">
        <i class="fa-solid fa-chevron-left previous cursorPointer" @click="CaroselloIndietro"></i>
        <i class="fa-solid fa-chevron-right next cursorPointer" @click="caroselloAvanti"></i>
      </div>

      <div class="w-75 h-100 position-relative d-flex m-auto align-items-center z-3">
        <div class="textWidth">
          <h1 class="fw-bold transition position-absolute widthImg" :class="{ 'opacity-100': caroselloImg === i, 'opacity-0': caroselloImg !== i }" v-for="text, i in store.Carosello">{{ text.CaroselloTitolo }}</h1>
          <h1 class="fw-bold transition opacity-0">{{ store.Carosello[store.number].CaroselloTitolo }}</h1>
          <p class="fw-bold">{{ store.CaroselloSottotitolo }}</p>
          <div class="d-inline-flex align-items-center gap-2 me-5 cursorPointer fw-bold">
            <p class="m-0">Learn More</p>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>


      </div>
    </div>
  </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

#caroselloHeight {
  height: 90vh;
}

.imgBack {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: bottom;
  transition: 0.5s ease-in-out;
}
.widthImg{
  width: 33%;
}

.transition {
  transition: 0.5s ease-in-out;
}

.prova {
  background-position: bottom;
}

#backgroundImage {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.textWidth {
  width: 30%;
}

h1,
p,
i {
  color: var(--site-white) !important;
}

#bottoni {
  position: absolute;
  width: 100%;
  transform: translateY(-50%, -50%);
  z-index: 1;
}

.cursorPointer {
  cursor: pointer;
}
</style>
