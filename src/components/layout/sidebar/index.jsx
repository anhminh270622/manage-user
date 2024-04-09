import styled from 'styled-components';
import { Menu } from 'antd';

const StyledMenuItem = styled(Menu.Item)`
  &.ant-menu-item-selected {
    background-color: var(--background-button) !important;
  }
`;

function Sidebar() {
    return (
        <Menu defaultSelectedKeys={['1']} mode="inline" theme="dark">
            <StyledMenuItem key="1">Trang chủ</StyledMenuItem>
            <StyledMenuItem key="2">Hỗ trợ</StyledMenuItem>
            <StyledMenuItem key="3">Option 3</StyledMenuItem>
        </Menu>
    );
}
export default Sidebar;