import React from 'react';

import img_fan_1 from '../../../images/img-fan-1.png';

import './Player.css';

const player = (props) => {
    return (
        <img className='player' src={img_fan_1} alt="Player Image" />
    );
};

export default player;