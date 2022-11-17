import React from 'react'
import CardSubtitle from '../../atoms/CardSubtitle'
import CardAmount from '../../atoms/Numbers/CardAmount'

{/* mole-7 */ }
const ActiveRoundsCard = ({ cardAmountVal, subTitle }) => {
    return (
        <>
            <div className="h-max px-3 py-6 flex flex-col items-center rounded-lg bg-white shadow-kb-sm">

                {/* atoms-9 */}
                <CardAmount cardAmountVal={cardAmountVal}></CardAmount>

                {/* atoms-7 */}
                <CardSubtitle subTitle={subTitle} className='text-base font-normal leading-[24px] text-tw-gray-100 w-max'>
                </CardSubtitle>
            </div>
        </>
    )
}

export default ActiveRoundsCard