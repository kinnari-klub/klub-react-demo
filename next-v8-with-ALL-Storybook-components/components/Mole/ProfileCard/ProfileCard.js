import React from 'react'
import ProfileCardSubtitle from '../../atoms/ProfileCardSubtitle'
import ProfileCardTitle from '../../atoms/ProfileCardTitle'
import UserImg from '../../atoms/UserImg'

{/* mole-01 */ }
const ProfileCard = ({ pcTitle, pcSubTitle, userImgPath }) => {
    return (
        <>
            <div className="w-max flex justify-end gap-3">
                <div className="flex flex-col items-end">
                    <div className="w-max">
                        {/* atoms-02 */}
                        <ProfileCardTitle pcTitle={pcTitle}></ProfileCardTitle>
                    </div>
                    <div className="w-max">
                        {/* atoms-03 */}
                        <ProfileCardSubtitle pcSubTitle={pcSubTitle}></ProfileCardSubtitle>
                    </div>
                </div>

                {/*  atoms-04 */}
                <UserImg imgPath={userImgPath}></UserImg>

            </div>

        </>
    )
}

export default ProfileCard