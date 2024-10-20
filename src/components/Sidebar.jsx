import React, { useState } from 'react';
import {
    HomeOutlined,
    PropertySafetyOutlined,
    TeamOutlined,
    DollarOutlined,
    FileTextOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import {Link} from "react-router-dom";

const { Header, Sider, Content } = Layout;

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Sider
            width="280"
            className="sticky top-0"
            onCollapse={(value) => setCollapsed(value)}
            collapsible
            collapsed={collapsed}
        >
            {/* Лого сайта */}
            <div className="logo-container">
                <img
                    className={`logo h-16 transition-opacity duration-500 ease-in-out ${collapsed ? 'opacity-0 hidden' : 'opacity-100'}`}
                    src="/logo.svg"
                    alt="Logo"
                />
                {/* Logo for collapsed state */}
                <img
                    className={`logo h-16 transition-opacity duration-500 ease-in-out ${collapsed ? 'opacity-100' : 'hidden  opacity-0'}`}
                    src="/logo2.svg"
                    alt="Logo Collapsed"
                />
            </div>
            {/* Меню навигации */}
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[
                    {
                        key: '1',
                        icon: <HomeOutlined style={{ fontSize: '24px' }} />, // Increased size
                        label: <Link to="/">Главная</Link>,
                    },
                    {
                        key: '2',
                        icon: <PropertySafetyOutlined style={{ fontSize: '24px' }} />, // Increased size
                        label: <Link to="/properties">Объекты недвижимости</Link>,
                    },
                    {
                        key: '3',
                        icon: <TeamOutlined style={{ fontSize: '24px' }} />, // Increased size
                        label: <Link to="/clients">Клиенты</Link>,
                    },
                    {
                        key: '4',
                        icon: <DollarOutlined style={{ fontSize: '24px' }} />, // Increased size
                        label: <Link to="/sales">Продажи</Link>,
                    },
                    {
                        key: '5',
                        icon: <FileTextOutlined style={{ fontSize: '24px' }} />, // Increased size
                        label: <Link to="/transactions">Платежи</Link>,
                    },
                    {
                        key: '6',
                        icon: <FileTextOutlined style={{ fontSize: '24px' }} />, // Increased size
                        label: <Link to="/reports">Отчеты</Link>,  // Добавляем ссылку на страницу Отчеты
                    },
                    {
                        key: '7',
                        icon: <SettingOutlined style={{ fontSize: '24px' }} />, // Increased size
                        label: 'Настройки',
                    },
                ]}
            />
        </Sider>
    );
};

export default Sidebar;
