<template>
  <div class="bg-body w-full h-screen">
    <Suspense>
      <template #default>
        <Home />
      </template>
      <template #fallback>
        <Loader />
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import Loader from '@/components/Loader.vue'
import { defineAsyncComponent } from 'vue';

//funcion para ocupar el loader con un SetTimeOut, primero carga el fallback luego el default
const Home = defineAsyncComponent(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import('./views/HomeView.vue'))
    }, 2500)
  })
})
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
}
</style>