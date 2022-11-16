import React from 'react'
import ProfileCardTitle from '../../atoms/ProfileCardTitle'
import UserImg from '../../atoms/UserImg'


{/* mole-02 */ }
const ProfileCardShort = ({ pcTitle, mobileImgPath }) => {
    return (
        <>
            <div className="flex gap-x-2 items-center">

                <ProfileCardTitle pcTitle={pcTitle} fontWeight='medium'>
                </ProfileCardTitle>

                <UserImg isMobile={true} mobileImgPath={mobileImgPath}></UserImg>

            </div>
        </>
    )
}

export default ProfileCardShort