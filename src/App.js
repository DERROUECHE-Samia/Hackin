import React from 'react';
import Nav1 from './compenents/Nav1';
import Recherche from './compenents/Recherche';
import Dem3a from './compenents/Dem3a';
import Form from './compenents/Form';
import Inscription from './compenents/Form';


import './App.css'; 
/*function App() {
  return (
    <>
    <Nav />
    <div className="bg-white-600 w-full h-screen"> </div>
    </>
  );
}*/


/*function App() {
  return (
    <>
    <Nav1 user={{ name: 'derr', fullName: 'John Doe' }} />
      <Recherche />
      <Dem3a /> 
    </>
    
  );
}*/

function App() {
  return ( 
    <div className=' antialiased flex w-full min-h-screen py-40 justify-center items-center'  >

<Form/>

  </div>
  );
}

export default App;



