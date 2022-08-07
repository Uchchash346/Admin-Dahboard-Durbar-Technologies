import React, { useState } from 'react';
import { Button, Space } from 'antd';
import { Layout, Menu, Input, Col, Row } from 'antd';
import '../styles/Sidebar.css';
import siteLogo from '../../images/logo.png';
import foodServeIcon from '../../images/food-serving.png';
import bellIcon from '../../images/ic_bell.png';
import chatIcon from '../../images/ic_chat.png';
import settingIcon from '../../images/ic_setting.png';
import bonusIcon from '../../images/bonus 1.png';
import oneIcon from '../../images/one.png';
import twoIcon from '../../images/two.png';
import fiveIcon from '../../images/five.png';
import twelveIcon from '../../images/twelve.png';
import AmountSection from './AmountSection';
import OrderSummery from './OrderSummery';
import Revenue from './Revenue';
import CustomerSection from './CustomerSection';
import { AiOutlineHome, AiOutlineMenu } from 'react-icons/ai';
import { GrNotes } from 'react-icons/gr';
import { TbDeviceAnalytics } from 'react-icons/tb';
import { FiUsers } from 'react-icons/fi';

const { Header, Sider, Content } = Layout;
const onSearch = (value) => console.log(value);

const Sidebar = () => {

    const [collapsed, setCollapsed] = useState(false);
    const [size, setSize] = useState('large');
    const { Search } = Input;

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>

                <img src={siteLogo} className="site-logo" alt="" />

                <Menu
                    // theme="light"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <AiOutlineHome />,
                            label: 'Dashboard',
                        },
                        {
                            key: '2',
                            icon: <GrNotes />,
                            label: 'Orders',
                        },
                        {
                            key: '3',
                            icon: <AiOutlineMenu />,
                            label: 'Menus',
                        },
                        {
                            key: '4',
                            icon: <FiUsers />,
                            label: 'Customers',
                        },
                        {
                            key: '5',
                            icon: <TbDeviceAnalytics />,
                            label: 'Analytics',
                        },
                    ]}
                />
                <img
                    src={foodServeIcon}
                    alt=""
                    className="food-serve-icon"
                />
                <p className="food-serve-header">Organize your menus <br />through button bellow</p>
                <p className="food-serve-description">Lorem ipsum dolor sit amet</p>
                <Button type="primary" shape="round" size={size} className="menu-button">
                    + Add Menus
                </Button>
                <p className="copyright-area">Sego Restaurant Admin Dashboard
                    <br />
                    <span className="copyright-area-1">© 2020 All Rights Reserved</span>
                    <br />
                    <span className="copyright-area-2">Made with ❤️ by Peterdraw</span>
                </p>
            </Sider>
            <Layout className="site-layout">
                <div className="main">
                    <p className="dashboard-header">Dashboard</p>
                    <p className="dashboard-header-admin">Welcome to Davur Admin!</p>
                    <Search
                        placeholder="Search Here"
                        onSearch={onSearch}
                        className="input-search-area"
                    />
                    <div className="notification-area">
                        <div className="notification-bar">
                            <img className="bellIcon" src={bellIcon} alt="" />
                            <img className="twelveIcon" src={twelveIcon} alt="" />
                            <img className="chatIcon" src={chatIcon} alt="" />
                            <img className="fiveIcon" src={fiveIcon} alt="" />
                            <img className="bonusIcon" src={bonusIcon} alt="" />
                            <img className="twoIcon" src={twoIcon} alt="" />
                            <img className="settingIcon" src={settingIcon} alt="" />
                            <img className="oneIcon" src={oneIcon} alt="" />
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    <AmountSection />
                    <OrderSummery />
                    <Revenue />
                </Content>
                <CustomerSection />
            </Layout>
        </Layout>
    );
};

export default Sidebar;