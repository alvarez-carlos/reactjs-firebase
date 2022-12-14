import React from 'react'
import './Card.css'

const Card = ({ children }) => {
    return (
        <div className='card-container'>
            <div className='card'>
                {children}
            </div>
        </div>
    )
}

export default Card
