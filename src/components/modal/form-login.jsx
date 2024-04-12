import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from '@tanstack/react-router'
// const onFinish = (values) => {
//     console.log('Success:', values);
// };
const onFinishFailed = (errorInfo) => {
};
const FormLogin = ({ onFinish, type }) => {
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
            <Link style={{ float: 'right' }} to={type === 'login' ? '/register' : '/login'}>
                {type === 'login' ? 'Đăng Ký' : 'Đăng nhập'}
            </Link>


            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    {type === 'login' ? 'Đăng nhập' : 'Đăng ký'}
                </Button>
            </Form.Item>
        </Form>
    );
};
export default FormLogin;