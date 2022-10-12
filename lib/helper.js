const BASE_URL = "http://localhost:3000/"

//todos los usuarios
export const getUsers = async () =>{
   const response = await fetch(`${BASE_URL}api/users`)
   const json = await response.json()

   return json;
}


// un solo ususario
export const getUser = async(userId) =>{
   const response = await fecth(`${BASE_URL}api/users/${userId}`);
   const json = await response.json()

   if(json) return json;
   return {}
}


//agrega un nuevo usuario
export async  function addUser(formData){
   try {
      const Options = {
         method:'POST',
         headers:{'Content-Type':"application/json"},
         body:JSON.stringify(formData)
      }
      const response = await fetch(`${BASE_URL}api/users`,Options)
      const json = await response.json()

         return json

   } catch (error) {
      return error;
   }
}

//modifica un nuevo ususario
export async function updateUser(userId, formData){
      const Options = {
         method:'PUT',
         headers:{'Content-Type':"application/json"},
         body:JSON.stringify(formData)
      }
    const response = await fetch(`${BASE_URL}api/users/${userId}`,Options)
    const json = await response.json()
    return json;
}

//elimina un nuevo usuario
export async function deleteUser(userId){
   const Options = {
      method:'DELETE',
      headers:{'Content-Type':"application/json"},
      body:JSON.stringify(formData)
   }
 const response = await fetch(`${BASE_URL}api/users/${userId}`,Options)
 const json = await response.json()
 return json;
}