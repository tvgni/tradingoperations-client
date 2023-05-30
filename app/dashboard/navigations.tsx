'use client';
import React, { useState } from 'react';
import Drawer from 'devextreme-react/drawer';
import Toolbar from 'devextreme-react/toolbar';
import dxDropDownButton from 'devextreme/ui/drop_down_button';
import NavigationList from './navigationlist';

import { useRouter } from 'next/navigation';

const openedStateModes = ['push', 'shrink', 'overlap'];
const positions = ['left', 'right'];
const revealModes = ['slide', 'expand'];

const MenuLeft = ({ children }) => {
  const [opened, setOpened] = useState(true);
  const [openedStateMode, setOpenedStateMode] = useState('shrink');
  const [revealMode, setRevealMode] = useState('slide');
  const [position, setPosition] = useState('left');

  //const {push} = useRouter();
  const router = useRouter();

  const handleLinkClick = () => {
    router.push('/dashboard/profile');

    /*useEffect(() => {
      const {pathname} = Router
      if(pathname == '/' ){
          Router.push('/hello-nextjs')
      }
    });*/

    //window.location.replace('http://localhost:3000/dashboard/profile');
  };

  const toolbarItems = [
    {
      widget: 'dxButton',
      location: 'before',
      options: {
        icon: 'menu',
        onClick: () => setOpened(!opened),
      },
    },
    {
      location: 'before',
      showText: true,
      text: 'Trading Como Negocio',
    },
    {
      location: 'after',
      //widget: 'dxButton',
      widget: dxDropDownButton,
      options: {
        //deferRendering: true,
        text: 'Orlando Chavaria',
        icon: 'https://s.gravatar.com/avatar/88456a52085bc5ba4d38b425c2b7d0e2?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Flc.png',
        //onClick: handleLinkClick,
        items: [
          {
            text: 'Mi Perfil',
            onClick: handleLinkClick,
          },
          {
            text: 'Cerrar Sesion',
            onClick: () => {
              // Lógica para la opción 2
            },
          },
        ],
      },
    },
  ];

  const onOutsideClick = () => {
    setOpened(false);
  };

  return (
    <React.Fragment>
      <Toolbar style={{ background: '#f2f2f2' }} items={toolbarItems}></Toolbar>

      {/* <Toolbar>
            <ToolbarItem widget="dxButton" options={{ text: 'Antes' }} />
            <ToolbarItem widget="dxDropDownButton" options={{ text: 'Texto en el centro' }} />
            <ToolbarItem widget="dxButton" options={{ text: 'Después' }} />
        </Toolbar>*/}

      <Drawer
        className=""
        opened={opened}
        openedStateMode={openedStateMode}
        position={position}
        revealMode={revealMode}
        component={NavigationList}
        //closeOnOutsideClick={onOutsideClick}
      >
        <div id="content" className="dx-theme-background-color">
          {children}
        </div>
      </Drawer>
    </React.Fragment>
  );
};

export default MenuLeft;
