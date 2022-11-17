import React from 'react'
import CardAmount from '../../atoms/Numbers/CardAmount'
import CardNumSubPercent from '../../atoms/Numbers/CardNumSubPercent'
import RupSymbol from '../../atoms/Numbers/RupSymbol'


{/* mole-4 */ }
const CardNumWP = ({ className = 'text-xl font-bold leading-tight text-tw-gray-100', cardAmountVal, subPercent }) => {

    return (
        <>
            <div className="flex gap-x-2 items-baseline">
                <span className={`${className}`}>
                    {/* atoms-8 */}
                    <RupSymbol className={`${className}`}>
                    </RupSymbol>

                    {/* atoms-9 */}
                    <CardAmount className={`${className}`} cardAmountVal={cardAmountVal}>
                    </CardAmount>
                </span>

                {/* atoms-10 */}
                <CardNumSubPercent subPercent={subPercent}>
                </CardNumSubPercent>
            </div>


        </>
    )
}

export default CardNumWP