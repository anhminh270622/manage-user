import { Flex, Layout } from 'antd';
import React from 'react';
import Container from './container';
import Footers from './footer';
import Headers from './header';
import './layout.css';
import Sidebar from './sidebar';
const { Header, Footer, Sider, Content } = Layout;

export default function LayoutContent({ children }) {
    return (
        <Flex gap="middle" wrap="wrap">
            <Layout className='layout'>
                <Header>
                    <Headers />
                </Header>
                <Layout >
                    <Sider width="15%">
                        <Sidebar />
                    </Sider>
                    <Content className='content'>
                        <Container></Container>
                        {children}
                    </Content>
                </Layout>
                <Footer>
                    <Footers />
                </Footer>
            </Layout>
        </Flex>
    )
}

