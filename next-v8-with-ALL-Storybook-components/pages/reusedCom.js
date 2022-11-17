import Head from 'next/head'
import React from 'react'

const reusedCom = () => {
    return (
        <>
            <Head>
                <title> Reused Components </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1 className='text-4xl px-10 pt-5 text-orange-700 -mb-3'>
                --  Reused Components (Atoms) --
            </h1>
        </>
    )
}

export default reusedCom