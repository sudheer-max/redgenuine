import React from 'react';

const Google = ({ children, ...otherProps }) => {
    return (
        <button class="thm-btn bg-clr1" {...otherProps}> {children}</button>
    )
}

export default Google;
