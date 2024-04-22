import { Button, Form, Input } from 'antd';
import React, { useEffect } from 'react';
import { useStore } from '../../zustand/store';

const onFinishFailed = (errorInfo) => {};
const CustomForm = ({ data, onFinish, type, form }) => {
	const [formData] = Form.useForm();
	const { userUpdate } = useStore();
	useEffect(() => {
		if (!userUpdate) return formData.resetFields();
		formData.setFieldsValue({
			...userUpdate,
		});
	}, [userUpdate, formData]);
	return (
		<Form
			form={formData}
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
					},
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
};
export default CustomForm;
