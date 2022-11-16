import Image from 'next/image'
import React from 'react'

{/* atoms-02 */ }
const ProfileCardTitle = ({ pcTitle = 'Smoor Chocolate',
    fontWeight = "bold" }) => {
    return (
        <>

            <h4 className={`text-base font-${fontWeight} text-tw-gray-100`}>
                {pcTitle}
            </h4>
        </>
    )
}

export default ProfileCardTitle