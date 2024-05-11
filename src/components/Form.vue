<template>
   <div>
      <form @submit.prevent="calculateDividend">
         <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
               <label class="block mb-2 text-sm font-medium text-white ">Valor de la Propiedad</label>
               <input v-model="propertyValue" type="number" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Valor en UF" required />
            </div>
            <div>
               <label class="block mb-2 text-sm font-medium text-white ">Pie</label>
               <input v-model="downPayment" type="number" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="UF" required />
            </div>
            <div>
               <label class="block mb-2 text-sm font-medium text-white">Tasa de interés (% Anual)</label>
               <input v-model="annualInterestRate" type="number" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
            </div>  
            <div>
               <label class="block mb-2 text-sm font-medium text-white ">Plazo de pago (Años)</label>
               <select v-model="selectedAge" class="bg-gray-50 border cursor-pointer border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                  <option v-for="(item, index) in years" :key="index" :value="item.value">
                     {{ item.age }}
                  </option>
               </select>
            </div>
         </div>
         <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Calcular</button>
      </form>
   </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const years = [
   {age: "5 años", value: 5},
   {age: "10 años", value: 10},
   {age: "15 años", value: 15},
   {age: "20 años", value: 20},
   {age: "25 años", value: 25},
   {age: "30 años", value: 30}
]
//variables de v-model para los inputs
const propertyValue = ref(null)
const downPayment = ref(null)
const annualInterestRate = ref(5)
const selectedAge = ref(null)
const dividend = ref(null)

//computed para calcular la renta minima
const minimumIncome = computed(() => dividend.value * 4)
//emits para crear eventos
const emit = defineEmits(['update:dividend', 'update:minimumIncome'])

//función para calcular el sueldo, contiene variables ref y variables nuevas para hacer los calculos del sueldo
const calculateDividend = () => {
   const UFValue = 37312.63
   const UFPropertyValue = parseFloat(propertyValue.value)
   const UFdown = parseFloat(downPayment.value)
   const paymentDeadline = parseInt(selectedAge.value)
   const interestRate = parseFloat(annualInterestRate.value)
   const decimalRate = interestRate / 100
   const propertyValues = UFPropertyValue * UFValue
   const downPayments = UFdown * UFValue
   const creditAmount = propertyValues - downPayments
   const numPayments = paymentDeadline * 12
   const monthlyInterest = decimalRate / 12
   const monthlyDividend = creditAmount * (monthlyInterest / (1 - Math.pow(1 + monthlyInterest, -numPayments)))
   const formattedMonthlyDividend = Math.round(monthlyDividend)

   dividend.value = formattedMonthlyDividend;
   //emite los eventos de dividento y renta minima en el home
   emit('update:dividend', dividend.value)
   emit('update:minimumIncome', minimumIncome.value)
}
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>