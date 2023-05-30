'use client';
import React, { useState } from 'react';
import Drawer from 'devextreme-react/drawer';
import Toolbar from 'devextreme-react/toolbar';
import dxDropDownButton from 'devextreme/ui/drop_down_button';
import NavigationList from './NavigationList';
import { authUser } from '@/models/auth0.model';

const openedStateModes = ['push', 'shrink', 'overlap'];
const positions = ['left', 'right'];
const revealModes = ['slide', 'expand'];

const MenuLeft = ({ user, children }: { user: authUser; children: any }) => {
  const [opened, setOpened] = useState(true);
  const [openedStateMode, setOpenedStateMode] = useState('shrink');
  const [revealMode, setRevealMode] = useState('slide');
  const [position, setPosition] = useState('left');

  const handleLinkClick = () => {
    window.location.replace('http://localhost:3000/dashboard/profile');
    //window.redirect.open('http://localhost:3000/DashBoard/Profile', '_blank');
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
        text: user.user?.nickname,
        icon: user.user?.picture,
        //onClick: handleLinkClick,
        items: [
          {
            text: 'Mi Perfil',
            onClick: handleLinkClick,
          },
          {
            text: 'Cerrar Sesion',
            onClick: () => {
              window.location.replace('api/auth/logout');
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
        closeOnOutsideClick={onOutsideClick}
      >
        <div id="content" className="dx-theme-background-color">
          {children}
        </div>
      </Drawer>
    </React.Fragment>
  );
};

export default MenuLeft;
