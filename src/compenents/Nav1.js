import React, { useState } from 'react';


/**
 * Composant représentant la section "Rencontrer Notre Équipe".
 * @component
 *
 * @returns {JSX.Element} - Élément React représentant la section.
 */


const Nav1 = ({ user }) => {
  
  const [showMenu, setShowMenu] = useState(false);

  const handleCircleClick = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    // Mettez ici la logique de déconnexion
    console.log("Déconnexion...");
    
  };

  
  return (
    <nav className="bg-primary-300 p-4 flex flex-col md:flex-row md:items-center justify-between">


      <div className="flex items-center">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <span className="text-3xl text-black mr-1 pt-2">
          <ion-icon name="book"></ion-icon> 
          </span>
          <div className="flex items-center space-x-4">
            <span className="hidden md:inline-block">Endless Possibilities, unique journeys.</span>
            
            <a href="/profile" className="text-white hover:text-pink-300">
              Profil
            </a>

          </div>
        </div>
      </div>

    
    </nav>
  );
};

export default Nav1;
