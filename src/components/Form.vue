<template>
   <div>
      <form @submit.prevent="calcularSueldo">
         <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
                  <label class="block mb-2 text-sm font-medium text-white ">Valor de la Propiedad</label>
                  <input v-model="propertyValue" type="number" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Valor en UF" required />
            </div>
            <div>
                  <label class="block mb-2 text-sm font-medium text-white ">Pie</label>
                  <input v-model="downPayment" type="number" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="0" required />
            </div>
            <div>
                  <label class="block mb-2 text-sm font-medium text-white">Tasa de interés (% Anual)</label>
                  <input v-model="interestRate" type="number" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
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
         
         <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Calcular</button>
      </form>
   </div>
</template>

<script setup>
import { ref, computed, defineEmits } from 'vue'
const years = [
   {age: "5 años", value: 5},
   {age: "10 años", value: 10},
   {age: "15 años", value: 15},
   {age: "20 años", value: 20},
   {age: "25 años", value: 25},
   {age: "30 años", value: 30}
]

const propertyValue = ref(null)
const downPayment = ref(null)
const interestRate = ref(5)
const selectedAge = ref(null)
const sueldoRequerido = ref(null)

const rentaMinima = computed(() => sueldoRequerido.value * 4)
const emit = defineEmits(['update:sueldoRequerido', 'update:rentaMinima'])

const calcularSueldo = () => {
    const valorPropiedad = parseFloat(propertyValue.value)
    const pie = parseFloat(downPayment.value)
    const plazo = parseInt(selectedAge.value)

    const tasaInteres = interestRate.value
    const tasaDecimal = tasaInteres / 100
    const montoCredito = valorPropiedad - pie
    const numPagos = plazo * 12
    const interesMensual = tasaDecimal / 12
    const dividendoMensual = montoCredito * (interesMensual / (1 - Math.pow(1 + interesMensual, -numPagos)))
    const sueldo = dividendoMensual * 4

    sueldoRequerido.value = sueldo.toFixed(2)
    emit('update:sueldoRequerido', sueldoRequerido.value)
    emit('update:rentaMinima', rentaMinima.value)
}


</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>