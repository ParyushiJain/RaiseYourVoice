import 'firebase/auth';
import {useAuthUpdate } from '../../Contexts/authContext'; 
import Img from "../Images/Login.png"
export default function Auth() { 
    const AuthUpdate = useAuthUpdate();
    return  (
    <div className='flex justify-center'> 
        <img src = {Img} alt="login-illustration"/>
        <button className=' flex h-10 pl-4 pr-4 border-2 p-2 bg-white text-black ' onClick={(e)=>{
                e.preventDefault()
                AuthUpdate.Authenticate()
        }}>
             <img width="20px" alt="google" className=' mr-5'
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
            Continue with Google</button>
    </div>  
    )
}