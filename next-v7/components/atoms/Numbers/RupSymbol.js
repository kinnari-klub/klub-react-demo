import React from 'react'

const RupSymbol = ({ curSymbol = 'Rs', className = '' }) => {

    // console.log(`intial curSymbol is ${curSymbol}`);

    if (curSymbol == 'Rs') {
        return (
            <>
                <span className={className}>
                    &#x20b9;
                </span>
            </>
        )
    }

    else return (
        <>
        </>
    )
}







export default RupSymbol