<template>
  <div class="NotFound">
    <Navbar></Navbar>
    <div class="titulo  pa-5 my-5">
    <h1>Ruta no válida</h1>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";


export default {
  name: "Home",
  components: {
    Navbar,
  },

};
</script>

<style lang="scss" scoped>

.NotFound {
  text-align: center;
}
</style>
