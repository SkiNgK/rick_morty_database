import React from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";
import CharacterDescriptionPage from './CharacterDescriptionPage/CharacterDescriptionPage';
import CharacterListPage from './CharacterListPage/CharacterListPage';
import { Layout, Breadcrumb } from 'antd';
import NavBar from './Navbar/NavBar';
import "antd/dist/antd.css";
import "./App.css"

const { Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <NavBar/>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          <Router>
            <Route path="/" exact component={CharacterListPage} />
            <Route path="/character" component={CharacterDescriptionPage} />
          </Router>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
}

export default App;
