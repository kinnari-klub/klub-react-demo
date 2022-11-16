import React from 'react'
import SumTitleValue from '../Mole/SumTitleValue/SumTitleValue'

{/* org-2.1 */ }
const SumPieChart = ({ raised, repaid, outstanding, raisedUnit }) => {
    return (
        <>
            <div className='w-full flex justify-between flex-wrap items-baseline gap-x-6 gap-y-6 bg-white py-6 px-8 shadow-sm rounded-lg'>

                {/* mole-5.1 */}
                <SumTitleValue subTitle='Raised' cardAmountVal={raised} unit={raisedUnit}>
                </SumTitleValue>

                {/* mole-5.2 */}
                <SumTitleValue subTitle='Repaid' cardAmountVal={repaid} subPercent='12'>
                </SumTitleValue>

                {/* mole-5.2 */}
                <SumTitleValue subTitle='Outstanding' cardAmountVal={outstanding} subPercent='88'>
                </SumTitleValue>
            </div>

        </>
    )
}

export default SumPieChart