import React from 'react'
import CardSubtitle from '../../atoms/CardSubtitle'
import CardNumWP from '../CardNumber/CardNumWP'
import CardNumWU from '../CardNumber/CardNumWU';

const SumTitleValue = ({ subTitle, cardAmountVal, subPercent, unit = '' }) => {

    // Two Molecules Made from this Molcules...
    // 1. with Percentage
    // 2. with Unit

    const IsSubPercent = () => {
        if (subPercent == undefined || subPercent == '') {
            return (
                <>
                    {/* mole-3 */}
                    <CardNumWU cardAmountVal={cardAmountVal} unit={unit}></CardNumWU>
                </>
            )
        } else {
            return (
                <>
                    {/* mole-4 */}
                    <CardNumWP cardAmountVal={cardAmountVal}
                        subPercent={subPercent}>
                    </CardNumWP>
                </>
            )
        }
    }

    return (
        <>
            <div className="flex flex-col items-start">
                <div className="w-max">
                    {/* atoms-7 */}
                    <CardSubtitle subTitle={subTitle}>
                    </CardSubtitle>
                </div>
                <div className="w-max">
                    <h4 className="text-sm font-normal leading-6 text-tw-gray-70">
                        {/* mole-3 || mole-4 */}
                        <IsSubPercent></IsSubPercent>
                    </h4>
                </div>
            </div>
        </>
    )
}

export default SumTitleValue