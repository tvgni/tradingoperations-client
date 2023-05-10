'use client';
import React from 'react';

import Drawer from 'devextreme-react/drawer';
import RadioGroup from 'devextreme-react/radio-group';
import Toolbar from 'devextreme-react/toolbar';
import DropDownButton from 'devextreme-react/drop-down-button';
import HTMLReactParser from 'html-react-parser';

import { text } from './menus';
import NavigationList from './NavigationList';

import Link from 'next/link';
import { options } from 'inferno';
//import { Link } from 'react-router-dom';


const openedStateModes = ['push', 'shrink', 'overlap'];
const positions = ['left', 'right'];
const revealModes = ['slide', 'expand'];


const handleLinkClick = () => {
  window.location.replace('http://localhost:3000/DashBoard/Profile');
  //window.redirect.open('http://localhost:3000/DashBoard/Profile', '_blank');
};


class MenuLeft extends React.Component {
    constructor() {
      super();
  
      this.state = {
        opened: true,
        openedStateMode: 'shrink',
        revealMode: 'slide',
        position: 'left',
      };
  
      this.toolbarItems = [{
        widget: 'dxButton',
        location: 'before',
        options: {
          icon: 'menu',
          onClick: () => this.setState({ opened: !this.state.opened }),
        }
      }, {
          widget: 'dxButton',
          location: 'after',
          options: {
            icon: 'user',
            //onClick: handleLinkClick,
            text: 'Mi Perfil'
          }
         
        
        }

      ];
  
      /*this.onOpenedStateModeChanged = this.onOpenedStateModeChanged.bind(this);
      this.onRevealModeChanged = this.onRevealModeChanged.bind(this);
      this.onPositionChanged = this.onPositionChanged.bind(this);
      this.onPositionChanged = this.onPositionChanged.bind(this);
      this.onOutsideClick = this.onOutsideClick.bind(this);*/
    }
  
    /*onOpenedStateModeChanged({ value }) {
      this.setState({ openedStateMode: value });
    }
  
    onRevealModeChanged({ value }) {
      this.setState({ revealMode: value });
    }
  
    onPositionChanged({ value }) {
      this.setState({ position: value });
    }
  
    onOutsideClick() {
      this.setState({ opened: false });
    }*/
  
    render() {
      const {
        opened, openedStateMode, position, revealMode,
      } = this.state;
  
      return (
        <React.Fragment>
          <Toolbar  items={this.toolbarItems } />
          <Drawer
            opened={opened}
            openedStateMode={openedStateMode}
            position={position}
            revealMode={revealMode}
            component={NavigationList}
            closeOnOutsideClick={this.onOutsideClick}
            height={400}>
            <div id="content" className="dx-theme-background-color">
            {this.props.children}
            </div>
          </Drawer>


          
        </React.Fragment>
      );
    }
  }
  
  export default MenuLeft;