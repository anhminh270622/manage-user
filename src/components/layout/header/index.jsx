import { LoginOutlined, LogoutOutlined } from '@ant-design/icons';
import { useNavigate } from '@tanstack/react-router';
import { Button, Input, Modal, Typography } from 'antd';
import React, { useState } from 'react';
import { useStore } from '../../../zustand/store';
import { ButtonStyled } from '../../define/button';
import { FlexSpaceBetween } from '../../define/flex';
import Warning from '../../modal/warning';
import useNotificationService from '../../notification';
const { Search } = Input;

function Header() {
  const navigate = useNavigate();
  const [warning, setWarning] = useState(false);
  const { token, setToken, setUser } = useStore();
  const { openNotification } = useNotificationService()
  const handleRegisterClick = () => {
    navigate({
      to: '/login',
      state: {
        open: true,
        type: 'login'
      }
    })
  };
  const openWarning = () => {
    setWarning(true)
  }
  const handleLogOut = () => {
    setWarning(false)
    localStorage.removeItem('token')
    setToken('')
    openNotification('success', 'Đăng xuất thành công')
    navigate({
      to: '/',
    })
    setUser(null)
  }
  return (
    < >
      <Modal
        open={warning}
        onOk={() => handleLogOut()}
        onCancel={() => setWarning(false)}
      >
        <Warning text='Bạn chắc chắn muốn đăng xuất không ?' />
      </Modal>
      <FlexSpaceBetween style={{ width: '100%' }} >
        <Button type="text" onClick={() => navigate({ to: '/' })}>
          <Typography.Title level={2} style={{ fontWeight: 'bold', color: '#fff', lineHeight: '20px' }}>
            Quản lý
          </Typography.Title>
        </Button>
        <Search style={{ width: '30%' }} placeholder="input search text" enterButton />
        <ButtonStyled type="primary" onClick={token ? openWarning : handleRegisterClick}>
          {token ? (<><LogoutOutlined /> Đăng xuất</>) : (<><LoginOutlined /> Đăng nhập</>)}
        </ButtonStyled>
      </FlexSpaceBetween>
    </>

  );
}

export default Header;
