import React from 'react';
import Nav1 from './compenents/Nav1';

import './App.css';


function MesFavoris() {
    return (
      <div>
        <Nav1 user={{ name: 'derr', fullName: 'John Doe' }} />
        {/* Contenu de la page des favoris */}
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4"> Mes Favoris </h1>
          {/* Ajoutez ici le contenu de la page des favoris */}
        </div>
      </div>
    );
  }
  
  export default MesFavoris;

