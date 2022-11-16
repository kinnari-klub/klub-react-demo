import Head from 'next/head'
import React from 'react'
import ActiveRoundsCard from '../components/Mole/SumTitleValue/ActiveRoundsCard'
import NavbarLight from '../components/Orgnisams/NavbarLight'
import RoundSec from '../components/Orgnisams/RoundSec'
import SumPieChart from '../components/Orgnisams/SumPieChart'
import SumSecHome from '../components/Orgnisams/SumSecHome'

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
                <NavbarLight></NavbarLight>
            </div>

            <div className="bg-gray-100 p-5">
                <div className="w-2/3">
                    <SumPieChart></SumPieChart>
                </div>
            </div>

            <div className="bg-gray-100 p-5">
                <div className="w-2/3">
                    <SumSecHome></SumSecHome>
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