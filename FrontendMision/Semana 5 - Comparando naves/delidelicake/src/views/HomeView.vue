<script setup></script>

<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <img src="@/assets/images/img0.png" class="principalImage" />
        </div>
        <div class="col-sm-12 col-md-6">
          <div class="row">
            <div class="col-12">
              <h3>Misión FrontEnd</h3>
              <p>
                Bienvenidos a mi ejercicio de FrontEnd de la semana 5 que hice
                para Launch X. Utiliza el menú de la barra superior para ver las
                páginas que hice, el funcionamiento es sólo simulado.
                <br />
                Esta vez esto fue realizado en Vue.js y los estilos fueron
                hechos a mano, notarás algunas diferencias respecto a la
                anterior, personalmente creo que me quedo mejor.
              </p>
            </div>
          </div>
          <div class="row">
            <div class="card center">
              <h2>
                Descubre más de mi trabajo en mi
                <a href="https://github.com/OscarGPDev">GitHub</a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style>
.principalImage {
  width: 100%;
  margin: 0 auto;
}
.card {
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  flex: 1 1 auto;
  padding: 1rem 1rem;
  margin: auto;
}
h3,
h2 {
  color: black;
  margin-top: 10px;
  margin-bottom: 10px;
}
p {
  margin: auto;
}
.center {
  text-align: center;
}
</style>