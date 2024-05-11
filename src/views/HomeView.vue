<template>
  <div class="w-full md:h-screen flex flex-col justify-center items-center">
    <div class="md:flex w-full justify-center">
      <div class="w-full text-center md:text-start p-4 md:p-6 md:w-[500px]">
        <h1 class="text-4xl md:text-5xl text-yellow-300 font-bold text-balance">Simula tu crédito con nosotros</h1>
      </div>
      <div class="w-full pb-6 px-6 md:p-4 md:w-[600px]">
        <Form @update:dividend="handleDividend" @update:minimumIncome="handleMinimunIncome" />
        <Result :dividend="dividend" :minimumIncome="minimumIncome" />
      </div>
    </div>
    <div class="w-full lg:w-[1024px] flex justify-start gap-4 md:flex-wrap md:justify-center md:overflow-hidden overflow-scroll px-6 pb-6 md:px-16 md:p-6 ">
      <Card v-for="(bank, index) in banksList" :bank="bank" @click="openModal(bank)"/>
    </div>
    <div>
      <Modal v-if="modal" @close-modal="closeModal" :bankModal="selectedBank"/>
    </div>
  </div>
  <div :class="{ block: modal, hidden: !modal }" class="bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"></div>
</template>

<script setup>
import Form from '@/components/Form.vue'
import Result from '@/components/Result.vue'
import Card from '@/components/Card.vue'
import Modal from '@/components/Modal.vue'
import { ref, onMounted } from 'vue'
import { getBanks } from '@/services/banks.js'

//variables
const modal = ref(false)
const banksList = ref({})
const dividend = ref(null)
const minimumIncome = ref(null)
const selectedBank = ref()
//abrir modal del banco seleccionado
const openModal = (bank) => {
  selectedBank.value = bank
  //console.log(selectedBank.value)
  modal.value = true
}
//cerrar modal
const closeModal = () => {
  modal.value = !modal.value;
}
//actualiza el valor del dividendo
const handleDividend = (value) => {
    dividend.value = Number(value)
}
//actualiza el valor del renta minima
const handleMinimunIncome = (value) => {
    minimumIncome.value = Number(value)
}
onMounted(async () => {
  banksList.value = await getBanks()
})
</script>