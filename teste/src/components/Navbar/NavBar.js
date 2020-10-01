import React from 'react';
import './NavBar.css'
import { Layout, Menu } from 'antd';
const { Header } = Layout;

function NavBar() {

  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
    </Header>
  )
}

export default NavBar