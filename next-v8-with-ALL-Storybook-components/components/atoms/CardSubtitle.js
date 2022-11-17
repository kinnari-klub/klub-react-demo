import React from 'react'

const CardSubtitle = ({ subTitle = '', className = 'w-max text-sm font-normal leading-[24px] text-tw-gray-80' }) => {

    return (
        <>
            <h5 className={`${className}`}>
                {subTitle}
            </h5>
        </>
    )
}

export default CardSubtitle