import React from 'react'

{/* atoms-03 */ }
const ProfileCardSubtitle = ({ pcSubTitle = 'Amit Trivedi' }) => {
    return (
        <>

            <h4 className="text-sm leading-6 font-normal text-tw-gray-70">
                {pcSubTitle}
            </h4>
        </>
    )
}

export default ProfileCardSubtitle