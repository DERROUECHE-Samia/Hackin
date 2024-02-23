

import { FaEnvelope } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import img from "../images/top5.jpeg"

export default function Inscription() {
return ( 



  <div className=' flex w-11/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden'>

<div className = 'w-1/2 py-16 px-12 '>
    <p className='font-medium  text-lg text-gray-950 mt-4'> Get Started Now !</p>

    <div className='mt-9 '>
       
        <div>
            <label className='text-lg font-medium'>
              Email  
            </label>
            <input 
            className='w-full border-2  border-gray-400 rounded-xl p-4 mt-4 bg-transparent'
            
            placeholder=  'Entrez votre email '
            type = 'email'
            />
        </div>


            <div>
                <label className='text-lg font-medium'>
                Nom d'utilisateur  
                </label>
                <input 
                className='w-full border-2  border-gray-400 rounded-xl p-4 mt-4 bg-transparent'
                
                placeholder=  'Entrez votre nom '
                type = 'text'
                />
            </div>

            
        <div>
            <label className='text-lg font-medium'>
           Password  
           </label>
            <input 
            className='w-full border-2  border-gray-400 rounded-xl p-4 mt-1 bg-transparent'
            placeholder=' Entrez votre mot de passe '
            type='password'
            />
        </div>


        <img src = {img} alt='' />
      </div  >
<div className='mt-5 flex flex-col gap-y-4'>
<button className= ' active:scale-95 active:duration-75 transition-all hover:scale-{1.01} ease-in-out py-4 rounded-xl  bg-violet-500 text-white  text-lg  font-bold '> Inscrire </button>
</div>
    
  </div>  
</div>


)

}