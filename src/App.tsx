import React from 'react';
import { ConfigProvider } from 'antd';
import logo from './logo.svg';
import './App.css';
import { Layout } from 'antd';
import FieldsPage from './components/fields-page';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div>
      <FieldsPage/>
    </div>

  );
}

export default App;
