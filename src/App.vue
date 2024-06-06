<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';




export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },

  data() {
    return {


    }
  },
  methods: {
    handleMouseMove(e) {
      const x = e.clientX;
      const y = e.clientY;

      this.$refs.outline.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`;
      this.$refs.cursor.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`;
    },
    handleMouseLeave() {
      this.$refs.outline.style.display = "none";
      this.$refs.cursor.style.display = "none";
    },
    handleMouseEnter() {
      this.$refs.outline.style.display = "block";
      this.$refs.cursor.style.display = "block";
    },

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
  <div @mousemove="handleMouseMove" @mouseleave="handleMouseLeave" @mouseenter="handleMouseEnter">
    <div ref="cursor" class="cursor"></div>
    <div ref="outline" class="outline"></div>

    <AppHeader />

    <AppMain />

    <AppFooter />


  </div>





</template>

<style scoped>
.outline {
  width: 64px;
  height: 64px;
  border-radius: 100%;
  border: 1px solid grey;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  pointer-events: none;
  transform: translate(-64px, -64px);
}

.cursor {
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background-color: grey;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  pointer-events: none;
  transform: translate(-8px, -8px);
}
</style>