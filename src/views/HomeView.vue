<template>
  <div class=" bg-body w-full h-screen">
    <div class="flex flex-col md:flex-row justify-center items-center h-full">
      <div class="md:flex w-full justify-center">
         <div class="w-full text-center md:text-start p-4 md:p-6 md:w-[500px]">
          <h1 class="text-4xl md:text-5xl text-yellow-300 font-bold text-balance">Simula tu crédito con nosotros</h1>
        </div>
        <div class="w-full p-6 md:p-4 md:w-[600px]">
          <Form />
        </div>
      </div>
    </div>
    
  </div>
</template>

<script setup>
import Form from '@/components/Form.vue'
</script>

<style scoped>

</style>