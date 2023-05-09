'use client';

import { NavLink } from 'react-router-dom';

import { BrowserRouter as Router, useRoutes } from 'react-router-dom';


//import { Routes, Route } from 'react-router-dom';
//import Inicio from './Inicio';
import Usuarios from '../Usuarios';
import Informes from '../Informes';
import { Link } from 'react-router-dom';
import React, {useState} from "react";

import "./Sidebar.css"



function Sidebar() {

  const [isOpen, setIsOpen] = useState(false)

  return (
  

    <div>
        <nav className={'nav_items'}>
          <ul>

          <li><Link to="/">DashBoard</Link></li>
          <li><Link to="/usuarios">Usuarios</Link></li>
          <li><Link to="/informe">Informes</Link></li>

          </ul>
       </nav>
        <span></span>
       <div className={'nav_toggle'}>
        <span></span>
        <span></span>
       </div>

    </div>
    

    

  );
}

export default Sidebar;