
const BASE_URL = "https://api.hipotecarios.info"

export const getBanks = async () => {
   const endpoint = `/creditos/?valorPropiedad=2000&Pie=30&Tiempo=10&Dfl2=false`
   const response = await fetch(BASE_URL + endpoint)
   const credits = response.json()
   console.log("-------------- FETCH",BASE_URL + endpoint, credits)
   return credits
}




   