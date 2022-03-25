<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import Header from "@/components/Header.vue";
</script>

<template>
<Header/>
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



/* @media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
} */


@media (min-width: 1024px) {
  /* body {
    display: flex;
    place-items: center;
  } */

  /* #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  } */

}
</style>
