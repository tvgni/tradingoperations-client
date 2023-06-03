'use client';
import React, { useState } from 'react';
import Drawer from 'devextreme-react/drawer';
import Toolbar from 'devextreme-react/toolbar';
import dxDropDownButton from 'devextreme/ui/drop_down_button';
import NavigationList from './navigationlist';
import { useRouter } from 'next/navigation';
import { authUser } from '@/models/auth0.model';
import { Button } from 'devextreme-react/button';

const MenuLeft = ({
  session,
  children,
}: {
  session: authUser;
  children: any;
}) => {
  const [opened, setOpened] = useState(true);
  const [openedStateMode] = useState('shrink');
  const [revealMode] = useState('slide');
  const [position] = useState('left');

  const router = useRouter();

  const handleLinkClick = () => {
    router.push('/dashboard/profile');
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
      text: 'Academia Trading Como Negocio',
    },
    {
      location: 'before',
      html: '<img src="/favicon-32x32.png"/>',
    },
    {
      location: 'after',
      widget: dxDropDownButton,
      options: {
        text: session.user?.nickname,
        icon: session.user?.picture,
        items: [
          {
            text: 'Mi Perfil',
            icon: 'user',
            onClick: handleLinkClick,
          },
          {
            text: 'Cerrar Sesion',
            icon: 'clearsquare',
            onClick: () => {
              window.location.replace('/api/auth/logout');
            },
          },
        ],
      },
    },
  ];

  return (
    <React.Fragment>
      <Toolbar items={toolbarItems}></Toolbar>
      <Drawer
        opened={opened}
        openedStateMode={openedStateMode}
        position={position}
        revealMode={revealMode}
        component={NavigationList}
      >
        <div id="content" className="dx-theme-background-color">
          {children}
        </div>
      </Drawer>
    </React.Fragment>
  );
};

export default MenuLeft;
