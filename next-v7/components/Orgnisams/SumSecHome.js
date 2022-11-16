import React from 'react'
import SectionHeading from '../atoms/SectionHeading'
import ActiveRoundsCard from '../Mole/SumTitleValue/ActiveRoundsCard'
import SumPieChart from './SumPieChart'

{/* org-2 */ }
const SumSecHome = () => {
    return (
        <>
            <div className="flex flex-col gap-y-4">
                {/* atoms-06 */}
                <SectionHeading sectionHeadingText='Summary'>
                </SectionHeading>

                <div className="flex flex-col sm:flex-row gap-4 justify-between">

                    {/* org-2.1 */}
                    <SumPieChart raised='12.6' raisedUnit='Cr' repaid='202,180.22' outstanding='3,600,180.22'></SumPieChart>

                    {/* mole-7 */}
                    <ActiveRoundsCard cardAmountVal='3' subTitle='Active Rounds'></ActiveRoundsCard>

                </div>
            </div>

        </>
    )
}

export default SumSecHome