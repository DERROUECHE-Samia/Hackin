import React from "react";
import Recherche from "./Recherche";
import Nav1 from "./Nav1";

const Apresconnexion = ({ user }) => {
  return (
    <>
      <div style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
      <Nav1 user={{ name: user.name, fullName: user.fullName , mail:user.mail}}/>
      </div>

      <div>
          <Recherche />
      </div>
    </>
  ); 
}
export default Apresconnexion;
