import img from "../images/Group 2277.svg";

export default function Inscription() {
  return ( 
    <div className='flex w-full bg-orange-50 rounded-xl shadow-lg overflow-hidden '>
      <img src={img} alt='' className='w-1/2 object-cover ' /> 
      <div className='w-1/2 py-16 px-12 mt-9'>
        <p className='font-medium text-3xl text-gray-950 mt-2 mb-5 font-bold'> Get Started Now !</p>
        <div className='mt-12'>
          <div>
            <label className='text-lg font-medium'>Email Address</label>
            <input 
              className='w-full border-2 border-gray-400 rounded-xl p-4 mt-2 mb-5 bg-transparent'
              placeholder='Enter your email address'
              type='email'
            />
          </div>
          <div>
            <label className='text-lg font-medium'>Name</label>
            <input 
              className='w-full border-2 border-gray-400 rounded-xl p-4 mt-2 mb-5 bg-transparent'
              placeholder='Enter your name'
              type='text'
            />
          </div>
          <div>
            <label className='text-lg font-medium'>Password</label>
            <input 
              className='w-full border-2 border-gray-400 rounded-xl p-4 mt-1 bg-transparent'
              placeholder='Enter your password'
              type='password'
            />
          </div>
        </div>
        <div className='mt-5 flex flex-col gap-y-4'>
          <button className='active:scale-95 active:duration-75 transition-all hover:scale-1.01 ease-in-out py-4 rounded-xl bg-amber-600 text-white text-lg font-bold'>Inscrire</button>
        </div>
      </div>  
    </div>
  );
}
