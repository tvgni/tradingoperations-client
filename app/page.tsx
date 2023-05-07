'use client';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import MyButton from "@/app/Button";
const inter = Inter({ subsets: ['latin'] })






import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Base from './Base';
import Sidebar from './Sidebar';
import Productos from './Usuarios';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Usuarios from './Usuarios';
import Informe from './Informe';


///ReactDOM.render(<Base/>, document.getElementById('root'));


//import ReactDOMServer from 'react-dom/server';
//import Base from './Base'; // importa el componente Base


//ReactDOMServer.renderToString(<Base />);






export default function Home() {
  
  return (

  

    <main className={styles.main}>
      
      <div className="container">

      <BrowserRouter>
            
            <Routes>
              <Route  path="/usuarios" Component={Usuarios} />
            </Routes>
  
            <Routes>
              <Route  path="/informe" Component={Informe} />
            </Routes>
  
            <Sidebar />
        </BrowserRouter>
     
       
      </div>
        
    </main>


  )}

/*export default function Home() {
  const [currentPage, setCurrentPage] = useState('Inicio');
  // ...

  function handlePageChange(newPage) {
      setCurrentPage(newPage);
  }


  return (
      <div>
        <Sidebar onPageChange={handlePageChange} />
        {currentPage === 'Inicio' && <Inicio />}
        {currentPage === 'Productos' && <Productos />}
        {currentPage === 'Contacto' && <Contacto />}
      </div>

);

}*/

/*export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
      <MyButton />
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>

      <div className={styles.grid}>
        <a
          href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Docs <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Templates <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Deploy <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}*/
