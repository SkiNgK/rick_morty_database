import React from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";
import CharacterListPage from './CharacterListPage/CharacterListPage';
import { Layout } from 'antd';
import NavBar from './Navbar/NavBar';
import "antd/dist/antd.css";
import "./App.css"

const { Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <NavBar/>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380,
          marginTop:'3rem' }}>
          <Router>
            <Route path="/" exact component={CharacterListPage} />
          </Router>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
}

export default App;
