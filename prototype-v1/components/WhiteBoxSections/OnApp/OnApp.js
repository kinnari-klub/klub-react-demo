import { Button } from 'flowbite-react'
import Image from 'next/image'
import React from 'react'
import AppStatusBtn from './AppStatusBtn'
import ContinueBtn from './ContinueBtn'


const OnApp = (props) => {

    var roundNo = props.roundNo;

    const RupSymbol = () => {
        return (
            <span className="">
                &#x20B9;
            </span>
        )
    }

    return (
        <>
            <div className="flex justify-between pb-3 gap-y-6 items-center w-full flex-wrap">

                {/* right-1 */}
                {/*  */}
                <div className="w-45 text-2xl font-semibold text-black">

                    <span>
                        <RupSymbol></RupSymbol>
                    </span>

                    <span className="text-2xl font-bold">
                        {` ${props.tAmount}  `}
                    </span>

                    <span className="text-sm font-semibold">
                        {` ${props.tAmountUnit} `}
                    </span>
                </div>


                {/* left-1 */}
                {/*  */}
                <div className='w-45 flex flex-col'>
                    <div className="text-lg font-semibold">
                        {`${props.roundName} ${props.roundNo}`}
                    </div>
                </div>
            </div>

            <hr className='text-gray-500 pb-3' />

            <div className="flex flex-col gap-y-3">

                <AppStatusBtn status="Application Start" appStatusNo='1'
                    onAppRoundNo={roundNo}>
                </AppStatusBtn>

                <AppStatusBtn status="KYC Submission" appStatusNo='2'
                    onAppRoundNo={roundNo}>
                </AppStatusBtn>

                <AppStatusBtn status="Soft Sanction" appStatusNo='3'
                    onAppRoundNo={roundNo}>
                </AppStatusBtn>

                <AppStatusBtn status="Risk + BD call" appStatusNo='4'
                    onAppRoundNo={roundNo}>
                </AppStatusBtn>

                <AppStatusBtn status="TermaSheet" appStatusNo='5'
                    onAppRoundNo={roundNo}>
                </AppStatusBtn>
                <AppStatusBtn status="Disbursed" appStatusNo='6'
                    onAppRoundNo={roundNo}>
                </AppStatusBtn>

                <ContinueBtn text="Continue"></ContinueBtn>
            </div>





        </>
    )
}

export default OnApp