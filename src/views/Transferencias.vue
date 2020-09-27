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
            <b-list-group-item>Transferencias</b-list-group-item>
            <b-list-group-item>Pago de Servicios</b-list-group-item>
          </b-list-group>
        </div>
        <div class="col-9">
          <!-- Incorporación de tabs -->
          <b-tabs content-class="mt-3">
            <b-tab title="Nueva Transferencia" active>
              <!-- Incorporación Breadcrumb -->
              <b-breadcrumb :items="itemsNueva"></b-breadcrumb>

              <!-- Sección de transferencia -->
              <h1>Nueva Transferencia</h1>

              <h4>Cuenta de Origen</h4>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label class="form-check-label" for="inlineRadio1"
                  >Cuenta Corriente</label
                >
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label class="form-check-label" for="inlineRadio2"
                  >Línea de Crédito</label
                >
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label class="form-check-label" for="inlineRadio2"
                  >Tarjeta de Crédito</label
                >
              </div>

              <h4>Cuenta de Destino</h4>

              <form>
                <div class="form-group row">
                  <label for="inputEmail3" class="col-sm-2 col-form-label"
                    >Banco</label
                  >
                  <div class="col-sm-10">
                    <select v-model="bancoSeleccionado">
                      <option
                        v-for="(banco, index) in bancos.bancos"
                        :key="index"
                      >
                        {{ banco.nombre }}</option
                      >
                    </select>
                  </div>
                </div>

                <div class="form-group row">
                  <label for="inputEmail3" class="col-sm-2 col-form-label"
                    >N° Cuenta</label
                  >
                  <div class="col-sm-10">
                    <input type="email" class="form-control" id="inputEmail3" />
                  </div>
                </div>

                <div class="form-group row">
                  <label for="inputPassword3" class="col-sm-2 col-form-label"
                    >RUT</label
                  >
                  <div class="col-sm-10">
                    <input class="form-control" />
                  </div>
                </div>

                <div class="form-group row">
                  <label for="inputPassword3" class="col-sm-2 col-form-label"
                    >Nombre</label
                  >
                  <div class="col-sm-10">
                    <input class="form-control" />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="inputPassword3" class="col-sm-2 col-form-label"
                    >Monto</label
                  >
                  <div class="col-sm-10">
                    <input class="form-control" />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="inputPassword3" class="col-sm-2 col-form-label"
                    >Email</label
                  >
                  <div class="col-sm-10">
                    <input class="form-control" />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="inputPassword3" class="col-sm-2 col-form-label"
                    >Mensaje</label
                  >
                  <div class="col-sm-10">
                    <input class="form-control" />
                  </div>
                </div>
              </form>
              <button type="button" class="btn btn-primary" @click="transferir">
                Transferir
              </button>
            </b-tab>

            <!-- Segunda Tabs -->

            <b-tab title="Cartola de Transferencia">
              <b-breadcrumb :items="itemsCartola"></b-breadcrumb>
              <!-- Patrones de busqueda -->
              <label for="desde">Fecha desde </label>
              <input type="date" name="desde" v-model="desde" />

              <label for="hasta">Fecha</label>
              <input type="date" name="hasta" v-model="hasta" />
              <b-button variant="primary" @click="filtrar">Buscar</b-button>

              <!-- Incorporación de la tabla -->
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">N° Trx</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Destinatario</th>
                    <th scope="col">Monto</th>
                    <th scope="col">Estado</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(transferencia, index) in cartola_transf"
                    :key="index"
                  >
                    <td>{{ transferencia.num_trx }}</td>
                    <td>
                      {{ new Date(transferencia.fecha).getDate() }}/
                      {{ new Date(transferencia.fecha).getMonth() }}/
                      {{ new Date(transferencia.fecha).getFullYear() }}
                    </td>
                    <td>{{ transferencia.destinatario }}</td>
                    <td>{{ transferencia.monto }}</td>
                    <td>{{ transferencia.estado }}</td>
                    <td></td>
                    <td></td>

                    <td>
                      <button type="button" class="btn btn-outline-info">
                        Ver Detalle
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <!-- Incorporación de pagination -->
              <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                </ul>
              </nav>
            </b-tab>
          </b-tabs>
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
      itemsNueva: [
        {
          text: "Home",
          href: "/",
        },
        {
          text: "Transferencias",
          href: "/transferencias",
        },
        {
          text: "Nueva",
          active: true,
        },
      ],
      itemsCartola: [
        {
          text: "Home",
          href: "/",
        },
        {
          text: "Transferencias",
          href: "/transferencias",
        },
        {
          text: "Cartola",
          active: true,
        },
      ],
      selected: "",
      bancoSeleccionado: "",
      desde:null,
      hasta:null
    };
  },
  computed: {
    ...mapState(["bancos", "cartola_transf"]),
  },
  methods: {
    ...mapActions(["getBancos", "getCartolas", "enviarTransferencia","trasferenciasFiltradas"]),
    transferir() {
      this.enviarTransferencia();
    },
    filtrar() {
      this.trasferenciasFiltradas({
        desde: this.desde,
        hasta: this.hasta
      })
    },
  },
  mounted() {
    this.getBancos();
    this.getCartolas();
  },
};
</script>

<style lang="scss" scoped>
h1,
h4,
h3 {
  text-align: left;
}
</style>
