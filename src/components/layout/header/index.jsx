import React from 'react'
import { Button, Flex } from 'antd';
import { Input, Space } from 'antd';
import { FlexSpaceBetween } from '../../define/flex';
import { ButtonStyled } from '../../define/button';
const { Search } = Input;

function Header() {
  return (
    <FlexSpaceBetween style={{ width: '100%' }}>
      <Button type="text">Quản lý</Button>
      <Search style={{ width: '30%' }} placeholder="input search text"
        enterButton />
      <ButtonStyled type="primary">Đăng ký</ButtonStyled>
    </FlexSpaceBetween>
  )
}

export default Header