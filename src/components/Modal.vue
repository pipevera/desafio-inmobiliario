<template>

<div id="default-modal" tabindex="-1" aria-hidden="true" class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
   <div class="flex justify-center items-center h-full w-full">
      <div class="relative p-4 w-full max-w-2xl max-h-full">
         <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
      
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    {{ bankName }}
                  </h3>
                  <button @click="$emit('close-modal')" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="default-modal">
                     <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                     </svg>
                     <span class="sr-only">Close modal</span>
                  </button>
            </div>
            <div class="w-full flex justify-center items-center">
               <a-table class="w-full" :dataSource="bankDataSource" :columns="columns" />
            </div>
            <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
               <button @click="$emit('close-modal')" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 ">Cerrar</button>
            </div>
         </div>
      </div>
   </div>
</div>

</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
//props para pasar información del padre home al hijo
const props = defineProps(["bankModal"])
//computed para verificar que la data de la props sea un array, sino lo envuelve en un array
const bankFormater = computed(() => props.bankModal.length ? props.bankModal : [props.bankModal])
//computed que agarra los datos de la computed anterior ya devueltos en array y retorna un nuevo objeto element con sus valores para utilizar en la tabla
const bankDataSource = computed(() => {
   return bankFormater.value.reduce((acc, curr) => {
      const element = {
         key: "",
         tasaDeInteres: curr.tasaDeInteres,
         costoTotal: curr.costoTotal,
         gastosOperacionales: curr.gastosOperacionales,
         maximoPlazo: curr.maximoPlazo
      }
      return acc = [...acc, element]
   }, [])
})
//computed donde se declara una variable bank y se evalua si la props.bankModal es mayor que 0, si es mayor a 0 se utiliza find para buscar en cada elemento propiedad llamada banco
//y que contenga la propiedad imagen, sino se asigna props.bankModal directamente, retorna el nombre del banco
const bankName = computed(() => {
   let bank
   if(props.bankModal.length) {
    bank = props.bankModal.find(element => Object.keys(element.banco).includes("imagen"))
   } else {
      bank = props.bankModal
   }
   return bank.banco.nombre
})
//constante columns para ocupar en la tabla
const columns = ref([
          {
            title: 'Tasa de interés',
            dataIndex: 'tasaDeInteres',
            key: 'tasaDeInteres',
          },
          {
            title: 'Costo Total',
            dataIndex: 'costoTotal',
            key: 'costoTotal',
          },
          {
            title: 'Gastos operacionales',
            dataIndex: 'gastosOperacionales',
            key: 'gastosOperacionales',
          },
          {
            title: 'Maximo plazo',
            dataIndex: 'maximoPlazo',
            key: 'maximoPlazo',
          }
          
        ])      

/* onMounted(() => {
   console.log("DATOS DE LA PROP", (bankFormater.value))
}) */
defineEmits(["close-modal"]);
</script>