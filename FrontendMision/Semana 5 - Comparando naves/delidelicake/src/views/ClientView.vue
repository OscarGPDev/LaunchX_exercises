<script setup>
import FormControl from '../components/FormControl.vue';
import TextAreaControl from '../components/TextAreaControl.vue';
</script>
<template>
  <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-6">
                    <img src="@/assets/images/img1.png" class="img-fluid formImage">
                </div>
                <div class="col-sm-12 col-md-6">
                    <h3>¡Crea tu pastel ideal!</h3>
                    <p>
                        Llena los datos del formulario que se meustra a continuación, asegurate de darnos una
                        descripción de lo que quieres, nosotros nos encargamos de hacerla realidad, considera que
                        los precios que se muestran son de los ingredientes pero el precio peude variar de acuerdo
                        a tu descripción, tras registrar tu pedido, alguien de nuestro equipo se comunicará contigo
                        para confirmar tu pedido.
                    </p>
                </div>
            </div>
        </div>
        <hr />
        <form>
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-6 col-lg-4">
                        <FormControl id="txtName" placeholder="Escribe tu nombre aqui" type="text" label="Nombre"/>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4">
                        <FormControl id="txtPhoneNumber" placeholder="123-456-7890" type="tel" label="Teléfono"/>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4">
                        <FormControl id="txtEmail" placeholder="name@example.com" type="email" label="Correo electrónico"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <TextAreaControl id="txtDescription" rows="3" label="Descripción general del pastel"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="mb-3">
                            <label for="txtFlavors" class="form-label">Sabores de pastel</label>
                            <input class="form-control" id="txtFlavors" name='tags-manual-suggestions' placeholder=''
                                value="">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="mb-3">
                            <label for="txtCakeFilling" class="form-label">Rellenos de pastel</label>
                            <input class="form-control" id="txtCakeFilling" name='tags-manual-suggestions'
                                placeholder='' value="">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="mb-3">
                            <label for="txtCakeDecorations" class="form-label">Decoraciones del pastel</label>
                            <input class="form-control" id="txtCakeDecorations" name='tags-manual-suggestions'
                                placeholder='' value="">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#exampleModal">
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
</style>
