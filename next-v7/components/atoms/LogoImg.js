import Image from 'next/image'
import React from 'react'

{/* atoms-01 */ }
const LogoImg = ({ color = 'dark' }) => {

    var logoImgSrc = '';

    logoImgSrc = (color == 'dark') ? '/logo/logo-black.svg' : '/logo/logo-white.svg';


    return (
        <>
            <div className={`relative w-[44px] h-[18px] xs:w-[70px] xs:h-[28px] flex items-center`}>
                <Image src={logoImgSrc} alt="logo.svg" width={44} height={18} className='w-full h-full'>
                </Image>
            </div>
        </>
    )
}

export default LogoImg