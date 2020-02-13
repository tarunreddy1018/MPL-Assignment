import React from 'react';

import './Coupon.css';

const coupon = (props) => {
    return (
        <div class="coupon">
            <div class="coupon-text">
                <h3><i>{props.couponContent.freeCashText}</i></h3>
                <div class="amount">{props.couponContent.amount}</div>
                <h3><i>{props.couponContent.referralCodeText}</i></h3>
                <div class="code"><b>{props.couponContent.referralCode}</b></div>
            </div>
        </div>
    );
};

export default coupon;