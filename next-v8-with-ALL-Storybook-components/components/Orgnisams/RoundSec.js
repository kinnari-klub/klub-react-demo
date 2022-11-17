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
                    <RoundCard roundNo='4' roundDate='16/10/2019' roundRsTotal='6559654' outStandingRs='787689' rePaidRs='143544' closedDate='' status='active'>
                    </RoundCard>

                    {/* mole-9 */}
                    <RoundCard roundNo='3' roundDate='16/10/2019' roundRsTotal='2348596' outStandingRs='787689' rePaidRs='143544' closedDate='' status='active'>
                    </RoundCard>

                    {/* mole-9 */}
                    <RoundCard roundNo='1' roundDate='16/10/2019' roundRsTotal='7458369' outStandingRs='' rePaidRs='' closedDate='15/10/2023' status='closed'>
                    </RoundCard>

                    {/* mole-9 */}
                    <RoundCard roundNo='2' roundDate='16/10/2019' roundRsTotal='3654159' outStandingRs='' rePaidRs='' closedDate='27/09/2022' status='closed'>
                    </RoundCard>
                </div>
            </div>
        </>
    )
}

export default RoundSec