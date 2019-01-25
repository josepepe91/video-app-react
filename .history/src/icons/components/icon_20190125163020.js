import React from 'react';

function Icon(props) {
    const {
        color,
        size
    } = props
    return (
        <svg
            height={props.height}
            width={props.width}>
            fill={props.color}
            viewBox="0 0 32 32"
            {props.children}
        </svg>
    )
}

export default Icon;
