import React from 'react'
import CardSubtitle from '../../atoms/CardSubtitle'
import CardNumWU from '../CardNumber/CardNumWU'
import RoundInfo from './RoundInfo'
import RoundValueTitle from './RoundValueTitle'
import { ChangeFormatOfDate } from '../../../functions/convertDate'
import { numberWithCommas } from '../../../functions/numWithCommas'

{/* mole-9 */ }
const RoundCard = ({ roundNo = '', roundDate = '', roundRsTotal, roundRsUnit, outStandingRs, rePaidRs, status = 'active', closedDate = '' }) => {

    roundDate = ChangeFormatOfDate(roundDate);
    closedDate = ChangeFormatOfDate(closedDate);
    outStandingRs = numberWithCommas(outStandingRs);
    rePaidRs = numberWithCommas(rePaidRs);

    const RoundCard2ndRow = () => {
        if (status == 'active') {
            return (
                <>
                    <div className="grid grid-flow-col justify-between gap-x-14 items-baseline">
                        {/* 8.1 :: Molecules */}
                        <RoundValueTitle subTitle="Total outstanding" cardAmountVal={outStandingRs} curSymbol='Rs'></RoundValueTitle>

                        {/* 8.2 :: Molecules */}
                        <RoundValueTitle subTitle="Total Repaid" cardAmountVal={rePaidRs} curSymbol='Rs' alignItems='items-end'></RoundValueTitle>

                    </div>
                </>
            )

        } else {
            return (
                <>
                    <div className="p-3 bg-tw-gray-20 rounded-lg">
                        {/* atoms-7 */}
                        <CardSubtitle subTitle={`'Closed on ${closedDate} `} className='  text-sm font-bold text-tw-gray-100 leading-6 '></CardSubtitle>
                    </div>
                </>
            );
        }
    }

    return (
        <>
            <div className='bg-white shadow-kb-sm rounded-lg w-full 
            max-w-md px-4 py-6'>

                <div className="grid gap-y-5">

                    <div className="grid grid-flow-col justify-between gap-x-14 items-center">

                        {/* mole-7 */}
                        <RoundInfo cardTitle={`Round ${roundNo}`} cardSubTitleDate={roundDate} status={status}>
                        </RoundInfo>

                        {/* mole-4.2 */}
                        <CardNumWU cardAmountVal={roundRsTotal} unit={roundRsUnit} className='text-base font-medium leading-normal text-tw-gray-100'>
                        </CardNumWU>

                    </div>

                    <hr className='border-tw-gray-20' />
                    {/*  */}

                    <RoundCard2ndRow></RoundCard2ndRow>


                </div>


            </div>
        </>
    )
}

export default RoundCard