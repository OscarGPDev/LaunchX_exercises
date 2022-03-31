<script setup>
import FormControl from "../components/FormControl.vue";
import TextAreaControl from "../components/TextAreaControl.vue";
import TagsControl from "../components/TagsControl.vue";

const flavorsData = [
  { value: "Chocolate - 100$/kg", price: "100", id: "Chocolate" },
  { value: "Fresa - 90$/kg", price: "90", id: "Fresa" },
  { value: "Limón - 110$/kg", price: "110", id: "Limón" },
  { value: "Vainilla - 95$/kg", price: "95", id: "Vainilla" },
];
const cakeDecorationsData = [
  { value: "Caramelo - 100$", price: "100", id: "Caramelo" },
  { value: "Frutas - 90$", price: "90", id: "Frutas" },
  { value: "Fondant - 110$", price: "110", id: "Fondant" },
  { value: "Velas clásicas - 95$", price: "95", id: "Velas clásicas" },
  { value: "Velas con números - 95$", price: "95", id: "Velas con números" },
  { value: "Figura de boda - 95$", price: "95", id: "Figura de boda" },
];
const cakeFillingData = [
  { value: "Crema para batir", id: "Crema para batir" },
  { value: "Mermelada de fresa", id: "Mermelada de fresa" },
  { value: "Mermelada de durazno", id: "Mermelada de durazno" },
  { value: "Mermelada de piña", id: "Mermelada de piña" },
  { value: "Ganache", id: "Ganache" },
];
</script>
<script>
export default {
  data() {
    return {
      name: "",
      phoneNumber: "",
      email: "",
      description: "",
      flavors: [],
      decorations: [],
      fillings: [],
    };
  },
  methods: {
    setOrder() {
      this.$store.commit("saveOrder", {
        name: document.getElementById("txtName").value,
        phoneNumber: document.getElementById("txtPhoneNumber").value,
        email: document.getElementById("txtEmail").value,
        description: document.getElementById("txtDescription").value,
        flavors: JSON.parse(document.getElementById("txtFlavors").value),
        decorations: JSON.parse(
          document.getElementById("txtCakeDecorations").value
        ),
        fillings: JSON.parse(document.getElementById("txtCakeFilling").value),
      });
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <img class="img-fluid formImage" src="@/assets/images/img1.png" />
      </div>
      <div class="col-sm-12 col-md-6">
        <h3>¡Crea tu pastel ideal!</h3>
        <p>
          Llena los datos del formulario que se meustra a continuación,
          asegurate de darnos una descripción de lo que quieres, nosotros nos
          encargamos de hacerla realidad, considera que los precios que se
          muestran son de los ingredientes pero el precio peude variar de
          acuerdo a tu descripción, tras registrar tu pedido, alguien de nuestro
          equipo se comunicará contigo para confirmar tu pedido.
        </p>
      </div>
    </div>
  </div>
  <hr />
  <form>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-4">
          <FormControl
            id="txtName"
            label="Nombre"
            placeholder="Escribe tu nombre aqui"
            type="text"
          />
        </div>
        <div class="col-sm-12 col-md-6 col-lg-4">
          <FormControl
            id="txtPhoneNumber"
            label="Teléfono"
            placeholder="123-456-7890"
            type="tel"
          />
        </div>
        <div class="col-sm-12 col-md-6 col-lg-4">
          <FormControl
            id="txtEmail"
            label="Correo electrónico"
            placeholder="name@example.com"
            type="email"
          />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <TextAreaControl
            id="txtDescription"
            label="Descripción general del pastel"
            :rows="3"
          />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <TagsControl
            id="txtFlavors"
            :tagify-data="flavorsData"
            label="Sabores de pastel"
          />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <TagsControl
            id="txtCakeFilling"
            :tagify-data="cakeFillingData"
            label="Rellenos de pastel"
          />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <TagsControl
            id="txtCakeDecorations"
            :tagify-data="cakeDecorationsData"
            label="Decoraciones del pastel"
          />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <!-- Button trigger modal -->
          <button
            class="btn btn-primary"
            data-bs-target="#exampleModal"
            data-bs-toggle="modal"
            type="button"
            @click="setOrder"
          >
            Confirmar pedido
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
[type="button"]:not(:disabled),
[type="reset"]:not(:disabled),
[type="submit"]:not(:disabled),
button:not(:disabled) {
  cursor: pointer;
}

.btn {
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  border-top-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-left-color: transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.btn-primary {
  color: #fff;
  background-color: #7d00ff;
  border-color: #7d00ff;
  margin-left: auto;
  margin-right: 0;
}
[type="button"],
[type="reset"],
[type="submit"],
button {
  -webkit-appearance: button;
}
button,
select {
  text-transform: none;
}
</style>
