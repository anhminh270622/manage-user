import React from 'react';
import { Layout, Flex } from 'antd';
import Headers from './components/layout/header';
import Container from './components/layout/container';
import Sidebar from './components/layout/sidebar';
import Footers from './components/layout/footer';
import './App.css';
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: 'var(--background-primary)',
  display: 'flex',
  alignItems: 'center',
};
const contentStyle = {
  color: '#fff',
  width: '90%',
  margin: '0 auto',

};
const siderStyle = {
  lineHeight: '120px',
  color: '#fff',
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: 'var(--color-footer)',
};
const layoutStyle = {
  overflow: 'hidden',
  width: '100%',
  maxWidth: '100%',
  margin: '0 auto',
  backgroundColor: 'var(--background-primary-0)',
};
const App = () => (
  <Flex gap="middle" wrap="wrap">
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <Headers />
      </Header>
      <Layout >
        <Sider width="25%" style={siderStyle}>
          <Sidebar />
        </Sider>
        <Content style={contentStyle}>
          <Container />
        </Content>
      </Layout>
      <Footer style={footerStyle}>
        <Footers />
      </Footer>
    </Layout>


  </Flex>
);
export default App;