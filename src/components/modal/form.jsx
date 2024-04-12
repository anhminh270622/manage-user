import React, { useEffect } from 'react';
import { Button, Checkbox, Input, Form } from 'antd';
// const onFinish = (values) => {
//     console.log('Success:', values);
// };
const onFinishFailed = (errorInfo) => {
};
const CustomForm = ({ data, onFinish, type, form }) => {
    const [formData] = Form.useForm();
    useEffect(() => {
        // if (!data) {
        //     form.resetFields();
        // }
        formData.setFieldsValue({
            ...data,
        });
    }, [data, form]);
    return (
        <Form
            form={form}
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
                label="Name"
                name="name"
                rules={[
                    {
                        required: true,
                        message: 'Please input your name!',
                    }
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="job"
                name="job"
                rules={[
                    {
                        required: true,
                        message: 'Please input your job!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
    // return (
    //     // <Form
    //     //     form={form}
    //     //     name="basic"
    //     //     labelCol={{
    //     //         span: 8,
    //     //     }}
    //     //     wrapperCol={{
    //     //         span: 16,
    //     //     }}
    //     //     style={{
    //     //         maxWidth: 600,
    //     //     }}
    //     //     initialValues={{
    //     //         ...data,
    //     //         remember: true,
    //     //     }}
    //     //     onFinish={onFinish}
    //     //     onFinishFailed={onFinishFailed}
    //     //     autoComplete="off"
    //     // >
    //     //     <Form.Item
    //     //         label="First Name"
    //     //         name="first_name"
    //     //         rules={[
    //     //             {
    //     //                 required: true,
    //     //                 message: 'Please input your FirstName!',
    //     //             },
    //     //         ]}
    //     //     >
    //     //         <Input />
    //     //     </Form.Item>
    //     //     <Form.Item
    //     //         label="Last Name"
    //     //         name="last_name"
    //     //         rules={[
    //     //             {
    //     //                 required: true,
    //     //                 message: 'Please input your LastName!',
    //     //             },
    //     //         ]}
    //     //     >
    //     //         <Input />
    //     //     </Form.Item>
    //     //     <Form.Item
    //     //         label="Email"
    //     //         name="email"
    //     //         rules={[
    //     //             {
    //     //                 required: true,
    //     //                 message: 'Please input your Email!',
    //     //             },
    //     //         ]}
    //     //     >
    //     //         <Input />
    //     //     </Form.Item>
    //     //     {/* {type = 'register' ? (
    //     //         <Form.Item
    //     //             label="Password"
    //     //             name="password"
    //     //             rules={[
    //     //                 {
    //     //                     required: true,
    //     //                     message: 'Please input your password!',
    //     //                 },
    //     //             ]}
    //     //         >
    //     //             <Input.Password />
    //     //         </Form.Item>
    //     //     ) : null
    //     //     } */}
    //     //     {/* <Form.Item
    //     //         label="Password"
    //     //         name="password"
    //     //         rules={[
    //     //             {
    //     //                 required: true,
    //     //                 message: 'Please input your password!',
    //     //             },
    //     //         ]}
    //     //     >
    //     //         <Input.Password />
    //     //     </Form.Item> */}

    //     //     <Form.Item
    //     //         name="remember"
    //     //         valuePropName="checked"
    //     //         wrapperCol={{
    //     //             offset: 8,
    //     //             span: 16,
    //     //         }}
    //     //     >
    //     //         {/* <Checkbox>Remember me</Checkbox> */}
    //     //     </Form.Item>

    //     //     <Form.Item
    //     //         wrapperCol={{
    //     //             offset: 8,
    //     //             span: 16,
    //     //         }}
    //     //     >
    //     //         <Button type="primary" htmlType="submit">
    //     //             Submit
    //     //         </Button>
    //     //     </Form.Item>
    //     // </Form>
    // );
};
export default CustomForm;