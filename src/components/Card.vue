<template>
   <div class=" bg-white rounded">
      <div class="border flex justify-center items-center rounded w-32 h-30 md:w-36 md:h-34 p-2 text-center ">
         <img v-if="bankData.logo" :src="bankData.logo" alt="" class="rounded">
         <h1 v-else class="">{{ bankData.name }}</h1>
         <Modal  />
      </div>
   </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'
const props = defineProps(["bank"])

const bankData = computed(() => {
   let bank
   if(props.bank.length) {
    bank = props.bank.find(element => Object.keys(element.banco).includes("imagen"))
   } else {
      bank = props.bank
   }
   console.log("---------hola", bank)
   return  {
      name: bank.banco.nombre,
      logo: bank.banco.imagen
   }

})


</script>

<style scoped>

</style>