import React, { useState, useEffect } from 'react'
import { Modal } from 'antd';
import { useNavigate, useRouterState } from '@tanstack/react-router'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import FormLogin from '../modal/form-login';
import { AddRegister } from '../../apis/register.api';
import useNotificationService from '../notification'
export default function Register() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(true)
    const { openNotification, contextHolder } = useNotificationService()

    const { mutateAsync } = useMutation({
        mutationFn: AddRegister,
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
            closeModal();
            openNotification('success', 'Đăng ký thành công')
            // form.resetFields()

        } catch (error) {
            openNotification('error', 'Lỗi')
            console.error('Error:', error);
        }
    };
    const openModal = () => {
        setOpen(true)
    }

    return (
        <div>
            <Modal
                title='Đăng ký'
                open={open}
                onCancel={closeModal}
                footer={null}>
                <FormLogin type={'register'} onFinish={onFinish} />
            </Modal>
        </div>
    )
}

