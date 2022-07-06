import React from 'react';
import { Layout } from 'antd';

import { Header as HeaderBlock } from './Header';
import { Outlet } from 'react-router-dom';
import { AuthWrapper } from '../app/AuthWrapper';

const { Header, Content } = Layout;

export const Wrapper = () => {
    return (
        <AuthWrapper>
            <Layout style={{ height: '100vh', overflow: 'auto' }}>
                <Header color={'red'}>
                    <HeaderBlock />
                </Header>
                <Content style={{ flex: 1, padding: 20 }}>
                    <Outlet />
                </Content>
            </Layout>
        </AuthWrapper>
    );
};
