import {
	DeleteOutlined,
	EditOutlined,
	UserAddOutlined,
} from '@ant-design/icons';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Link, useNavigate } from '@tanstack/react-router';
import { Form, Modal, Spin, Table, Typography } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';
import {
	addUser,
	getUser,
	removeUser,
	updateUser,
} from '../../../apis/user.api';
import { useStore } from '../../../zustand/store';
import { ButtonStyled } from '../../define/button';
import { FlexCenter, FlexRight } from '../../define/flex';
import CustomForm from '../../modal/form';
import Warning from '../../modal/warning';
import useNotificationService from '../../notification';
const CustomFlexRight = styled(FlexRight)`
	width: 100%;
	margin: 0 auto;
	padding: 20px;
	background-color: var(--background-primary-1);
	color: var(--color-white);
`;

const Container = () => {
	const [open, setOpen] = useState(false);
	const [type, setType] = useState('');
	const [warning, setWarning] = useState(false);
	const [id, setId] = useState('');
	const { openNotification, contextHolder } = useNotificationService();
	const { mutateAsync } = useMutation({
		mutationFn: addUser,
	});
	const { mutate } = useMutation({ mutationFn: removeUser });
	const { mutate: mutateUpdate } = useMutation({ mutationFn: updateUser });
	const { isLoading, error, data } = useQuery({
		queryKey: ['users'],
		queryFn: getUser,
	});
	const dataApi = data?.data;
	const [form] = Form.useForm();
	const navigate = useNavigate();
	const { token, setUserUpdate } = useStore();
	if (isLoading)
		return (
			<FlexCenter>
				<Spin />
			</FlexCenter>
		);
	if (error) return <div>Error: {error.message}</div>;

	const columns = [
		{
			title: 'Avatar',
			dataIndex: 'avatar',
			render: (_, record) => (
				<img
					src={record.avatar}
					alt="avatar"
					style={{ width: 50, height: 50, borderRadius: '50%' }}
				/>
			),
			width: '10%',
		},
		{
			title: 'Full Name',
			dataIndex: 'full_name',
			render: (text, record) => `${record.first_name} ${record.last_name}`,
			width: '30%',
		},
		{
			title: 'Email',
			dataIndex: 'email',
			width: '35%',
		},
		{
			title: 'Action',
			dataIndex: 'action',
			render: (_, record) => (
				<React.Fragment>
					<ButtonStyled
						title={!token ? 'Vui lòng đăng nhập để sửa' : ''}
						type="primary"
						style={{ margin: '0 10px 10px 0' }}
						onClick={() => openEditForm(record)}
						disabled={!token ? true : false}
						icon={<EditOutlined />}
					>
						Edit
					</ButtonStyled>
					{/* <ButtonStyled
                        style={{ margin: '10px' }}
                        type="primary"
                        icon={<InfoCircleOutlined />}
                    >Detail</ButtonStyled> */}
					<ButtonStyled
						title={!token ? 'Vui lòng đăng nhập để xóa' : ''}
						type={!token ? 'primary' : 'delete'}
						onClick={() => openWarning(record.id)}
						disabled={!token ? true : false}
						icon={<DeleteOutlined />}
					>
						Delete
					</ButtonStyled>
				</React.Fragment>
			),
		},
	];
	const SubmitFormEdit = (data) => {
		setType('edit');
		try {
			mutateUpdate({ name: data.name, job: data.job, id: id });
			openNotification('success', 'Sửa thành công');
			setOpen(false);
			form.resetFields();
			setUserUpdate('');
		} catch (error) {
			console.error('Error:', error);
		}
	};
	const openEditForm = (value) => {
		setOpen(true);
		setUserUpdate({
			name: `${value.first_name + ' ' + value.last_name}`,
			job: '',
			id: value.id,
		});
		setId(value.id);
		setType('edit');
	};
	const openFormAddNew = async (value) => {
		setType('add');
		try {
			mutateAsync(value);
			openNotification('success', 'Thêm mới thành công');
			form.resetFields();
			setOpen(false);
		} catch (error) {
			openNotification('error', 'Lỗi');
			console.error('Error:', error);
		}
	};
	const openAddForm = () => {
		form.resetFields();
		setType('add');
		setOpen(true);
	};
	const openWarning = (id) => {
		setWarning(true);
		setId(id);
	};
	const deleteUser = () => {
		try {
			mutate(id);
			setWarning(false);
			openNotification('success', 'Xóa thành công');
		} catch (error) {
			openNotification('error', 'Lỗi');
			console.error('Error:', error);
		}
	};
	const closeForm = () => {
		setOpen(false);
		form.resetFields();
		setUserUpdate('');
	};
	return (
		<div>
			{contextHolder}
			<Modal
				title={type === 'add' ? 'Add new account' : 'Edit account'}
				open={open}
				onOk={() => setOpen(false)}
				onCancel={closeForm}
				footer={null}
			>
				<CustomForm
					form={form}
					onFinish={type === 'edit' ? SubmitFormEdit : openFormAddNew}
					type={type}
				/>
			</Modal>
			<Modal
				open={warning}
				onOk={() => deleteUser()}
				onCancel={() => setWarning(false)}
			>
				<Warning text={'Bạn chắc chắn muốn xóa không ?'} />
			</Modal>
			<CustomFlexRight>
				<ButtonStyled
					title={!token ? 'Vui lòng đăng nhập để thêm mới' : ''}
					type="primary"
					style={{ marginRight: '30px' }}
					icon={<UserAddOutlined />}
					onClick={openAddForm}
					disabled={!token ? true : false}
				>
					Add new
				</ButtonStyled>
			</CustomFlexRight>
			<Table
				style={{ minHeight: '530px' }}
				columns={columns}
				dataSource={dataApi}
				pagination={{ pageSize: 5 }}
				scroll={{
					y: 'calc(100vh - 400px)',
				}}
			/>
		</div>
	);
};
export default Container;
