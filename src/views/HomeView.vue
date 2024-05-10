<template>
  <div class="w-full md:h-screen flex flex-col justify-center items-center">
    <div class="md:flex w-full justify-center">
      <div class="w-full text-center md:text-start p-4 md:p-6 md:w-[500px]">
        <h1 class="text-4xl md:text-5xl text-yellow-300 font-bold text-balance">Simula tu crédito con nosotros</h1>
      </div>
      <div class="w-full pb-6 px-6 md:p-4 md:w-[600px]">
        <Form @update:sueldoRequerido="handleSueldoRequerido" @update:rentaMinima="handleRentaMinima" />
        <Result :sueldoRequerido="sueldoRequerido" :rentaMinima="rentaMinima" />
      </div>
    </div>
    <div class="w-full lg:w-[1024px] flex justify-start gap-4 md:flex-wrap md:justify-center md:overflow-hidden overflow-scroll px-6 pb-6 md:px-16 md:p-6 ">
      <Card v-for="(bank, index) in banksList" :bank="bank" />
    </div>
  </div>
</template>

<script setup>
import Form from '@/components/Form.vue'
import Result from '@/components/Result.vue'
import Card from '@/components/Card.vue'
import { ref, onMounted } from 'vue'
import { getBanks } from '@/services/banks.js'

const banksList = ref({})

onMounted(async () => {
  banksList.value = await getBanks()
})

const sueldoRequerido = ref(null)
const rentaMinima = ref(null)

const handleSueldoRequerido = (value) => {
    sueldoRequerido.value = Number(value)
}

const handleRentaMinima = (value) => {
    rentaMinima.value = Number(value)
}
</script>

<style scoped>

</style>