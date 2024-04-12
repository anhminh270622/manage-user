import React from 'react'
import { FlexCenter, FlexSpaceBetween } from '../../define/flex'
import { ButtonStyled } from '../../define/button'
import { useStore } from '../../../zustand/store';
export default function Footer() {
    const { increment, decrement } = useStore();
    return (
        <FlexCenter>
            <p>© 2022 Copyright: <a href="https://mdbootstrap.com/">Antd.com</a></p>
            <ButtonStyled type="primary" onClick={increment}>Tăng</ButtonStyled>
            <ButtonStyled type="primary" onClick={decrement}>Giam</ButtonStyled>
        </FlexCenter>
    )
}
