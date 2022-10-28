import Image from 'next/image'
import React from 'react'

const AppStatusBtn = (props) => {

    var onAppRoundNo = props.onAppRoundNo;
    var onAppStatusNo = props.appStatusNo;
    var appStatusIcon = '/checkmark.svg';
    var textColor = 'text-[#000000]';
    var bgColor = 'bg-[#FFFFFF]';



    if (onAppStatusNo >= onAppRoundNo) {
        if (onAppStatusNo == onAppRoundNo) {
            appStatusIcon = '/fast-forward.svg';
            textColor = 'text-[#2427e5]'
        }
        if (onAppStatusNo > onAppRoundNo) {
            appStatusIcon = '/checkmarkGray.svg';
            textColor = 'text-[#d7d7d7]';
            bgColor = 'bg-[#f5f5f5]';
        }
    }

    return (
        <>
            <button className={`w-full px-6 py-2 flex justify-between items-center border border-gray-100 rounded-full ${bgColor}`}>

                <span className={`text-sm ${textColor} font-medium tracking-wide`}>
                    {props.status}
                </span>

                <Image src={`${appStatusIcon}`} alt='checkmark.svg'
                    width={16} height={16}>
                </Image>

            </button>
        </>
    )
}

export default AppStatusBtn