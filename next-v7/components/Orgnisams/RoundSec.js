import React from 'react'
import SectionHeading from '../atoms/SectionHeading'
import RoundCard from '../Mole/Rounds/RoundCard'

{/* org-03 */ }
const RoundSec = () => {
    return (
        <>
            <div className="flex flex-col gap-y-4">
                {/* atoms-6 */}
                <SectionHeading sectionHeadingText='Rounds'>
                </SectionHeading>

                <div className="grid md:grid-cols-2 gap-4">

                    {/* mole-9 */}
                    <RoundCard roundNo='4' roundDate='16 May ‘23' roundRsTotal='65' roundRsUnit='Lakh' outStandingRs='787,689' rePaidRs='143,544' status='active'>
                    </RoundCard>

                    {/* mole-9 */}
                    <RoundCard roundNo='3' roundDate='16 May ‘23' roundRsTotal='82.4' roundRsUnit='Lakh' outStandingRs='787,689' rePaidRs='143,544' status='active'>
                    </RoundCard>

                    {/* mole-9 */}
                    <RoundCard roundNo='1' roundDate='16 May ‘23' roundRsTotal='65' roundRsUnit='Lakh' outStandingRs='' rePaidRs='' status='closed'>
                    </RoundCard>

                    {/* mole-9 */}
                    <RoundCard roundNo='2' roundDate='16 May ‘23' roundRsTotal='65' roundRsUnit='Lakh' outStandingRs='' rePaidRs='' status='closed'>
                    </RoundCard>
                </div>
            </div>
        </>
    )
}

export default RoundSec