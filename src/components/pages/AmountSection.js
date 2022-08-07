import React from 'react';
import '../styles/AmountSection.css';
import { Col, Row } from 'antd';
import revenueIcon from '../../images/revenue.png';
import customerIcon from '../../images/customer.png';
import menuIcon from '../../images/menu.png';
import orderIcon from '../../images/order.png';

const AmountSection = () => {
    return (
        <div className='amount-section-area'>
            <Row>
                <Col span={6}>
                    <div className="card-desc">
                        <div className="card-text-area">
                            <h2>$459</h2>
                            <h4>Total Menus</h4>
                        </div>
                        <div className="card-image-area">
                            <img src={menuIcon} alt="" />
                        </div>
                    </div>
                </Col>
                <Col span={6}>
                    <div className="card-desc">
                        <div className="card-text-area">
                            <h2>$87561</h2>
                            <h4>Total Revenue</h4>
                        </div>
                        <div className="card-image-area">
                            <img src={revenueIcon} alt="" />
                        </div>
                    </div>
                </Col>
                <Col span={6}>
                    <div className="card-desc">
                        <div className="card-text-area">
                            <h2>247</h2>
                            <h4>Total Orders</h4>
                        </div>
                        <div className="card-image-area">
                            <img src={orderIcon} alt="" />
                        </div>
                    </div>
                </Col>
                <Col span={6}><div className="card-desc">
                    <div className="card-text-area">
                        <h2>872</h2>
                        <h4>Total Customers</h4>
                    </div>
                    <div className="card-image-area">
                        <img src={customerIcon} alt="" />
                    </div>
                </div></Col>
            </Row>
        </div>
    );
};

export default AmountSection;