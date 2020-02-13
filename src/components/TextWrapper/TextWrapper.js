import React from 'react';

import './TextWrapper.css';

const textWrapper = (props) => {
    return (
        <div class="text-wrapper">
            <h1><i>{props.textWrapperContent.userName}</i></h1>
            <p><i>{props.textWrapperContent.invitation}</i></p>
        </div>
    );
};

export default textWrapper;