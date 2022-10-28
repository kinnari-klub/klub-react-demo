import React from 'react'

const SecSmallHeading = (props) => {
    return (
        <>
            <div className="pt-6 pb-4 text-left">
                <h3 className='text-lg font-medium'>
                    {` ${props.name} `}
                </h3>
            </div>

        </>
    )
}

export default SecSmallHeading