<template>
   <div class=" bg-white flex justify-center items-center rounded cursor-pointer md:hover:-translate-y-2 md:transition-all">
      <div class="rounded w-32 h-30 md:w-36 md:h-34 px-2 text-center ">
         <img v-if="bankData.logo" :src="bankData.logo" alt="" class="rounded">
         <h1 v-else class="">{{ bankData.name }}</h1>
      </div>
   </div>
   
</template>

<script setup>
import { computed, onMounted } from 'vue'

const props = defineProps(["bank"])
/* onMounted(() => {
   console.log("Datos prop card", props.bank)
}) */
const bankData = computed(() => {
   let bank
   if(props.bank.length) {
    bank = props.bank.find(element => Object.keys(element.banco).includes("imagen"))
   } else {
      bank = props.bank
   }
   return  {
      name: bank.banco.nombre,
      logo: bank.banco.imagen
   }
})
</script>

<style scoped>

</style>