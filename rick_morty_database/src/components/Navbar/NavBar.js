import React from 'react';
import './NavBar.css'
import { Layout } from 'antd';
import logo from '../../images/logoRM.png';
const { Header } = Layout;

function NavBar() {

  return (
    <Header className="header">
      <img className="logo" src={logo} alt="logo" />
    </Header>
  )
}

export default NavBar