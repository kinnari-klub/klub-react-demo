import React from 'react'

const CardAmount = ({ cardAmountVal = '123,456.78', className = 'text-xl font-bold leading-tight text-tw-gray-100' }) => {
    return (
        <>
            <span className={className}>
                {cardAmountVal}
            </span>
        </>
    )
}

export default CardAmount