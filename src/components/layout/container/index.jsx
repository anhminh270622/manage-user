import React, { useState } from 'react';
import { Table, Modal } from 'antd';
import { FlexSpaceBetween } from '../../define/flex';
import { UserAddOutlined, ReloadOutlined } from '@ant-design/icons';
import { ButtonStyled } from '../../define/button';
import styled from 'styled-components';
import CustomForm from '../../modal/form';
import Warning from '../../modal/warning';
import useNotificationService from '../../notification';
const CustomFlexSpaceBetween = styled(FlexSpaceBetween)`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: var(--background-button-edit);
`;


const Container = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [type, setType] = useState('add');
    const [warning, setWarning] = useState(false);
    const { openNotification, contextHolder } = useNotificationService()
    const columns = [
        {
            title: 'Avatar',
            dataIndex: 'avatar',
            render: (_, record) => (
                <img
                    src={'https://reqres.in/img/faces/7-image.jpg'}
                    alt="avatar"
                    style={{ width: 50, height: 50, borderRadius: '50%' }}
                />
            ),
            width: '10%',

        },
        {
            title: 'Name',
            dataIndex: 'name',
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
                    <ButtonStyled type="edit" style={{ marginRight: '10px' }} onClick={openFormEdit}>Sửa</ButtonStyled>
                    <ButtonStyled type="delete" onClick={openWarning}>Xóa</ButtonStyled>
                </React.Fragment>
            ),
        },
    ];
    const data = [];
    for (let i = 0; i < 7; i++) {
        data.push({
            key: i,
            name: `Name${i}`,
            email: `test${i}@gmail.com`,
        });
    }
    const openFormEdit = () => {
        setOpen(true)
        setType('edit');
    }
    const openFormAddNew = () => {
        setOpen(true);
        setType('add');
    }
    const openWarning = () => {
        setWarning(true);
    }
    const deleteUser = () => {
        setWarning(false);
        openNotification('success', 'Xóa thành công')
    }
    const start = () => {
        setLoading(true);
        // ajax request after empty completing
        setTimeout(() => {
            setSelectedRowKeys([]);
            setLoading(false);
        }, 1000);
    };
    const onSelectChange = (newSelectedRowKeys) => {
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
        <div>
            {contextHolder}
            <Modal
                title={type === 'add' ? 'Thêm mới tài khoản' : 'Chỉnh sửa thông tin'}
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
            >
                <CustomForm />
            </Modal>
            <Modal
                open={warning}
                onOk={() => deleteUser(false)}
                onCancel={() => setWarning(false)}
            >
                <Warning />
            </Modal>
            <CustomFlexSpaceBetween style={{ width: '100%', margin: '0 auto', padding: '20px' }}>
                <div>
                    <ButtonStyled type="primary" onClick={start} disabled={!hasSelected} loading={loading} icon={<ReloadOutlined />}>
                        Reload
                    </ButtonStyled>
                    <span
                        style={{
                            marginLeft: 8,
                        }}
                    >
                        {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                    </span>
                </div>
                <ButtonStyled type="primary" icon={<UserAddOutlined />} onClick={openFormAddNew}>
                    Thêm mới
                </ButtonStyled>
            </CustomFlexSpaceBetween>
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
        </div>
    );
};
export default Container;