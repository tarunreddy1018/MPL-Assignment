import React from 'react';

import './Footer.css';

const footer = (props) => {
    return (
        <div className="footer_container">
            <p className="footer">
                {props.text}
            </p>
        </div>
    );
};

export default footer;