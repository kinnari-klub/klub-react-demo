import React from 'react'
import CardAmount from '../../atoms/Numbers/CardAmount'
import CardAmountUnit from '../../atoms/Numbers/CardAmountUnit'
import RupSymbol from '../../atoms/Numbers/RupSymbol'

{/* mole-3 */ }
const CardNumWU = ({ className = 'text-xl font-bold leading-tight text-tw-gray-100', unit = '', cardAmountVal }) => {
    return (
        <>
            <div className={`flex gap-x-2 items-baseline ${className}`}>

                <div className="">
                    {/* atoms-8 */}
                    <RupSymbol className={`${className}`}>
                    </RupSymbol>

                    {/* atoms-9 */}
                    <CardAmount cardAmountVal={cardAmountVal} className={`${className}`}>
                    </CardAmount>
                </div>

                {/*  atoms-10 */}
                <CardAmountUnit unit={unit}></CardAmountUnit>
            </div>
        </>
    )
}

export default CardNumWU