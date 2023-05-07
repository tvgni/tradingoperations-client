/*import { useClient } from 'next/client';
useClient();*/

///import { useClient } from 'next/client';

// Marca este componente como un componente del cliente
//useClient();

'use client';

import { Route } from 'react-router-dom';

import Inicio from './Inicio';
import Productos from './Usuarios'; 
import Contacto from './Informe'; 

import React from 'react';
import Sidebar from './Sidebar';




function Base() {
  return (
    
     
       <Sidebar />
      
     
  );
}


export default Base;
   

