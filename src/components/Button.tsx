import React from 'react'

const Button = ({ color, bgColor, text, borderRadius, size }) => {
    return (
        <button
            type="button"
            className={`text-${size} p-3 hover:drop-shodow-xl`}
            style={{ backgroundColor: bgColor, color, borderRadius }} >
            {text}
        </button>
    )
}

export default Button
