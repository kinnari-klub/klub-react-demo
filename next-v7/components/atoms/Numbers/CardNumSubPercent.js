import React from 'react'

const CardNumSubPercent = ({ className = 'text-base font-medium leading-normal text-tw-gray-80', subPercent }) => {
    return (
        <>
            <span className={className}>
                {`(${subPercent}%)`}
            </span>
        </>
    )
}

export default CardNumSubPercent