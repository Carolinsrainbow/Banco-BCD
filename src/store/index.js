import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dashboard: {
      cupos: [],
      usuario: {}
    },
    bancos: {
      bancos: []
    },
    cartola_transf: {
      transferencias: []
    },
    env_transf_resp: null,
  },
  mutations: {
    GET_DASHBOARD(state, data) {
      state.dashboard = data
    },
    GET_BANCOS(state, bancos) {
      state.bancos = bancos
    },
    GET_CARTOLAS(state, data) {
      state.cartola_transf = data.transferencias
    }
  },
  actions: {
    getDashboard({
      commit
    }) {
      console.log("dashboard")
      axios.get("http://localhost:8081/dashboard.json").then((res) => {
        console.log(res.data)
        commit("GET_DASHBOARD", res.data)
      })
    },
    getBancos({
      commit
    }) {
      axios.get("http://localhost:8081/bancos.json").then((res) => {
        console.log(res.data)
        commit("GET_BANCOS", res.data)
      })
    },
    getCartolas({
      commit
    }) {
      axios.get("http://localhost:8081/cartola_transf.json").then((res) => {
        console.log(res.data)
        commit("GET_CARTOLAS", res.data)
      })
    },
    enviarTransferencia({
      commit
    }) {
      axios.post("http://157.230.190.251/api/v1/bdc/secure/12345678-9/transferencias", {
        headers: {
          "Autorization": "Bearer QH233JH43HHJ34JHJ3H42OI8F8WE8WEUWE8R"
        }
      }).then((res) => {
        console.log(res.data)

      })
    },
    transferenciasFiltradas({
      commit
    }, payload) {
      axios.get(`http://157.230.190.251/api/v1/bdc/secure/12345678-9/transferencias?fechaDesde="${payload.desde}"&FechaHasta="${payload.hasta}`).then((res) => console.log(res.data))
    }
  },
  modules: {}
})