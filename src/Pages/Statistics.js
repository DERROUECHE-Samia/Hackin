import React from 'react';
import Nav1 from '../compenents/Nav1';
import ima from '../images/Group 2284.png'; 
import Nav2 from '../compenents/Nav2';

export default function Statistics() {
    

    return (
        <>
            <Nav1/>
            <Nav2/>
            <img src={ima} alt="User"  className="w-12 h-12  mr-4" />
        </>
    );
}
