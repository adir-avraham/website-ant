import React from 'react';
import { ConfigProvider } from 'antd';
import logo from './logo.svg';
import './App.css';
import { Layout } from 'antd';
import FieldsPage from './components/fields-page';
import Home from './components/home-page';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div>
      <Layout>

      <Home/>
      <FieldsPage/>
      </Layout>
    </div>

  );
}

export default App;
