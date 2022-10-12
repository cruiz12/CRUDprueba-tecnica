import {useReducer} from "react"
import { BiBrush } from "react-icons/bi"
import Success from "./success"
import Bug from "./bug"

const formReducer = (state,event) => {
    return{
        ...state,
        [event.target.name]:event.target.value
    }
}


export default function UpdateUserForm(){

    const [formData,setFormData] = useReducer(formReducer,{})
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formData)

        if (Object.keys(formData).length == 0) return console.log("no hay datos de formulario")
        console.log(formData)
    }

    
    //if (Object.keys(formData).length > 0 ) return <Success message={"Se Agregaron Los Datos Con Exito"}></Success>
    
    if (Object.keys(formData).length > 0 ) return <Bug message={"No Se Agregaron Los Datos "}></Bug>

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
                <input type="radio" onChange={setFormData} value="personaNatural" id="radioDefault1" name="tipoPersona" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
                <label htmlFor="radioDefault1" className="inline-block text-gray-400">persona Natural</label>
                
            </div>
            <div>
            <input type="radio" onChange={setFormData} value="personaJuridica" id="radioDefault1" name="tipoPersona" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
                <label htmlFor="radioDefault1" className="inline-block text-gray-400">persona juridica</label>
            </div>
            </div>


            <div className="flex-gap-10 items-center" >
                <div className="form-check">
                <input type="radio"  onChange={setFormData} value="cc" id="radioDefault2" name="tipoDoc" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
                <label htmlFor="radioDefault1" className="inline-block text-gray-400">C.c.</label>
                
            </div>
            
            
            <div>
            <input type="radio" onChange={setFormData} value="pasaporte" id="radioDefault2" name="tipoDoc" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
                <label htmlFor="radioDefault1" className="inline-block text-gray-400">Pasaporte</label>
            </div>

            <div>
            <input type="radio" onChange={setFormData} value="ce" id="radioDefault2" name="tipoDoc" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
                <label htmlFor="radioDefault1" className="inline-block text-gray-400">C.e.</label>
            </div>

            <div>
            <input type="radio" onChange={setFormData} value="pep" id="radioDefault2" name="tipoDoc" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
                <label htmlFor="radioDefault1" className="inline-block text-gray-400">PEP</label>
            </div>
            </div>

            
            
            <div className="input-type">
                <input type="text" onChange={setFormData} name="ndocumento" className="border w-full px-5 py-1 focus:outline-none  rounded-md" placeholder="N° documento"/>
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
                <input type="text" onChange={setFormData} name="email" className="border w-full px-5 py-1 focus:outline-none  rounded-md" placeholder="correo"/>
            </div>


            <div className="input-type">
                <input type="text" onChange={setFormData} name="nconstrucciones" className="border w-full px-5 py-1 focus:outline-none  rounded-md" placeholder="N° construcciones"/>
            </div>


            <div className="input-type">
                <input type="text"  onChange={setFormData} name="npisos" className="border w-full px-5 py-1 focus:outline-none  rounded-md" placeholder="N° pisos"/>
            </div>


            <div className="input-type">
                <input type="text" onChange={setFormData} name="area total" className="border w-full px-5 py-1 focus:outline-none  rounded-md" placeholder="area total"/>
            </div>

            

            <div className="flex-gap-10 items-center" >
                <div className="form-check">
                <input type="radio" onChange={setFormData} value="industrial" id="radioDefault3" name="tipoConstruccion" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
                <label htmlFor="radioDefault1" className="inline-block text-gray-400">insustrial</label>
                
            </div>
            <div>
            <input type="radio" onChange={setFormData} value="comercial" id="radioDefault13" name="tipoConstruccion" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
                <label htmlFor="radioDefault1" className="inline-block text-gray-400">comercial</label>
            </div>
            <div>
            <input type="radio" onChange={setFormData} value="residencial" id="radioDefault13" name="tipoConstruccion" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
                <label htmlFor="radioDefault1" className="inline-block text-gray-400">residencial</label>
            </div>
            </div>
            

            
            <div className="input-type">
                <input type="text" onChange={setFormData} name="direccionconstruccion" className="border w-full px-5 py-1 focus:outline-none  rounded-md" placeholder="direc construccion"/>
            </div> 


            <div className="flex-gap-10 items-center" >
                <div className="form-check">
                <input type="radio" onChange={setFormData} value="sitiene" id="radioDefault4" name="tieneTerreno" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
                <label htmlFor="radioDefault1" className="inline-block text-gray-400">tiene terreno</label>
                
            </div>
            <div>
            <input type="radio" onChange={setFormData} value="notiene" id="radioDefault4" name="tieneTerreno" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
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
                <input type="radio" onChange={setFormData} value="sifuente" id="radioDefault5" name="tieneFuentesAgua" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
                <label htmlFor="radioDefault1" className="inline-block text-gray-400 border">si tiene fuentes</label>
                
            </div>
            <div>
            <input type="radio"  onChange={setFormData} value="nofuente" id="radioDefault5" name="tieneFuentesAgua" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
                <label htmlFor="radioDefault1" className="inline-block text-gray-400 border" >no tiene</label>
            </div>
            </div>

            <div className="flex-gap-10 items-center" >
                <div className="form-check">
                <input type="radio" onChange={setFormData} value="rural" id="radioDefault6" name="tipoTerreno" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
                <label htmlFor="radioDefault1" className="inline-block text-gray-400">rural</label>
                
            </div>
            <div>
            <input type="radio" onChange={setFormData} value="urbano" id="radioDefault6" name="tipoTerreno" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
                <label htmlFor="radioDefault1" className="inline-block text-gray-400">urbano</label>
            </div>
            
            </div>

            <button className="flex justify-center text-md w-2/4 bg-yellow-500 px-4 py-2 border rounded-md hover:bg-gray-200 hover:border-yellow-500 hover:text-yellow-600">Update<span><BiBrush size={24}></BiBrush></span></button>
            
            
        </form>
    )
}