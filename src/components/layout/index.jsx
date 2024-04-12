import React from 'react'
const { Header, Footer, Sider, Content } = Layout;
import Container from './container';
import Headers from './header';
import Footers from './footer';
import Sidebar from './sidebar';
import { Layout, Flex } from 'antd';
import { useMatch } from '@tanstack/react-router';
import './layout.css';

export default function LayoutContent({ children }) {
    // const isNotFound = useMatch({ path: '*' });
    return (
        <Flex gap="middle" wrap="wrap">
            <Layout className='layout'>
                <Header>
                    <Headers />
                </Header>
                <Layout>
                    <Sider >
                        <Sidebar />
                    </Sider>
                    <Content >
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

