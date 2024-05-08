<template>
  <div class="">
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

const Home = defineAsyncComponent(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import('./views/HomeView.vue'))
    }, 3000)
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