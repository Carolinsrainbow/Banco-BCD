<template>
  <div class="home">
    <Navbar></Navbar>

    <div class="container pa-5 my-5 text-center">
      <div class="row">
        <div class="col-3">
          <b-list-group>
            <b-list-group-item>Cuenta Corriente</b-list-group-item>
            <b-list-group-item>Tarjeta de Crédito</b-list-group-item>
            <b-list-group-item>Línea de Crédito</b-list-group-item>
            <b-list-group-item><router-link to="transferencias">Transferencias</router-link></b-list-group-item>
            <b-list-group-item>Pago de Servicios</b-list-group-item>
          </b-list-group>
        </div>
        <div class="col-9">
          <div id="punto">
            <b-breadcrumb :items="items"></b-breadcrumb>
          </div>
          <!-- Incorporación del Jumbotron -->
          <div>
            <b-jumbotron lead="Vitrina"></b-jumbotron>
          </div>
          <div id="texto">
            <h4>Bienvenido {{dashboard.usuario.nombre}} </h4>
            <h3>{{dashboard.usuario.mensaje}}</h3>
          </div>

          <!-- Incorporación Caja Resumen -->

          <div class="container pa-5 my-5 text-center">
            <div class="row">
              <div clas="col-6">
                <h3>{{ dashboard.cupos[0].nombre }}</h3>
                <table class="table">
                  <thead>
                    <tr>
                      <th>{{ dashboard.cupos[0].utilizado }}</th>
                      <th>{{ dashboard.cupos[0].disponible }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Utilizado</th>
                      <td>Total</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div clas="col-6">
                <h3>{{ dashboard.cupos[1].nombre }}</h3>
                <table class="table">
                  <thead>
                    <tr>
                      <th>{{ dashboard.cupos[1].utilizado }}</th>
                      <th>{{ dashboard.cupos[1].disponible }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Utilizado</th>
                      <td>Total</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "Home",
  components: {
    Navbar,
  },
  data() {
    return {
      items: [
        {
          text: "Home",
          href: "/",
        },
      ],
    };
  },
  computed: {
    ...mapState(["dashboard"]),
  },
  methods: {
    ...mapActions(["getDashboard"]),
  },
  mounted() {
    console.log("mounted")
    this.getDashboard();
  },
};
</script>

<style lang="scss" scoped>
.punto {
  color: transparent;
}
#texto {
  text-align: left;
}
</style>
