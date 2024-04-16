import { useMutation } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { Modal } from 'antd';
import React from 'react';
import { LoginUser } from '../../../apis/register.api';
import { useModalStore, useStore } from '../../../zustand/store';
import FormLogin from '../../modal/form-login';
import useNotificationService from '../../notification';

export default function Login() {
    const navigate = useNavigate();
    const { openNotification } = useNotificationService()
    const { token, setToken } = useStore()
    const { openModal, closeModal } = useModalStore()
    const { userLogin } = useStore()
    const { mutateAsync } = useMutation({
        mutationFn: LoginUser,
    });
    const closeModalForm = () => {
        closeModal();
        navigate({
            to: '/',
        })
    }
    const onFinish = async (values) => {
        try {
            const result = await mutateAsync(values);
            setToken(result);
            openNotification('success', 'Đăng nhập thành công');
            closeModalForm();
        } catch (error) {
            openNotification('error', error);
        }
    };

    return (
        <div>
            <Modal
                title='Login'
                open={openModal}
                onCancel={closeModalForm}
                footer={null}
            >
                <FormLogin onFinish={onFinish} type={'login'} />
            </Modal>
        </div >
    )
}