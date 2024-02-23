
import img from "../images/Group 2277.svg";

export default function Connexion() {
  return ( 
    <div className='flex w-full bg-orange-50 rounded-xl  shadow-lg overflow-hidden '>
      <img src={img} alt='' className='w-1/2 object-cover ' /> 
      <div className='w-1/2 py-16 px-12 mt-9'>
     
        <p className='font-medium text-3xl text-gray-950 mt-4'> Welcome back !</p>
        <p className='font-medium text-xl text-gray-950 mt-4'> Enter your Credentials to access your account</p>
        <div className='mt-12'>
          <div>
            <label className='text-lg font-medium'>Email Address</label>
            <input 
              className='w-full border-2 border-gray-400 rounded-xl p-4 mt-2 mb-5 bg-transparent'
              placeholder='Entrez votre email'
              type='email'
            />
          </div>
          <div>
            <label className='text-lg font-medium'>Password</label>
            <input 
              className='w-full border-2 border-gray-400 rounded-xl p-4 mt-2 bg-transparent'
              placeholder='Entrez votre mot de passe'
              type='password'
            />
          </div>
        </div>
        <div className='mt-5 flex flex-col gap-y-4'>
          <button className='active:scale-95 active:duration-75 transition-all hover:scale-1.01 ease-in-out py-4 rounded-xl bg-amber-600 text-white text-lg font-bold'>Login</button>
        </div>
      </div>  
    </div>
  );
}
