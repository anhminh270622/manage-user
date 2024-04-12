import React, { useState, useEffect } from 'react'
import { Modal } from 'antd';
import { useNavigate, useRouterState } from '@tanstack/react-router'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import FormLogin from '../modal/form-login';
import { LoginUser } from '../../apis/register.api';
import useNotificationService from '../notification';
export default function Login() {
    const navigate = useNavigate();
    const { openNotification } = useNotificationService()
    const [open, setOpen] = useState(true)

    // const state = useRouterState()
    // const selected = useRouterState({
    //     select: (state) => state.location.state,
    // })
    const { mutateAsync } = useMutation({
        mutationFn: LoginUser,
    });
    const closeModal = () => {
        setOpen(false)
        navigate({
            to: '/',
        })
    }
    const onFinish = async (values) => {
        try {
            await mutateAsync(values);
            openNotification('success', 'Đăng nhập thành công')
            closeModal()

        } catch (error) {
            console.error('Error:', error);
        }
        // finally {
        //     location.reload()
        // }
    };
    const openModal = () => {
        setOpen(true)
    }

    return (
        <div>
            <Modal
                title='Đăng nhập'
                open={open}
                onCancel={closeModal}
                footer={null}
            >
                <FormLogin onFinish={onFinish} type={'login'} />
            </Modal>
        </div >
    )
}