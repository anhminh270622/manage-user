import React, { useEffect, useState } from 'react';
import { Table, Modal, Spin, Form } from 'antd';
import { FlexCenter, FlexSpaceBetween, FlexRight } from '../../define/flex';
import { UserAddOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { ButtonStyled } from '../../define/button';
import styled from 'styled-components';
import CustomForm from '../../modal/form';
import Warning from '../../modal/warning';
import useNotificationService from '../../notification';
import { useQuery, useMutation } from "@tanstack/react-query";
import { addUser, getUser, removeUser } from '../../../apis/user.api';
import { useNavigate } from '@tanstack/react-router';
import { useToken } from "../../../zustand/store";
const CustomFlexRight = styled(FlexRight)`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: var(--background-primary-1);
  color: var(--color-white);
`;

const Container = () => {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [type, setType] = useState('');
    const [warning, setWarning] = useState(false);
    const [id, setId] = useState('');
    const [dataEditable, setDataEditable] = useState({});
    const [token, setToken] = useState(localStorage.getItem('token'));
    const { openNotification, contextHolder } = useNotificationService()
    const { mutateAsync } = useMutation({
        mutationFn: addUser,
    });
    const { mutate, isLoadingDelete, isErrorDelete, errorDelete } = useMutation({ mutationFn: removeUser });
    const { isLoading, error, data } = useQuery({ queryKey: ['users'], queryFn: getUser });
    const dataApi = data?.data;
    const [form] = Form.useForm();
    const navigate = useNavigate();
    // const token = useToken(state => state.token);


    // useEffect(() => {
    //     console.log('token:', token);
    // }, [token])

    if (isLoading) return <FlexCenter><Spin /></FlexCenter>
    if (error) return <div>Error: {error.message}</div>

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
            width: '40%',

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
                        onClick={() => openFormEdit(record)}
                        disabled={!token ? true : false}
                        icon={<EditOutlined />}
                    >Sửa</ButtonStyled>
                    <ButtonStyled
                        title={!token ? 'Vui lòng đăng nhập để xóa' : ''}
                        type={!token ? 'primary' : 'delete'}
                        onClick={() => openWarning(record.id)}
                        disabled={!token ? true : false}
                        icon={<DeleteOutlined />}
                    >Xóa</ButtonStyled>
                </React.Fragment>
            ),
        },
    ];


    // const [page] = useSearchParams();
    // const searchParamsObject = Object.fromEntries([...useSearchParams()]);
    // console.log(searchParamsObject);
    const openFormEdit = (data) => {
        navigate(`/${data.id}`);
        setType('edit');
        setOpen(true)
        setDataEditable(data);
    }

    const openFormAddNew = async (value) => {
        setType('add');
        setOpen(true);
        try {
            mutateAsync(value);
            openNotification('success', 'Thêm mới thành công')
            form.resetFields();
            setOpen(false)
        } catch (error) {
            openNotification('error', 'Lỗi')
            console.error('Error:', error);
        }
    }
    const openAddForm = async () => {
        setType('add');
        setOpen(true);
    }
    const openWarning = (id) => {
        setWarning(true);
        setId(id);

    }
    const deleteUser = () => {
        try {
            mutate(id);
            setWarning(false);
            openNotification('success', 'Xóa thành công');
        } catch (error) {
            openNotification('error', 'Lỗi')
            console.error('Error:', error);
        }
    }
    const closeForm = () => {
        setOpen(false);
        form.resetFields();
    }

    return (
        <div>
            {contextHolder}
            <Modal
                title={type === 'add' ? 'Thêm mới tài khoản' : 'Chỉnh sửa thông tin'}
                open={open}
                onOk={() => setOpen(false)}
                onCancel={closeForm}
                footer={null}
            >
                <CustomForm
                    data={type === 'edit' ? dataEditable : ''}
                    form={form}
                    onFinish={type === 'edit' ? '' : openFormAddNew}
                    type={type}
                    openFormAddNew={openFormAddNew} />
            </Modal>
            <Modal
                open={warning}
                onOk={() => deleteUser(false)}
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
                    Thêm mới
                </ButtonStyled>
            </CustomFlexRight>
            <Table
                style={{ minHeight: '570px' }}
                columns={columns}
                dataSource={dataApi}
                pagination={{ pageSize: 5 }}
            />
        </div>
    );
};
export default Container;