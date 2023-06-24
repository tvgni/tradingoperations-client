'use client';
import React, { useState } from 'react';
import Drawer from 'devextreme-react/drawer';
import Toolbar from 'devextreme-react/toolbar';
import { useUser } from '@auth0/nextjs-auth0/client';
import dxDropDownButton from 'devextreme/ui/drop_down_button';
import { useRouter } from 'next/navigation';
import { ScrollView } from 'devextreme-react';
import { locale, loadMessages } from 'devextreme/localization';
import * as esMessages from 'devextreme/localization/messages/es.json';
import NavigationList from './navigationlist';

const MenuLeft = ({ children }: { children: any }) => {
  loadMessages(esMessages);
  locale('es');
  const [opened, setOpened] = useState(true);
  const router = useRouter();

  const handleLinkClick = () => {
    router.push('/profile');
  };

  const { user, isLoading } = useUser();
  if (!isLoading) {
  }

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
        text: user?.name ?? user?.nickname,
        icon: user?.picture,
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
      <Toolbar className="base-toolbar" items={toolbarItems}></Toolbar>
      <Drawer
        opened={opened}
        openedStateMode="shrink"
        position="left"
        revealMode="slide"
        component={NavigationList}
      >
        <div id="content" className="dx-theme-background-color">
          <ScrollView
            scrollByContent={true}
            scrollByThumb={true}
            useNative={false}
            direction="vertical"
          >
            <div className="scrollContent">{children}</div>
          </ScrollView>
        </div>
      </Drawer>
    </React.Fragment>
  );
};

export default MenuLeft;
