import React from 'react'

const Button = ({ clickHandler, title }) => {  

    return (
        <button type='submit' onClick={clickHandler}>{title}</button>
    )
}

export default Button