import React from 'react'
import SectionHeading from '../atoms/SectionHeading'
import ActiveRoundsCard from '../Mole/SumTitleValue/ActiveRoundsCard'
import SumPieChart from './SumPieChart'

{/* org-2 */ }
const SumSecHome = ({ raised, raisedUnit, repaid, repaidPercent, outstanding, outstandingPercent, actRoundNo }) => {
    return (
        <>
            <div className="flex flex-col gap-y-4">
                {/* atoms-06 */}
                <SectionHeading sectionHeadingText='Summary'>
                </SectionHeading>

                <div className="flex flex-col sm:flex-row gap-4 justify-between">

                    {/* org-2.1 */}
                    <SumPieChart raised={raised} raisedUnit={raisedUnit} repaid={repaid} repaidPercent={repaidPercent} outstanding={outstanding} outstandingPercent={outstandingPercent}></SumPieChart>

                    {/* mole-7 */}
                    <ActiveRoundsCard cardAmountVal={actRoundNo} subTitle="Active Rounds"></ActiveRoundsCard>

                </div>
            </div>

        </>
    )
}

export default SumSecHome