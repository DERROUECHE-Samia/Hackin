import React, { useState } from 'react';
import Button from './Button';

export default function Nav() {
   let Links =[ 
      {name:"Home", link:"#section1"},
      {name:"Services", link:"#section2"},
      {name:"About Us", link:"#section4"},
     
   ];
   let [open, setOpen] = useState(false);
   return(
      
      <div className='bg-primary-300 shadow-md w-full fixed top-0 left-0' >

         <div className='md:flex items-center   justify-between bg-eb9f4a py-4 md:px-10 px-7' >
         
         
          <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
          
          <span className='text-3xl text-primary-100 mr-1 pt-2'>
          <ion-icon name="book"> </ion-icon>
          </span>

          IQUIZ
          </div>

          <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <ion-icon name={open ? 'close' : 'menu'}> </ion-icon>
          </div>
          <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0  pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100 ': 'top-[-490px]' } md:opacity-100 opacity-0 `}>
            {

            Links.map((link)=>(
                 <li key ={link.name} className='md:ml-8 text-xl md:my-0 my-7 '>
                  <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'> {link.name}</a>
               </li>

            ))
            }
         


          <Button className = "rounded-3xl "  >
            Get Started
          </Button>
          
          </ul>
          </div>
          </div>
   )
}