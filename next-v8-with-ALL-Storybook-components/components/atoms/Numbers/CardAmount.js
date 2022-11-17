import React from 'react'
import { numberWithCommas } from '../../../functions/numWithCommas'
import RupSymbol from './RupSymbol';

const CardAmount = ({ cardAmountVal = '123,456.78', className = 'text-xl font-bold leading-tight text-tw-gray-100', rsSymbol = 'Rs' }) => {

    cardAmountVal = numberWithCommas(cardAmountVal);



    return (
        <>
            <span className={className}>
                {cardAmountVal}
            </span>
        </>
    )
}

export default CardAmount