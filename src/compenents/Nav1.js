import React from 'react';

const Nav1 = ({ user }) => {
  return (
    <nav className="bg-blue-300 p-4 flex flex-col md:flex-row md:items-center justify-between">
      <div className="flex items-center">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <span className="text-3xl text-black mr-1 pt-2">
            <ion-icon name="bug"></ion-icon>
          </span>
          <div className="flex items-center space-x-4">
            <span className="hidden md:inline-block">Designer</span>
            <a href="/profile" className="text-white hover:text-pink-300 ml-4">
              Profil
            </a>
            <a
              href="/favorites"
              className="text-pink-700 hover:text-pink-300 font-[Kanit]"
            >
              Mes Favoris
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center mt-4 md:mt-0">
        {user && (
          <div className="text-white md:ml-6">
            <p className="text-lg font-bold">{user.fullName}</p>
            <p>{user.name}</p>
          </div>
        )}
        {user && user.name && (
          <div className="bg-white border-black rounded-full h-10 w-10 flex items-center justify-center text-gray-800 font-bold ml-4 md:ml-6 mt-4 md:mt-0">
            {user.name.charAt(0).toUpperCase()}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav1;
