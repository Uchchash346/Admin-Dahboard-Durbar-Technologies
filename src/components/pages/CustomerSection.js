import React from 'react';
import CustomerMap from './CustomerMap';
import '../styles/CustomerSection.css';
import transactionImg from '../../images/transaction.png';

const CustomerSection = () => {
    return (
        <>
            <div className='customer-map-area'>
                <h1>Customer Map</h1>
                <CustomerMap />
                <img src={transactionImg} className='transaction' alt="" />
            </div>
        </>
    )
}

export default CustomerSection