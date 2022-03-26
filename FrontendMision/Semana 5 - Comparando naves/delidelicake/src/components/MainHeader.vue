<script setup>
import { RouterLink } from "vue-router";
// defineProps({
//   msg: {
//     type: String,
//     required: true,
//   },
// });
</script>
<script>
export default {
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>

<template>
  <header class="page-header">
    <div class="logo">
      <RouterLink to="/"
        ><img
          alt="Delidelicake logo"
          src="@/assets/simple_logo.png"
          width="50"
          height="50"
      /></RouterLink>
    </div>
    <section class="header-nav-section">
      <RouterLink
        to="/Client"
        v-bind:class="currentRouteName == 'client' ? 'selected' : 'else_class'"
        class="nav-link"
        >Hacer pedido</RouterLink
      >
      <RouterLink
        class="nav-link"
        to="/Orders"
        v-bind:class="currentRouteName == 'orders' ? 'selected' : 'else_class'"
        >Pedidos</RouterLink
      >
      <RouterLink
        class="nav-link"
        to="/Stock"
        v-bind:class="currentRouteName == 'stock' ? 'selected' : 'else_class'"
        >Inventario</RouterLink
      >
      <RouterLink
        class="nav-link"
        to="/About"
        v-bind:class="currentRouteName == 'about' ? 'selected' : 'else_class'"
        >Acerca de</RouterLink
      >
    </section>
  </header>
</template>

<style scoped>
@media (hover: hover) {
  .nav-link:hover {
    background-color: #f3ffc6;
  }
}
.page-header {
  background-color: #fff;
  display: inline-flex;
  width: 100%;
  margin: auto;
  padding-left: 0;
  border-bottom: 1px solid #dee2e6 !important;
  height: 80px;
  margin-bottom: 50px;

}
.logo {
  /* margin: 30px 50px; */
  margin: auto 0;
  color: #3051d4;
}
.header-nav-section {
  display: inline-flex;
  align-items: center;
  margin-left: auto;
  margin-right: 0;
}
a {
  text-decoration: none;
}
.nav-link {
  margin: 1vh auto;
  color: #68768f;
  padding: 5px 10px;
  border-radius: 5px;
}
.flowerFont {
  font-family: "Indie Flower", cursive;
}

.selected {
  background-color: #f3ffc6;
}

</style>
