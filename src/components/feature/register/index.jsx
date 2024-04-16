import { useMutation } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { Modal } from 'antd';
import React from 'react';
import { AddRegister } from '../../../apis/register.api';
import { useModalStore, useStore } from '../../../zustand/store';
import FormLogin from '../../modal/form-login';
import useNotificationService from '../../notification';
export default function Register() {
    const navigate = useNavigate();
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
            openNotification('error', error);
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <Modal
                title='Register'
                open={openModal}
                onCancel={closeModalForm}
                footer={null}>
                <FormLogin type={'register'} onFinish={onFinish} />
            </Modal>
        </div>
    )
}

