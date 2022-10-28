import React from 'react'
import ProGenInfo from './ProGenInfo'
import ProName from './ProName'

const ProPageHeading = () => {
    return (
        <>
            <div className="flex md:flex-row flex-col md:space-x-6 space-y-2 md:space-y-0 pt-4 pb-3 md:pt-10 md:pb-6">
                <div className="">
                    <ProName></ProName>
                </div>

                <div className=''>
                    <ProGenInfo></ProGenInfo>
                </div>

            </div>
        </>
    )
}

export default ProPageHeading