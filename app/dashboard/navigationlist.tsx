'use client';
import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { menu } from './menus';
import List from 'devextreme-react/list';
import Link from 'next/link';

const menuRender = (data: any) => {
  return (
    <Link
      className={`menu-item${data.active ? ' active' : ''}`}
      href={data.path}
    >
      <div className="flex flex-row">
        <div className="basis-1/4">
          <i
            className={`dx-icon dx-icon-${data.icon} dx-list-item-icon icon-item`}
          ></i>
        </div>
        <div className="basis-3/4" style={{ marginTop: '5px' }}>
          <span>{data.text}</span>
        </div>
      </div>
    </Link>
  );
};

export default function NavigationList() {
  const { user, isLoading } = useUser();

  let defaultMenu: any[] | undefined;
  if (!isLoading) {
    defaultMenu = menu.find((menuList) => menuList.rol === user!['role'])?.menu;
  }

  return (
    <div className="list" style={{ width: '200px' }}>
      <List
        dataSource={defaultMenu}
        hoverStateEnabled={false}
        activeStateEnabled={false}
        focusStateEnabled={false}
        className=""
        height="100vh"
        itemRender={menuRender}
      ></List>
    </div>
  );
}
