import React from 'react'

const ContinueBtn = (props) => {
    return (
        <>
            <button className={`w-full px-6 py-2 flex justify-center items-center border border-gray-100 rounded-lg bg-tw-blue`}>

                <span className={`text-lg text-white font-medium tracking-wide text-center`}>
                    {props.text}
                </span>

            </button>
        </>
    )
}

export default ContinueBtn