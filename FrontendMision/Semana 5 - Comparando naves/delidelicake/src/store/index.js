import { createStore } from "vuex";
import Swal from "sweetalert2/dist/sweetalert2.js";
export default createStore({
  state: {
    orders: [],
  },
  getters: {
    getOrders(state) {
      return state.orders;
    },
  },
  mutations: {
    saveOrder(state, order) {
      state.orders.push({ ...order });
      Swal.fire({
        title: `¡Éxito al registrar el pedido ${order.name}!`,
        text: "En cuanto sea revisado, se te contactará para informarte el tiempo apróximado de entrega y costo final.",
        icon: "success",
        confirmButtonText: "Aceptar.",
      });
    },
  },
  actions: {
    /*async subirContador() {
      const res = await fetch(
        "https://www.random.org/integers/?num=1&min=1&max=8&col=1&base=10&format=plain&rnd=new"
      );
      const results = await res.json();
      console.log(results);
      this.commit("subirContador", results);
    },
    async bajarContador() {
      const res = await fetch(
        "https://www.random.org/integers/?num=1&min=1&max=8&col=1&base=10&format=plain&rnd=new"
      );
      const results = await res.json();
      console.log(results);
      this.commit("bajarContador", results);
    },
    colorChange({ commit }, color) {
      commit("colorChange", color);
    },*/
  },
  modules: {},
});
