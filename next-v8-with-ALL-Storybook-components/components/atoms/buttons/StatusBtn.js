import React from 'react'

const StatusBtn = ({ status = 'active' }) => {

    if (status == 'active') {
        return (
            <>
                <button className="bg-tw-success-100 px-3 rounded-3xl text-xs font-medium leading-5 text-white">

                    Repaying

                </button>
            </>
        )
    } else {

        return (
            <>
                <button className="bg-white px-3 rounded-3xl border-tw-gray-50 border text-xs font-medium leading-5 text-tw-gray-100">
                    Closed
                </button>
            </>
        )
    }

}

export default StatusBtn