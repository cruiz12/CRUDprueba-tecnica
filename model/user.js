import {Schema,models,model} from 'mongoose'

const userSchema = new Schema({
    npredial:Number,
    avaluo:Number,
    nombrepropiedad:String,
    departamento:String,
    municipio:String,
    tipopropietario:String,
    tipodocumento:String,
    ndocumento:String,
    nombres:String,
    apellidos:String,
    NIT:String,
    razonsocial:String,
    direccion:String,
    telefono:String,
    correo:String,
    construcciones:String,
    numeropisos:String,
    areatotal:String,
    tipoconstruccion:String,
    direccionconstruccion:String,
    terreno:String,
    areaterreno:String,
    valorcomercial:Number,
    fuentesagua:String,
    tipoterreno:String
})

const Users = models.user || model("user",userSchema)
export default Users;