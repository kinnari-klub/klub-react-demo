import Image from 'next/image'
import React from 'react'
import ContinueBtn from './OnApp/ContinueBtn'

const CTA = () => {
    return (
        <>
            <div className="px-3 py-5 bg-white h-48 relative">

                <div className="absolute top-3 right-3 -rotate-45">
                    <Image src={`/right-arrow.svg`} alt='right-arrow.svg' width={50} height={50} ></Image>
                </div>

                <h3 className="text-3xl py-2 font-medium text-black CTA-heading">
                    <span>
                        {` Let's `}
                    </span>
                    <br></br>
                    <span>
                        {`   Raise Capital `}
                    </span>
                </h3>

                <p className='w-4/5 text-gray-700 text-sm font-medium leading-snug'>
                    Add new revenue sources to unlock more capital for groth
                </p>


                <div className="pt-3">
                    <ContinueBtn text="Get Started"></ContinueBtn>
                </div>

            </div>

        </>
    )
}

export default CTA