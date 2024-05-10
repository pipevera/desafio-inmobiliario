
const BASE_URL = "https://api.hipotecarios.info"

export const getBanks = async () => {
   const endpoint = `/creditos/?valorPropiedad=2000&Pie=30&Tiempo=30&Dfl2=false`
   const response = await fetch(BASE_URL + endpoint)
   const credits = response.json()
   return credits
}




   