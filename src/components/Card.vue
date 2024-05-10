<template>
   <div class="flex justify-center bg-body ">
      <div class="border rounded w-40 h-44 p-4 text-center ">
         <img v-if="bankData.logo" :src="bankData.logo" alt="">
         <h1 v-else class="text-white">{{ bankData.name }}</h1>
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