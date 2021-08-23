import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ text, onClick, onChange, background, borderColor }) => {
    return (
    <button
        type="button"
        className='btn'
        style={{background: background, borderColor: borderColor}}
        onClick={onClick}
        onChange={onChange}>
        {text}
    </button>
    )
}



Button.propTypes = {
    text: PropTypes.string
}

export default Button
