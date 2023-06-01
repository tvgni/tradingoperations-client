'use client';
import React, { useState } from 'react';
import Drawer from 'devextreme-react/drawer';
import Toolbar from 'devextreme-react/toolbar';
import dxDropDownButton from 'devextreme/ui/drop_down_button';
import NavigationList from './navigationlist';

import { useRouter } from 'next/navigation';
import { authUser } from '@/models/auth0.model';

const MenuLeft = ({
  session,
  children,
}: {
  session: authUser;
  children: any;
}) => {
  const [opened, setOpened] = useState(true);
  const [openedStateMode, setOpenedStateMode] = useState('shrink');
  const [revealMode, setRevealMode] = useState('slide');
  const [position, setPosition] = useState('left');

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
      text: 'Trading Como Negocio',
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

  const onOutsideClick = () => {
    setOpened(false);
  };

  return (
    <React.Fragment>
      <Toolbar style={{ background: '#f2f2f2' }} items={toolbarItems}></Toolbar>
      <Drawer
        className=""
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
