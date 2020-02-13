import React from 'react';

import cta_android from '../../../images/cta-android.png';

import './Android.css';

const android = (props) => {
    return (
        <div className='android-container'>
            <img className='android' src={cta_android} alt="Android Image" /> 
        </div>
    );
};

export default android;