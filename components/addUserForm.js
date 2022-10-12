import {useReducer} from "react"
import { BiPlus } from "react-icons/bi"
import Success from "./success"
import Bug from "./bug"
import {useQueryClient, useMutation} from 'react-query'
import { addUser, getUsers } from "../lib/helper"

const formReducer = (state,event) => {
    return{
        ...state,
        [event.target.name]:event.target.value
    }
}


export default function AddUserForm(){

    const queryClient = useQueryClient()
    const [formData,setFormData] = useReducer(formReducer,{})
    const addMutation = useMutation(addUser,{
        onSuccess : ()=>{
           queryClient.prefetchQuery('users',getUsers)
        }
    })
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(Object.keys(formData).length == 0) return console.log("no hay datos de formulario");
        let {npredial,avaluo,nombrepropiedad,departamento,municipio,tipopropietario,tipodocumento,ndocumento,nombres,apellidos,NIT,razonsocial,direccion,telefono,correo,construcciones,numeropisos,areatotal,tipoconstruccion,direccionconstruccion,terreno,areaterreno,valorcomercial,fuentesagua,tipoterreno} = formData;

        const model ={
            npredial,
            avaluo,
            nombrepropiedad,
            departamento,
            municipio,
            tipopropietario,
            tipodocumento,
            ndocumento,
            nombres,
            apellidos,
            NIT,
            razonsocial,
            direccion,
            telefono,
            correo,
            construcciones,
            numeropisos,
            areatotal,
            tipoconstruccion,
            direccionconstruccion,
            terreno,
            areaterreno,
            valorcomercial,
            fuentesagua,
            tipoterreno
        }
        addMutation.mutate(model)
    }
    
    
    //ALERTS
    //if (Object.keys(formData).length > 0 ) return <Success message={"Se Agregaron Los Datos Con Exito"}></Success>
    
    //if (Object.keys(formData).length > 0 ) return <Bug message={"Error"}></Bug>
    if (addMutation.isLoading) return <div>Loading!</div>
    if (addMutation.isError) return <Bug message={addMutation.error.message}></Bug>
    if (addMutation.isSuccess) return <Success message={"añadido exitosamente"}></Success>
    return(
        <form className="grid lg:grid-cols-5 w-4/6 gap-2 " onSubmit={handleSubmit}>
            <div className="input-type">
                <input type="number" onChange={setFormData} name="npredial" className="border w-full px-5 py-1 focus:outline-none  rounded-md" placeholder="N° predial"/>
            </div>


            <div className="input-type">
                <input type="number" onChange={setFormData} name="avaluo" className="border w-full px-5 py-1 focus:outline-none  rounded-md" placeholder="avaluo"/>
            </div>


            <div className="input-type">
                <input type="text" onChange={setFormData} name="nombrepropiedad" className="border w-full px-5 py-1 focus:outline-none  rounded-md" placeholder="nombrePropiedad"/>
            </div>


            <div className="input-type">
                <input type="text" onChange={setFormData} name="departamento" className="border w-full px-5 py-1 focus:outline-none  rounded-md" placeholder="departamento"/>
            </div>


            <div className="input-type">
                <input type="text" onChange={setFormData} name="municipio" className="border px-5 py-2 focus:outline-none  rounded-md" placeholder="municipio"/>
            </div>


            <div className="flex-gap-10 items-center" >
                <div className="form-check">
                <input type="checkbox" onChange={setFormData} value="personaNatural" id="radioDefault1" name="tipopropietario" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
                <label htmlFor="radioDefault1" className="inline-block text-gray-400">persona Natural</label>
                
            </div>
            <div>
            <input type="checkbox" onChange={setFormData} value="personaJuridica" id="radioDefault1" name="tipopropietario" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
                <label htmlFor="radioDefault1" className="inline-block text-gray-400">persona juridica</label>
            </div>
            </div>


            <div className="flex-gap-10 items-center" >
                <div className="form-check">
                <input type="checkbox"  onChange={setFormData} value="cc" id="radioDefault2" name="tipodocumento" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
                <label htmlFor="radioDefault1" className="inline-block text-gray-400">C.c.</label>
                
            </div>
            
            
            <div>
            <input type="checkbox" onChange={setFormData} value="pasaporte" id="radioDefault2" name="tipodocumento" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
                <label htmlFor="radioDefault1" className="inline-block text-gray-400">Pasaporte</label>
            </div>

            <div>
            <input type="checkbox" onChange={setFormData} value="ce" id="radioDefault2" name="tipodocumento" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
                <label htmlFor="radioDefault1" className="inline-block text-gray-400">C.e.</label>
            </div>

            <div>
            <input type="checkbox" onChange={setFormData} value="pep" id="radioDefault2" name="tipodocumento" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
                <label htmlFor="radioDefault1" className="inline-block text-gray-400">PEP</label>
            </div>
            </div>

            
            
            <div className="input-type">
                <input type="number" onChange={setFormData} name="ndocumento" className="border w-full px-5 py-1 focus:outline-none  rounded-md" placeholder="N° documento"/>
            </div>


           

            
            <div className="input-type">
                <input type="text" onChange={setFormData} name="nombres" className="border w-full px-5 py-1 focus:outline-none  rounded-md" placeholder="nombres"/>
            </div>



            <div className="input-type">
                <input type="text" onChange={setFormData} name="apellidos" className="border w-full px-5 py-1 focus:outline-none  rounded-md" placeholder="apellidos"/>
            </div>


            <div className="input-type">
                <input type="text" onChange={setFormData} name="NIT" className="border w-full px-5 py-1 focus:outline-none  rounded-md" placeholder="NIT"/>
            </div>

            
            <div className="input-type">
                <input type="text" onChange={setFormData} name="razonSocial" className="border w-full px-5 py-1 focus:outline-none  rounded-md" placeholder="razonSocial"/>
            </div>


            <div className="input-type">
                <input type="text" onChange={setFormData} name="direccion" className="border w-full px-5 py-1 focus:outline-none  rounded-md" placeholder="direccion"/>
            </div>


            <div className="input-type">
                <input type="tel" onChange={setFormData} name="telefono" className="border w-full px-5 py-1 focus:outline-none  rounded-md" placeholder="telefono"/>
            </div>


            <div className="input-type">
                <input type="email" onChange={setFormData} name="correo" className="border w-full px-5 py-1 focus:outline-none  rounded-md" placeholder="correo"/>
            </div>


            <div className="input-type">
                <input type="text" onChange={setFormData} name="construcciones" className="border w-full px-5 py-1 focus:outline-none  rounded-md" placeholder="N° construcciones"/>
            </div>


            <div className="input-type">
                <input type="text"  onChange={setFormData} name="numeropisos" className="border w-full px-5 py-1 focus:outline-none  rounded-md" placeholder="N° pisos"/>
            </div>


            <div className="input-type">
                <input type="text" onChange={setFormData} name="areatotal" className="border w-full px-5 py-1 focus:outline-none  rounded-md" placeholder="area total"/>
            </div>

            

            <div className="flex-gap-10 items-center" >
                <div className="form-check">
                <input type="checkbox" onChange={setFormData} value="industrial" id="radioDefault3" name="tipoconstruccion" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-yellow-500 checked:border-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
                <label htmlFor="radioDefault1" className="inline-block text-gray-400">insustrial</label>
                
            </div>
            <div>
            <input type="checkbox" onChange={setFormData} value="comercial" id="radioDefault13" name="tipoconstruccion" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-yellow-500 checked:border-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
                <label htmlFor="radioDefault1" className="inline-block text-gray-400">comercial</label>
            </div>
            <div>
            <input type="checkbox" onChange={setFormData} value="residencial" id="radioDefault13" name="tipoconstruccion" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-yellow-500 checked:border-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
                <label htmlFor="radioDefault1" className="inline-block text-gray-400">residencial</label>
            </div>
            </div>
            

            
            <div className="input-type">
                <input type="text" onChange={setFormData} name="direccionconstruccion" className="border w-full px-5 py-1 focus:outline-none  rounded-md" placeholder="direc construccion"/>
            </div> 


            <div className="flex-gap-10 items-center" >
                <div className="form-check">
                <input type="checkbox" onChange={setFormData} value="sitiene" id="radioDefault4" name="terreno" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
                <label htmlFor="radioDefault1" className="inline-block text-gray-400">tiene terreno</label>
                
            </div>
            <div>
            <input type="checkbox" onChange={setFormData} value="notiene" id="radioDefault4" name="terreno" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-red-500 checked:border-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
                <label htmlFor="radioDefault1" className="inline-block text-gray-400">no tiene terreno</label>
            </div>
            </div>


            <div className="input-type">
                <input type="text" onChange={setFormData} name="areaterreno" className="border w-full px-5 py-1 focus:outline-none  rounded-md" placeholder="area del terreno"/>
            </div>


            <div className="input-type">
                <input type="number" onChange={setFormData} name="valorcomercial" className="border w-full px-5 py-1 focus:outline-none  rounded-md" placeholder="valor comercial"/>
            </div>

            <div className="flex-gap-10 items-center" >
                <div className="form-check">
                <input type="radio" onChange={setFormData} value="sifuente" id="radioDefault5" name="fuentesagua" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
                <label htmlFor="radioDefault1" className="inline-block text-gray-400 border">si tiene fuentes</label>
                
            </div>
            <div>
            <input type="radio"  onChange={setFormData} value="nofuente" id="radioDefault5" name="fuentesagua" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-red-500 checked:border-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
                <label htmlFor="radioDefault1" className="inline-block text-gray-400 border" >no tiene</label>
            </div>
            </div>

            <div className="flex-gap-10 items-center" >
                <div className="form-check">
                <input type="radio" onChange={setFormData} value="rural" id="radioDefault6" name="tipoterreno" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
                <label htmlFor="radioDefault1" className="inline-block text-gray-400">rural</label>
                
            </div>
            <div>
            <input type="radio" onChange={setFormData} value="urbano" id="radioDefault6" name="tipoterreno" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-yellow-500 checked:border-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
                <label htmlFor="radioDefault1" className="inline-block text-gray-400">urbano</label>
            </div>
            
            </div>

            <button className="flex justify-center text-md w-2/4 bg-green-500 px-4 py-2 border rounded-md hover:bg-gray-200 hover:border-green-500 hover:text-green-500">ADD<span><BiPlus size={24}></BiPlus></span></button>
            
            
        </form>
    )
}