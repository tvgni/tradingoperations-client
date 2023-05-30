'use client';
import React from 'react';

import { menuAdmin } from './menus';

import List, { Item } from 'devextreme-react/list';

import Link from 'next/link';

const ListItem = (data) => {
  return (
    <Link style={{ textDecoration: 'none' }} href={data.path}>
      {' '}
      <i className={`dx-icon dx-icon-${data.icon} dx-list-item-icon`}></i>{' '}
      {data.text}
    </Link>
  );
};

class NavigationList extends React.PureComponent {
  render() {
    return (
      <div className="list" style={{ width: '200px' }}>
        <List
          dataSource={menuAdmin}
          hoverStateEnabled={false}
          activeStateEnabled={false}
          focusStateEnabled={false}
          className=""
          height="100vh"
          style={{ background: '#C1C1C1' }}
          itemRender={ListItem}
        >
          {/*<Item render={renderCustomItemDashboard} icon={'product'}></Item>
          <Item render={renderCustomItemUsuarios} icon={'product'}></Item>
          <Item render={renderCustomItemInformes} icon={'product'}></Item>*/}
        </List>
      </div>
    );
  }
}

export default NavigationList;
