import React from 'react'
import "../../styles/global.css"

const Button = ({ children, className, disabled, onClick }) => {
    return (
        <button
            className={className}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button