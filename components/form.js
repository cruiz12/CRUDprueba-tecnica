import UpdateUserForm from "./updateUserForm";
import AddUserForm from "./addUserForm";

export default function Form(){
     
    const flag=false;
     
    return(
        <div className='container mx-auto'>
            {flag ? <AddUserForm/>:<UpdateUserForm/>}
        </div>
    )
}