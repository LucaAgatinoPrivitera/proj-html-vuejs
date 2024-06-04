<script>
import store from '../data/store.js'
export default {
  name: "Carosello",
  data() {
    return {
      store,
    }
  },
  methods: {
    caroselloAvanti() {
      if (this.store.number < this.store.Carosello.length - 1) {
        console.log(this.store.number)
        this.store.number++
      }
      else {
        this.store.number--
      }

    },
    CaroselloIndietro() {
      if (this.store.number > 0) {
        console.log(this.store.number)
        this.store.number--
      }
      else {
        this.store.number++
      }

    }
  }
}
</script>

<template>
  <Transition>
    <div id="caroselloHeight" class="position-relative prova"
      v-bind:style="{ 'background-image': `url(${store.Carosello[store.number].firstImage})` }">
      <!-- <div id="caroselloHeight" class="position-relative">
    <img id="backgroundImage" :src="store.Carosello[store.number].firstImage" alt=""> -->

      <div id="bottoni" class="d-flex justify-content-between align-items-center px-4 h-100">
        <i class="fa-solid fa-chevron-left previous cursorPointer" @click="CaroselloIndietro"></i>
        <i class="fa-solid fa-chevron-right next cursorPointer" @click="caroselloAvanti"></i>
      </div>

      <div class="w-75 h-100 position-relative d-flex m-auto align-items-center z-3">
        <div class="textWidth">
          <h1 class="fw-bold">{{ store.Carosello[store.number].CaroselloTitolo }}</h1>
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
.textWidth{
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
