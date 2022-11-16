import React from 'react'

const CardTitle = ({ cardTitle, className = 'w-max text-xl font-bold leading-tight text-black' }) => {
    return (
        <>
            <h4 className={`${className}`}>
                {cardTitle}
            </h4>
        </>
    )
}

export default CardTitle