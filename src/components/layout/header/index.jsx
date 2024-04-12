import React, { useState } from 'react';
import { Button, Input, Modal } from 'antd';
import { LogoutOutlined, LoginOutlined } from '@ant-design/icons';
import { useNavigate } from '@tanstack/react-router';
import { FlexSpaceBetween } from '../../define/flex';
import { ButtonStyled } from '../../define/button';
import Warning from '../../modal/warning';
import useNotificationService from '../../notification';
import { useStore } from '../../../zustand/store';
const { Search } = Input;

function Header() {
  const navigate = useNavigate();
  const [warning, setWarning] = useState(false);
  const [login, setLogin] = useState(localStorage.getItem('token') || null);
  const { openNotification } = useNotificationService()
  const { count } = useStore()
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
    setLogin(null)
    navigate({
      to: '/',
    })
    location.reload()

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
      <FlexSpaceBetween style={{ width: '100%' }}>
        <button>{count}</button>
        <Button type="text" onClick={() => navigate({ to: '/' })}>Quản lý</Button>
        <Search style={{ width: '30%' }} placeholder="input search text" enterButton />
        <ButtonStyled type="primary" onClick={login ? openWarning : handleRegisterClick}>
          {login ? (<><LogoutOutlined /> Đăng xuất</>) : (<><LoginOutlined /> Đăng nhập</>)}
        </ButtonStyled>
      </FlexSpaceBetween>
    </>

  );
}

export default Header;
