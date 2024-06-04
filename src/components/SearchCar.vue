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

  <div id="caroselloHeight" class="position-relative prova">
      <!-- <div id=" caroselloHeight" class="position-relative">
    <img id="backgroundImage" :src="store.Carosello[store.number].firstImage" alt=""> -->

  </div>
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
