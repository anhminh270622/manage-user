import { Flex, Layout } from 'antd';
import React from 'react';
import Footers from './footer';
import Headers from './header';
import './layout.css';
import Sidebar from './sidebar';
const { Header, Footer, Sider, Content } = Layout;

export default function LayoutContent({ children }) {
	return (
		<Flex gap="middle" wrap="wrap">
			<Layout className="layout">
				<Header>
					<Headers />
				</Header>
				<Layout height="100%">
					<Sider width="15%">
						<Sidebar />
					</Sider>
					<Content className="content">{children}</Content>
				</Layout>
				<Footer>
					<Footers />
				</Footer>
			</Layout>
		</Flex>
	);
}
