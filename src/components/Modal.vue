<template>

<div id="default-modal" tabindex="-1" aria-hidden="true" class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
   <div class="flex justify-center items-center h-full w-full">
      <div class="relative p-4 w-full max-w-2xl max-h-full">
         <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
      
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                     Terms of Service
                  </h3>
                  <button @click="$emit('close-modal')" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="default-modal">
                     <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                     </svg>
                     <span class="sr-only">Close modal</span>
                  </button>
            </div>
            <div class="p-4 md:p-5 space-y-4">
               <div class="relative overflow-x-auto">
                     <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                           <tr>
                                 <th scope="col" class="px-6 py-3">
                                    Product name
                                 </th>
                                 <th scope="col" class="px-6 py-3">
                                    Color
                                 </th>
                                 <th scope="col" class="px-6 py-3">
                                    Category
                                 </th>
                                 <th scope="col" class="px-6 py-3">
                                    Price
                                 </th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                 <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Apple MacBook Pro 17"
                                 </th>
                                 <td class="px-6 py-4">
                                    Silver
                                 </td>
                                 <td class="px-6 py-4">
                                    Laptop
                                 </td>
                                 <td class="px-6 py-4">
                                    $2999
                                 </td>
                           </tr>
                           <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                 <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Microsoft Surface Pro
                                 </th>
                                 <td class="px-6 py-4">
                                    White
                                 </td>
                                 <td class="px-6 py-4">
                                    Laptop PC
                                 </td>
                                 <td class="px-6 py-4">
                                    $1999
                                 </td>
                           </tr>
                           <tr class="bg-white dark:bg-gray-800">
                                 <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Magic Mouse 2
                                 </th>
                                 <td class="px-6 py-4">
                                    Black
                                 </td>
                                 <td class="px-6 py-4">
                                    Accessories
                                 </td>
                                 <td class="px-6 py-4">
                                    $99
                                 </td>
                           </tr>
                        </tbody>
                     </table>
               </div>
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
defineEmits(["close-modal"]);
</script>