import React from 'react';

import { navigation } from './data.js';

import List, {Item} from 'devextreme-react/list';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

const renderCustomItemDashboard = () => {

  return (<Link href="/dashboard">Dashboard</Link>);
}


const renderCustomItemUsuarios = () => {


  return (<Link href="/Usuarios">usuarios</Link>);
}



const renderCustomItemInformes = () => {

  return (<Link href="/Informes">Informes</Link>);
}

const NavigationList = () => {

 

    return (
      <div className="list" style={{ width: '200px' }}>
        <List
          hoverStateEnabled={false}
          activeStateEnabled={false}
          focusStateEnabled={false}
          className="panel-list dx-theme-accent-as-background-color">

            <Item render={renderCustomItemDashboard}></Item>
            <Item render={renderCustomItemUsuarios}></Item>
            <Item render={renderCustomItemInformes}></Item>

          </List>
      </div>
    );

}

export default NavigationList;