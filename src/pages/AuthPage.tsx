import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
import styled from 'styled-components';

import { FormAuthValues } from '../type/common';
import { apiLogin } from '../app/api';

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    form {
        width: 500px;
    }
`;

export const AuthPage = () => {
    const navigate = useNavigate();

    const onSubmit = async (values: FormAuthValues) => {
        const res = await apiLogin(values);

        if (res) {
            navigate('/', { replace: true });
        }
    };

    return (
        <Wrapper>
            <Form
                onFinish={onSubmit}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
            >
                <Form.Item
                    label={'Имя пользователя'}
                    name={'username'}
                    rules={[{ required: true, message: 'Заполните поле' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={'Пароль'}
                    name={'password'}
                    rules={[{ required: true, message: 'Заполните поле' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Отправить
                    </Button>
                </Form.Item>
            </Form>
        </Wrapper>
    );
};
