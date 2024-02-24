import React, { useState } from 'react';
import Button from './Button';
import userPhoto from '../images/photo.jpg'; 
import userPho from '../images/question.svg';

const Nav1 = ({}) => {
  
  const [showMenu, setShowMenu] = useState(false);

  const handleCircleClick = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
  };

  return (
    <nav className="bg-primary p-4 flex flex-col md:flex-row md:items-center justify-between">
      <div className="flex items-center">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <span className="text-3xl text-black mr-1 pt-2">
            <ion-icon name="book"></ion-icon> 
          </span>
          <div className="flex items-center space-x-4">
            <span className="hidden md:inline-block underline border-b-4 ml-6 border-primary"> Endless Possibilities, unique journeys.</span>
          </div>
        </div>
      </div>

      <div className="flex items-center">
       
        <div className="relative ml-4 flex"> {}
          <img src={userPho} alt="User" onClick={handleCircleClick} className="cursor-pointer w-12 h-12 rounded-full mr-4" />
          <img src={userPhoto} alt="User" onClick={handleCircleClick} className="cursor-pointer w-12 h-12 rounded-full" />
          {showMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-md z-10">
              {}
            </div>
          )}
        </div>
        <Button onClick={handleLogout}>  
         Log out
        </Button>
      </div>
    </nav>
  );
};

export default Nav1;
