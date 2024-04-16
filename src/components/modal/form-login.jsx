import { Link } from '@tanstack/react-router';
import { Button, Form, Input } from 'antd';
import React from 'react';
import { useStore } from '../../zustand/store';
import { FlexRight } from '../define/flex';

const FormLogin = ({ onFinish, type }) => {
    const { userLogin } = useStore();

    const onFinishFailed = (errorInfo) => {
    };
    return (
        <Form
            // form={form}
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            style={{
                maxWidth: 600,
            }}
            initialValues={{
                remember: true,
                ...userLogin,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >

            <Form.Item
                label="Email"
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Email!',
                    },
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>
            <FlexRight>
                <Link to={type === 'login' ? '/register' : '/login'}>
                    {type === 'login' ? 'Register' : 'Login'}
                </Link>
            </FlexRight>



            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    {type === 'login' ? 'Login' : 'Register'}
                </Button>
            </Form.Item>
        </Form>
    );
};
export default FormLogin;