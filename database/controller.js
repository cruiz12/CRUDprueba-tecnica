/**controlador */

import Users from '../model/user'

//get : http://localhost:3000/api/users
export async function getUsers(req,res){
try{
    const users = await Users.find({})

    if(!users) return res.status(404).json({error:"datos no encontrados"})
    res.status(200).json(users)
}catch(error){
    res.status(404).json({error:"error al buscar los datos"})
}
}

export async function getUser(req,res){
    try {
        const {userId} = req.query;
        
        if(userId){
            const user = await Users.findById(userId)
            res.status(200).json(user)
        }
        res.status(404).json({error:"usuario no seleccionado"})
    } catch (error) {
        res.status(404).json({error:"no se puede obtener el ususario"})
    }
}



//post : http://localhost:3000/api/users

export async function postUser(req,res){
    try {
        const formData = req.body
        if(!formData) return res.status(404).json({error:"datos del fromulario no proporcionados...!"})
        Users.create(formData, function(err,data){
            return res.status(200).json(data)
        })
    } catch (error){
        return res.status(404).json({error})
    }
}


//put : http://localhost:3000/api/users/1

export async function putUser(req,res){
    try {
       const {userId} = req.query;
       const formData = req.body;

       if(userId && formData){
        const user = await Users.findByIdAndUpdate(userId, formData);
        res.status(200).json(user)
       }
       res.status(404).json({error:"usuario no seleccionado"})
    } catch (error){
       res.status(404).json({error:"error al actualizar los datos...!"})
    }
}

//delete : http://localhost:3000/api/users

export async function deleteUser(req,res){
 try {
    const {userId} = req.query;

if(userId){
    const user = await Users.findByIdAndDelete(userId)
    return res.status(200).json(user)
}

    res.status(404).json({error:"Usuario no seleccionado...!"})

 } catch (error) {
    res.status(404).json({error:"Error al eliminar usuario...!"})
 }
}

