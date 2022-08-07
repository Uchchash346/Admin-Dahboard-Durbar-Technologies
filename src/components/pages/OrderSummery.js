import React from 'react'
import { Col, Row } from 'antd';
import '../styles/OrderSummery.css'
import PieCharts from './PieCharts';
import { RevenueChart } from './RevenueChart';

const OrderSummery = () => {
  return (
    <>
      <Row className='order-summery-area'
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className="gutter-row" span={12}>
          <div>
            <p className='order-summery-header'>Order Summery</p>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div>
            <a className='tab-link' href="/">Monthly</a>
            <a className='tab-link' href="/">Weekly</a>
            <a className='tab-link' href="/">Today</a>
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div>
            <PieCharts />
          </div>
          <div className='number-group'>
            <div className='number-section'>
              <p className='number-area'>25</p>
              <p>On Delivery</p>
            </div>
            <div className='number-section'>
              <p className='number-area'>60</p>
              <p>Delivered</p>
            </div>
            <div className='number-section'>
              <p className='number-area'>7</p>
              <p>Canceled</p>
            </div>
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div>
            <p className='order-amount-header'>$456,005.56</p>
            <p>from $500,000.00</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
          </div>
        </Col>
      </Row>
      <Row className='revenue-section'
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className="gutter-row revenue-area" span={12}>
          <p className='revenue-header'>Revenue</p>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
        </Col>
        <Col className="gutter-row" span={24}>
          <RevenueChart className="rev-chart" />
        </Col>
      </Row>
    </>
  )
}

export default OrderSummery