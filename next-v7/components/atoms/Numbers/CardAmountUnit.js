import React from 'react'

const CardAmountUnit = ({ unit = '', className = '' }) => {

    if (unit == '') { return (<></>) }
    else {
        return (
            <>
                <span className={className}>
                    {unit}
                </span>
            </>
        )
    }




}

export default CardAmountUnit