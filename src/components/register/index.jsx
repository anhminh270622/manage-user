import { useMutation } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { Modal } from 'antd';
import React, { useState } from 'react';
import { AddRegister } from '../../apis/register.api';
import FormLogin from '../modal/form-login';
import useNotificationService from '../notification';
import { useModalStore, useStore } from '../../zustand/store';
export default function Register() {
    const navigate = useNavigate();
    // const [open, setOpen] = useState(true)
    const { openModal, closeModal } = useModalStore()
    const { openNotification, contextHolder } = useNotificationService()
    const { setUser } = useStore()
    const { mutateAsync } = useMutation({
        mutationFn: AddRegister,
    });
    const closeModalForm = () => {
        closeModal()
        navigate({
            to: '/',
        })
    }
    const onFinish = async (values) => {
        try {
            await mutateAsync(values);
            closeModalForm();
            openNotification('success', 'Đăng ký thành công')
            navigate({
                to: '/login',
                state: { values }
            })
            setUser(values);
        } catch (error) {
            openNotification('error', 'Lỗi')
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <Modal
                title='Đăng ký'
                open={openModal}
                onCancel={closeModalForm}
                footer={null}>
                <FormLogin type={'register'} onFinish={onFinish} />
            </Modal>
        </div>
    )
}

