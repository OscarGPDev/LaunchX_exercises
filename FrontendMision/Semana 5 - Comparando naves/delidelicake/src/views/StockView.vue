<script setup>
import TableControl from "../components/TableControl.vue";
</script>
<script>
const actualDate = new Date();
const limitDate = new Date();
limitDate.setDate(limitDate.getDate() + 20);
const randomDate = (start, end) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};
export default {
  data() {
    return {
      headers: [
        {
          name: "Ingrediente",
          dataSource: "value",
          orderByDefault: true,
          ascending: true,
        },
        { name: "Tipo", dataSource: "type" },
        { name: "Cantidad", dataSource: "stock" },
        {
          name: "Próxima entrega",
          dataSource: "deliveryDate",
          drawFunction: (element) => element.deliveryDate?.toLocaleString(),
        },
      ],
      data: [
        {
          value: "Chocolate",
          stock: "100",
          type: "Sabor",
          deliveryDate: randomDate(actualDate, limitDate),
        },
        {
          value: "Fresa",
          stock: "90",
          type: "Sabor",
          deliveryDate: randomDate(actualDate, limitDate),
        },
        {
          value: "Limón",
          stock: "110",
          type: "Sabor",
          deliveryDate: randomDate(actualDate, limitDate),
        },
        {
          value: "Vainilla",
          stock: "95",
          type: "Sabor",
          deliveryDate: randomDate(actualDate, limitDate),
        },
        {
          value: "Caramelo",
          stock: "100",
          type: "Decoración",
          deliveryDate: randomDate(actualDate, limitDate),
        },
        {
          value: "Frutas",
          stock: "90",
          type: "Decoración",
          deliveryDate: randomDate(actualDate, limitDate),
        },
        {
          value: "Fondant",
          stock: "110",
          type: "Decoración",
          deliveryDate: randomDate(actualDate, limitDate),
        },
        {
          value: "Velas clásicas",
          stock: "95",
          type: "Decoración",
          deliveryDate: randomDate(actualDate, limitDate),
        },
        {
          value: "Velas con números",
          stock: "95",
          type: "Decoración",
          deliveryDate: randomDate(actualDate, limitDate),
        },
        {
          value: "Figura de boda$",
          stock: "95",
          type: "Decoración",
          deliveryDate: randomDate(actualDate, limitDate),
        },
        {
          value: "Crema para batir",
          stock: "95",
          type: "Relleno",
          deliveryDate: randomDate(actualDate, limitDate),
        },
        {
          value: "Mermelada de fresa",
          stock: "95",
          type: "Relleno",
          deliveryDate: randomDate(actualDate, limitDate),
        },
        {
          value: "Mermelada de durazno",
          stock: "95",
          type: "Relleno",
          deliveryDate: randomDate(actualDate, limitDate),
        },
        {
          value: "Mermelada de piña",
          stock: "95",
          type: "Relleno",
          deliveryDate: randomDate(actualDate, limitDate),
        },
        {
          value: "Ganache",
          stock: "95",
          type: "Relleno",
          deliveryDate: randomDate(actualDate, limitDate),
        },
      ],
    };
  },
};
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <img src="@/assets/images/img2.png" class="img-fluid formImage" />
      </div>
      <div class="col-sm-12 col-md-6">
        <h3>Inventario</h3>
        <p>
          A continuación se muestran tu inventario de ingredientes así como la
          fecha en la qu esta programada su entrega.
        </p>
      </div>
    </div>
  </div>
  <div class="container">
    <TableControl :headers="headers" :data="data" />
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
