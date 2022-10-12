import {BiEdit, BiTrashAlt} from "react-icons/bi";
import { getUsers} from "../lib/helper";
import {useQuery} from 'react-query';
import {useSelector,useDispatch} from 'react-redux';
import { toggleChangeAction } from "../redux/reducer";


export default function Table(){


    const {isLoading, isError,data,error} = useQuery('users',getUsers)

    if(isLoading) return <div>El predio se esta cargado</div>;
    if(isError) return <div>Hay un error</div>
    

    return(
        <table className="min-w-full table-auto">
           <thead>
            <tr className="bg-gray-800 ">
                
                <th className="px-10 py-2">
                  <span className="text-gray-300">N° Predial</span>  
                </th>
                <th className="px-10 py-2">
                  <span className="text-gray-300">avaluo</span>  
                </th>
                <th className="px-10 py-2">
                  <span className="text-gray-300">nombrePropiedad</span>  
                </th>
                <th className="px-10 py-2">
                  <span className="text-gray-300">departamento</span>  
                </th>
                <th className="px-10 py-2">
                  <span className="text-gray-300">municipio</span>  
                </th>
                <th className="px-10 py-2">
                  <span className="text-gray-300">T.propietario</span>  
                </th>
                <th className="px-10 py-2">
                  <span className="text-gray-300">t.documento</span>  
                </th>
                <th className="px-10 py-2">
                  <span className="text-gray-300">n° documento</span>  
                </th>
                <th className="px-10 py-2">
                  <span className="text-gray-300">nombres</span>  
                </th>
                <th className="px-10 py-2">
                  <span className="text-gray-300">apellidos</span>  
                </th>
                <th className="px-10 py-2">
                  <span className="text-gray-300">NIT</span>  
                </th>
                <th className="px-10 py-2">
                  <span className="text-gray-300">razon social</span>  
                </th>
                <th className="px-10 py-2">
                  <span className="text-gray-300">direccion</span>  
                </th>
                <th className="px-10 py-2">
                  <span className="text-gray-300">telefono</span>  
                </th>
                <th className="px-10 py-2">
                  <span className="text-gray-300">correo</span>  
                </th>
                <th className="px-10 py-2">
                  <span className="text-gray-300">construcciones</span>  
                </th>
                <th className="px-10 py-2">
                  <span className="text-gray-300">numeroPisos</span>  
                </th>
                <th className="px-10 py-2">
                  <span className="text-gray-300">areaTotal</span>  
                </th>
                <th className="px-10 py-2">
                  <span className="text-gray-300">TipoConstruccion</span>  
                </th>
                <th className="px-10 py-2">
                  <span className="text-gray-300">direccionConstriccion</span>  
                </th>
                <th className="px-10 py-2">
                  <span className="text-gray-300">terreno</span>  
                </th>
                <th className="px-10 py-2">
                  <span className="text-gray-300">areaTerreno</span>  
                </th>
                <th className="px-10 py-2">
                  <span className="text-gray-300">valorComercial</span>  
                </th>
                <th className="px-10 py-2">
                  <span className="text-gray-300">fuentes Agua cerca</span>  
                </th>
                <th className="px-10 py-2">
                  <span className="text-gray-300">TipoTerreno</span>  
                </th>
                <th className="px-10 py-1">
                  <span className="text-gray-300">actions</span>  
                </th>
            </tr>
           </thead> 
           <tbody className="bg-gray-200">
              {
                data.map((obj,i) =><Tr {...obj} key={i}/>)
              }
           </tbody>

        </table>
    )
}

