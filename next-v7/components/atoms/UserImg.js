import Image from 'next/image'
import React from 'react'


{/*  atoms-04 */ }
const UserImg = ({ className = 'w-11 h-11', isMobile = false,
    imgPath = '/profile-card/user-img.svg', mobileImgPath = '/profile-card/user-mobile.svg', mobileClassName = 'w-5 h-5' }) => {


    imgPath = ((isMobile == true) && (mobileImgPath != '')) ? mobileImgPath : imgPath;

    className = ((isMobile == true) && (mobileClassName != '')) ? mobileClassName : className;

    return (
        <>
            <div className={className}>
                <Image src={imgPath} alt="profile-img.svg" width={44} height={44} className='w-full h-full'>
                </Image>
            </div>
        </>
    )
}

export default UserImg