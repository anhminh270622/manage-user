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
    <Menu defaultSelectedKeys={['1']} mode="inline" style={{ backgroundColor: 'transparent', fontWeight: '700' }}>
      <StyledMenuItem key="1"><UnorderedListOutlined /> Danh sách người dùng</StyledMenuItem>
      <StyledMenuItem key="2"><UnorderedListOutlined /> Option 2</StyledMenuItem>
      <StyledMenuItem key="3"><UnorderedListOutlined /> Option 3</StyledMenuItem>
      <StyledMenuItem key="4"><UnorderedListOutlined /> Option 4</StyledMenuItem>
    </Menu>
  );
}
export default Sidebar;