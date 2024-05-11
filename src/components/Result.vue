<template>
   <div v-if="dividend || minimumIncome" class="mt-6 p-2 md:p-4 border rounded-sm space-y-3">
      <div>
         <p class="text-yellow-200 text-lg text-center">Resultado simulación</p>
      </div>
      <div class="md:flex md:justify-center text-center w-full md:divide-x">
         <p class="text-white w-full ">Dividendo: <span>{{ dividend }}</span></p>
         <p class="text-white w-full  ps-4">Renta mínima: <span>{{ minimumIncome }}</span></p>
      </div>
   </div>
</template>

<script setup>
//props del dividendo y renta minima, trae la data del home
const props = defineProps({
   dividend: Number,
   minimumIncome: Number
})
</script>