import Head from 'next/head'
import React from 'react'
import ActiveRoundsCard from '../components/Mole/SumTitleValue/ActiveRoundsCard'
import NavbarLight from '../components/Orgnisams/NavbarLight'
import RoundSec from '../components/Orgnisams/RoundSec'
import SumPieChart from '../components/Orgnisams/SumPieChart'
import SumSecHome from '../components/Orgnisams/SumSecHome'

import { numWithUnit } from '../functions/numWithUnit'

const org = () => {


    return (
        <>
            <Head>
                <title> Organism </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1 className='text-3xl px-10 py-5 text-orange-700 bg-gray-100'>
                -- Organism --
            </h1>

            <div className="bg-gray-100 p-5">
                <NavbarLight logoImgSrc='' logoColor='dark'></NavbarLight>
            </div>

            <div className="bg-gray-100 p-5">
                <div className="w-2/3">
                    <SumPieChart raised='126012568' repaid='202180.22' repaidPercent='12' outstanding='3600180.22' outstandingPercent='88'></SumPieChart>
                </div>
            </div>

            <div className="bg-gray-100 p-5">
                <div className="w-2/3">
                    <SumSecHome raised='12654585' repaid='202180.22' repaidPercent='12' outstanding='3600180.22' outstandingPercent='88' actRoundNo='5'></SumSecHome>
                </div>
            </div>

            <div className="bg-gray-100 p-5 ">
                <div className="w-2/3">
                    <RoundSec></RoundSec>
                </div>

            </div>

        </>
    )
}

export default org