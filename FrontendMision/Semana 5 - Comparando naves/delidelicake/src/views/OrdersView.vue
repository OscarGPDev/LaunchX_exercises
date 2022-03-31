<script setup>
import TableControl from "../components/TableControl.vue";
</script>
<script>
export default {
  data() {
    return {
      headers: [
        {
          name: "Folio",
          dataSource: "id",
          orderByDefault: true,
          ascending: true,
        },
        { name: "Nombre", dataSource: "name" },
        { name: "Teléfono", dataSource: "phoneNumber" },
        { name: "Correo electrónico", dataSource: "email" },
        { name: "Descripción general", dataSource: "description" },
        {
          name: "Sabores",
          dataSource: "flavors",
          drawFunction: (element) =>
            element.flavors?.map((flavor) => flavor.id)?.join(", "),
        },
        {
          name: "Rellenos",
          dataSource: "decorations",
          drawFunction: (element) =>
            element.decorations?.map((decoration) => decoration.id)?.join(", "),
        },
        {
          name: "Adornos",
          dataSource: "fillings",
          drawFunction: (element) =>
            element.fillings?.map((filling) => filling.id)?.join(", "),
        },
      ],
      data: this.$store.state.orders?.map((element, index) => ({
        id: index + 1,
        ...element,
      })),
    };
  },
};
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <img
          src="@/assets/images/img3.png"
          class="img-fluid"
          alt="Decorative image for orders"
        />
      </div>
      <div class="col-sm-12 col-md-6">
        <h3>Pedidos</h3>
        <p>A continuación se mustran los pedidos de tus clientes.</p>
      </div>
    </div>
  </div>
  <div class="container">
    <TableControl :data="data" :headers="headers" />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
