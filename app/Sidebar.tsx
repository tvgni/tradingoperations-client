'use client';

import { NavLink } from 'react-router-dom';

import { BrowserRouter as Router, useRoutes } from 'react-router-dom';

//import { Routes, Route } from 'react-router-dom';
import Inicio from './Inicio';
import Usuarios from './Usuarios';
import Contacto from './Informe';
import { Link } from 'react-router-dom';





/**<li><a href="/Inicio">Dash booard</a></li>
        <li><a href="/productos">Productos</a></li>
        <li><a href="/contacto">Contacto</a></li>
*/
function Sidebar() {

  

  return (
    <nav>
      <ul>

      <li><Link to="/">DashBoard</Link></li>
      <li><Link to="/usuarios">Usuarios</Link></li>
      <li><Link to="/informe">Informes</Link></li>

      
      
      </ul>
    </nav>
  );
}

export default Sidebar;