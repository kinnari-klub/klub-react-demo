import Image from 'next/image';
import React from 'react'

const RoundSumBox = (props) => {

    let isActive = props.isActive;

    let BorderRdBox = `border-[#bababa]`;
    let textColor = `text-[#a9a9a9]`;
    let isDisplay = 'visible';

    let alBgColor = `bg-[#ebe9e9]`;
    let alTextColor = `bg-[#000]`;
    let alIconBgColor = `bg-[#000]`;
    let PayStatus = "Closed on";
    let rdAlertRs = "hidden";

    if (isActive == 'true') {
        isActive = 'Active';
        isDisplay = 'visible';

        alBgColor = `bg-[#DEF7EC]`
        alTextColor = `text-[#23965e]`
        alIconBgColor = `bg-[#21c676]`

        BorderRdBox = `border-[#048848]`;
        textColor = `text-[#048848]`;
        PayStatus = "Repaid";
        rdAlertRs = `${props.rdAlertRs}`;
    } else {
        isActive = 'closed';
        BorderRdBox = `border-[#bababa]`;
        textColor = `text-[#000]`;
        isDisplay = 'hidden';

        alBgColor = `bg-[#ebe9e9]`;
        alTextColor = `text-[#000]`;
        alIconBgColor = `bg-[#000]`;

        let rdAlertRs = "hidden";
        PayStatus = "Closed on";
    }

    const RupSymbol = () => {

        if (props.TAmountCur == 'rupee' || props.TAmountCur == 'rs' || props.TAmountCur == '') {
            return (
                <span className="">
                    &#x20B9;
                </span>
            )
        }
        else return (<span className=''></span>);
    }

    return (
        <>
            <div className="px-2 py-4 rounded-xl flex flex-col gap-y-3 items-baseline bg-white">

                {/* Active Button */}
                <div className={`inline-flex  rounded-2xl px-3 py-1 border 
                ${BorderRdBox}`}>
                    <div className="uppercase text-xs font-medium">
                        <span className={`${textColor}`}>
                            {isActive}
                        </span>
                    </div>
                </div>

                {/*  */}
                <div className="flex justify-between items-baseline w-full">


                    <div className="flex justify-between gap-y-6 items-center w-full flex-wrap">

                        {/* left-1 */}
                        {/*  */}
                        <div className='w-45 flex flex-col'>
                            <div className="font-semibold">
                                {`${props.RoundName} ${props.RoundNo}`}
                            </div>

                            <span className="text-xs text-gray-500">
                                {props.RoundInfo} {props.RoundDate}
                            </span>

                        </div>


                        {/* right-1 */}
                        {/*  */}
                        <div className="w-45 text-2xl font-semibold text-black">

                            <span>
                                <RupSymbol></RupSymbol>
                            </span>

                            <span className="text-2xl font-bold">
                                {` ${props.TAmount}  `}
                            </span>

                            <span className="text-sm">
                                {` ${props.TAmounttUnit} `}
                            </span>
                        </div>

                        {/* left-2 */}
                        {/*  */}
                        <div className={`w-45 flex flex-col ${isDisplay}`}>

                            <div className="font-semibold">
                                <span>
                                    <RupSymbol></RupSymbol>
                                </span>

                                <span>
                                    {`${props.TOutStd} ${props.TOutStdUnit} `}
                                </span>

                            </div>

                            <span className="w-48 text-xs text-gray-500">
                                {props.TOutStdText}
                            </span>

                        </div>

                        {/* right-2 */}
                        {/*  */}
                        <div className={`w-45 flex flex-col ${isDisplay}`}>
                            <div className="font-semibold">
                                <span>
                                    <RupSymbol></RupSymbol>
                                </span>
                                <span>
                                    {`${props.TRepaid} ${props.TRepaidUnit} `}
                                </span>

                            </div>

                            <span className="text-xs text-gray-500">
                                {props.TRepaidText}
                            </span>

                        </div>

                        {/* Alert :: Last 3rd Row */}
                        <div className={`w-full flex justify-between items-center px-4 py-3  text-sm ${alBgColor} rounded-lg`} role="alert">


                            <div className={`font-medium ${alTextColor} `}>
                                {/*  */}
                                <span>
                                    {`${PayStatus} `}
                                </span>

                                {/*  */}
                                <span className={` ${rdAlertRs}`}>
                                    {` Rs ${rdAlertRs} `}
                                </span>

                                {/*  */}
                                <span>
                                    {` ${props.rePaidTime}  `}
                                </span>
                            </div>


                            <div className={`w-6 h-6 ${alIconBgColor} rounded-full flex justify-center items-center`}>
                                <Image src="/lightning.svg" alt="" className="" width={20} height={20} />
                            </div>
                        </div>

                    </div>
                </div>

            </div>



        </>
    )
}

export default RoundSumBox