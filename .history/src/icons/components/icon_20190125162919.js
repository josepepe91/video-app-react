import React from 'react';

function Icon(props) {
    return (
        <svg
            height={props.height}
            width={props.width}>
            fill={props.color}
            {props.children}
        </svg>
    )
}

export default Icon;
