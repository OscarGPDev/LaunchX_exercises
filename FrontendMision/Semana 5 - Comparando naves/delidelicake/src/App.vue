<script setup>
import { RouterView } from "vue-router";

import MainHeader from "@/components/MainHeader.vue";
</script>

<template>
  <MainHeader />
  <main>
    <RouterView />
  </main>
  <!-- <header>
    

    <div class="wrapper">
      <HelloWorld msg="xD" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <!-- <RouterView /> -->
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  font-weight: normal;
}
/* @media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
} */

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }
   /* #app {
     grid-template-columns: 1fr 1fr; 
    margin: 0 2rem; 
  } */
  
}
main{
    box-sizing: border-box;
  }
</style>
