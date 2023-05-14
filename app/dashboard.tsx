'use client';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import MyButton from "@/app/Button";

import Sidebar from './Sidebar/Sidebar';

import Usuarios from './Usuarios';
import Informes from './Informes';



import 'devextreme/dist/css/dx.light.css';
/*import './App.css';*/
import NavigationDrawer from "./Navigations/NavigationDrawer";


const inter = Inter({ subsets: ['latin'] })

export default function DashBoard() {
  
  return (

    <div>
      <NavigationDrawer />
    </div> 

  )}