import React from 'react'
import PropTypes from 'prop-types'
// import Button from './Button'

const Header = ({ title }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            {/* <Button text='menu'/> */}
        </header>
    )
}

Header.defaultProps = {
    title: 'notion',
}

Header.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func
}

export default Header
