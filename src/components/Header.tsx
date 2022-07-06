import React from 'react';
import { Col, Menu, Row, Space } from 'antd';
import { Button, Tooltip } from 'antd';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { MenuInfo } from 'rc-menu/lib/interface';

const menuItems = [
    {
        label: 'Главная',
        url: '/',
        key: 'home'
    },
    {
        label: 'Продукты',
        key: 'products',
        url: '/products'
    }
];

export const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedKeys, setSelectedKeys] = React.useState(['']);

    React.useEffect(() => {
        const menuItem = menuItems.find((row) => row.url === location.pathname);
        if (menuItem) {
            setSelectedKeys([menuItem.key]);
        }
    }, []);

    const handleLogout = React.useCallback(() => {
        localStorage.clear();
        navigate('/auth');
    }, [navigate]);

    const handleClickMenu = React.useCallback(
        ({ keyPath, key }: MenuInfo) => {
            setSelectedKeys(keyPath);
            const menuItem = menuItems.find((row) => row.key === key);
            if (menuItem?.url) {
                navigate(menuItem.url);
            }
        },
        [navigate]
    );

    return (
        <Row wrap={false}>
            <Col flex={'auto'}>
                <div>
                    <Menu
                        selectedKeys={selectedKeys}
                        items={menuItems}
                        theme={'dark'}
                        mode="horizontal"
                        onClick={handleClickMenu}
                    />
                </div>
            </Col>
            <Col flex={'100px'}>
                <Space size={8}>
                    <Tooltip title="Профиль">
                        <Button
                            onClick={handleLogout}
                            type="primary"
                            shape="circle"
                            icon={<UserOutlined />}
                        />
                    </Tooltip>
                    <Tooltip title="Выход">
                        <Button
                            onClick={handleLogout}
                            type="primary"
                            shape="circle"
                            icon={<LogoutOutlined />}
                        />
                    </Tooltip>
                </Space>
            </Col>
        </Row>
    );
};