function Tr({npredial,avaluo,nombrepropiedad,departamento,municipio,tipopropietario,tipodocumento,ndocumento,nombres,apellidos,NIT,razonsocial,direccion,telefono,correo,construcciones,numeropisos,areatotal,tipoconstruccion,direccionconstruccion,terreno,areaterreno,valorcomercial,fuentesagua,tipoterreno}){
  
  const visible = useSelector((state)=>state.app.client.toggleForm)
  const dispatch = useDispatch()

  const onUpdate = () =>{ 
   
   dispatch(toggleChangeAction())
    console.log(visible)

  }
  
  return(
    <tr className="bg-gray-50 text-center">
                <td className="px-16 py-2 flex flex-row items-center">
                    <span >{npredial || "unknown"}</span>
                </td>

                <td className="px-16 py-2 px-3">
                    <span>{avaluo || "unknown"}</span>
                </td>

                <td className="px-16 py-2">
                    <span className="text-center ml-2 font-semibold">{nombrepropiedad || "unknown"} </span>
                </td>

                <td className="px-16 py-2">
                    <span>{departamento || "unknown"}</span>
                </td>

                <td className="px-16 py-2">
                    <span>{municipio || "unknown"}</span>
                </td>
                
                <td className="px-16 py-2">
                    <button className="cursor"><span className={`${tipopropietario == "p.natural"?'bg-green-500' : 'bg-red-500' } text-white px-5 py-1 rounded`}>{tipopropietario || "unknown"}</span></button>
                </td>
                <td className="px-16 py-2 " >
                <span className={`${tipodocumento == "C.c.","Pasaporte","C.e.","PEP"?'bg-yellow-200':"" } bg-yellow-100`}>{tipodocumento || "unknown"}</span>
                </td>
                <td className="px-16 py-2">
                    <span>{ndocumento || "unknown"}</span>
                </td>
                <td className="px-16 py-2">
                    <span className="text-center ml-2 font-semibold">{nombres || "unknown"}</span>
                </td>
                <td className="px-16 py-2">
                    <span className="text-center ml-4 font-semibold">{apellidos || "unknown"}</span>
                </td>
                <td className="px-16 py-2">
                    <span>{NIT || "unknown"}</span>
                </td>
                <td className="px-16 py-2">
                    <span>{razonsocial || "unknown"}</span>
                </td>
                <td className="px-16 py-2">
                    <span>{direccion || "unknown"}</span>
                </td>
                <td className="px-16 py-2">
                    <span>{telefono || "unknown"}</span>
                </td>
                <td className="px-16 py-2">
                    <span>{correo || "unknown"}</span>
                </td>
                <td className="px-16 py-2">
                    <span>{construcciones || "unknown"}</span>
                </td>
                <td className="px-16 py-2">
                    <span>{numeropisos || "unknown"}</span>
                </td>
                <td className="px-16 py-2">
                    <span>{areatotal || "unknown"}</span>
                </td>
                <td className="px-16 py-2">
                <button className="cursor"><span className={`${tipoconstruccion == "residencial","comercial","industrial"?'bg-yellow-200':"" } bg-yellow-100`}>{tipoconstruccion || "unknown"}</span></button>
                </td>
                <td className="px-16 py-2">
                    <span>{direccionconstruccion || "unknown"}</span>
                </td>
                
                <td className="px-16 py-2">
                <button className="cursor"><span className={`${terreno == "si"?'bg-green-500' : 'bg-red-500' } text-white px-5 py-1 rounded`}>{terreno || "unknown"}</span></button>
                </td>
                
                <td className="px-16 py-2">
                    <span>{areaterreno || "unknown"}</span>
                </td>
                <td className="px-16 py-2">
                    <span>{valorcomercial || "unknown"}</span>
                </td>
                <td className="px-16 py-2">
                <button className="cursor"><span className={`${fuentesagua == "si"?'bg-green-500' : 'bg-red-500' } text-white px-5 py-1 rounded`}>{fuentesagua || "unknown"}</span></button>
                </td>
                <td className="px-16 py-2">    
                <button className="cursor"><span className={`${tipoterreno == "urbano"?'bg-blue-800' : 'bg-yellow-600' } text-white px-5 py-1 rounded`}>{tipoterreno || "unknown"}</span></button>
                </td>
                
                <td className="px-16 py-2">
                    <button className="cursor" onClick={onUpdate}><BiEdit size="25" color="rgb(34,130,112)"></BiEdit></button>
                    <button className="cursor" ><BiTrashAlt size="25" color="rgb(244,67,80)"></BiTrashAlt></button>
                </td>
                
             </tr>
  )
}