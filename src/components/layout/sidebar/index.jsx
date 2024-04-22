import styled from 'styled-components';
import { Menu } from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons';

const StyledMenuItem = styled(Menu.Item)`
	&.ant-menu-item-selected {
		background-color: var(--background-primary);
		color: var(--color-white);
		font-weight: bold;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	}
`;

function Sidebar() {
	return (
		<Menu
			defaultSelectedKeys={['1']}
			mode="inline"
			style={{ backgroundColor: 'transparent', fontWeight: '700' }}
		>
			<StyledMenuItem key="1">
				<UnorderedListOutlined /> List
			</StyledMenuItem>
		</Menu>
	);
}
export default Sidebar;
