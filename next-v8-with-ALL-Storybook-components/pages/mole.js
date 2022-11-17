import React from 'react'
import Head from 'next/head'

import ProfileCardShort from '../components/Mole/ProfileCard/ProfileCardShort'
import ProfileCard from '../components/Mole/ProfileCard/ProfileCard'
import CardNumWP from '../components/Mole/CardNumber/CardNumWP'
import CardNumWU from '../components/Mole/CardNumber/CardNumWU'
import SumTitleValue from '../components/Mole/SumTitleValue/SumTitleValue'
import ActiveRoundsCard from '../components/Mole/SumTitleValue/ActiveRoundsCard'
import RoundValueTitle from '../components/Mole/Rounds/RoundValueTitle'

import RoundInfo from '../components/Mole/Rounds/RoundInfo'
import RoundCard from '../components/Mole/Rounds/RoundCard'
import CardSubtitle from '../components/atoms/CardSubtitle'


const mole = () => {
    return (
        <>
            <Head>
                <title> Molecules </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1 className='text-4xl px-10 pt-5 text-orange-700 -mb-3'>
                -- Molecules --
            </h1>

            {/*  Molecules */}
            <div className="flex flex-wrap items-center gap-x-10 gap-y-2 m-5 p-10 border-2 border-orange-700 bg-gray-100">

                <div className="bg-white p-5">
                    {/* 1st Molecules */}
                    <ProfileCard></ProfileCard>
                </div>

                <div className="bg-white p-5">
                    {/* 2nd Molecules */}
                    <ProfileCardShort ></ProfileCardShort>
                </div>

                {/* 3 :: Molecules */}
                <div className="bg-white p-5">
                    <CardNumWP cardAmountVal='3600180.22' subPercent='88'></CardNumWP>
                </div>

                {/* 4.1 :: Molecules */}
                <div className="bg-white p-5">
                    <CardNumWU cardAmountVal='126319589' ></CardNumWU>
                </div>

                <div className='w-screen'></div>

                {/* 5.1 :: Molecules */}
                <div className="bg-white p-5">
                    <SumTitleValue subTitle='Raised'
                        cardAmountVal='126319589'>
                    </SumTitleValue>
                </div>

                {/* 5.2 :: Molecules */}
                <div className="bg-white p-5">
                    <SumTitleValue subTitle='Repaid' cardAmountVal='3600180.22' subPercent='12'>
                    </SumTitleValue>
                </div>

                {/* 6 :: Molecules */}
                <ActiveRoundsCard cardAmountVal='3' subTitle='Active Rounds'></ActiveRoundsCard>


                <div className='w-screen'></div>

                {/* 7 :: Molecules  */}
                <div className="bg-white p-5">
                    <RoundInfo cardTitle='Round 4' cardSubTitleDate='19/10/1983' status='active'></RoundInfo>
                </div>

                {/* 4.2 :: Molecules */}
                <div className="bg-white p-5">
                    <CardNumWU cardAmountVal='200458963' className='text-base font-medium leading-normal text-tw-gray-100'></CardNumWU>
                </div>


                {/* 8 :: Molecules */}
                <div className="bg-white p-5">
                    <RoundValueTitle subTitle="Total outstanding" cardAmountVal='787689'></RoundValueTitle>
                </div>


                <div className='w-screen'></div>

                {/* 9 :: Molecules */}
                <RoundCard roundNo='1' roundDate='16/05/2023' roundRsTotal='6502512' outStandingRs='787689' rePaidRs='143544' status='active'>
                </RoundCard>

                {/* 10 :: Molecules  */}
                <div className="bg-white p-5 w-[448px]">
                    <div className="p-3 bg-tw-gray-20 rounded-lg">
                        <CardSubtitle subTitle='Closed on 12 June ‘23' className='  text-sm font-bold text-tw-gray-100 leading-6 '></CardSubtitle>
                    </div>
                </div>



                <div className='w-screen'></div>



            </div>

            <h1 className='text-4xl px-10 pt-5 text-orange-700 -mb-3'>
                -- Reused Molecules --
            </h1>

            <div className="flex flex-wrap items-center gap-x-10 gap-y-2 m-5 p-10 border-2 border-orange-700 bg-gray-100">

                {/* 4 :: Molecules */}
                <div className="bg-white p-5">
                    <CardNumWU cardAmountVal='12.6' unit='Cr'></CardNumWU>
                </div>

                {/* 4 :: Molecules */}
                <div className="bg-white p-5">
                    <CardNumWU cardAmountVal='20.04' unit='Cr' className='text-base font-medium leading-normal text-tw-gray-100'></CardNumWU>
                </div>

                {/* 4 :: Molecules */}
                <div className="bg-white p-5">

                    <CardNumWU cardAmountVal='65' unit='Lakh' className='text-base font-medium leading-normal text-tw-gray-100'></CardNumWU>
                </div>


                <div className='w-screen'></div>

                {/* 5 :: Molecules */}
                <div className="bg-white p-5">
                    <SumTitleValue subTitle='Repaid' cardAmountVal='202,180.22' subPercent='12'>
                    </SumTitleValue>
                </div>

                {/* 7 :: Molecules */}
                <div className="bg-white p-5">
                    <SumTitleValue subTitle='Outstanding' cardAmountVal='3,600,180.22' subPercent='88'>
                    </SumTitleValue>
                </div>

                <div className='w-screen'></div>

                {/* 8 :: Molecules */}
                <div className="bg-white p-5">
                    <RoundValueTitle subTitle="Total outstanding" cardAmountVal='787,689'></RoundValueTitle>
                </div>

                {/* 9 :: Molecules */}
                <div className="bg-white p-5">
                    <RoundValueTitle subTitle="Total Repaid" cardAmountVal='143,544'></RoundValueTitle>
                </div>

                <div className='w-screen'></div>

                <div className="bg-white p-5">
                    <RoundInfo cardTitle='Round 1' cardSubTitleDate='16 May ‘23' status='closed'></RoundInfo>
                </div>

                <div className="bg-white p-5">
                    <RoundInfo cardTitle='Round 2' cardSubTitleDate='08 Aug ‘23' status='closed'></RoundInfo>
                </div>

                <div className="bg-white p-5">
                    <RoundInfo cardTitle='Round 3' cardSubTitleDate='12 June ‘23' status='active'></RoundInfo>
                </div>

                <div className="bg-white p-5">
                    <RoundInfo cardTitle='Round 4' cardSubTitleDate='12 June ‘23' status='active'></RoundInfo>
                </div>

                <div className="flex gap-x-10 py-10">
                    {/* mole-9.1 */}
                    <RoundCard roundNo='3' roundDate='16 May ‘23' roundRsTotal='82.4' roundRsUnit='Lakh' outStandingRs='787,689' rePaidRs='143,544' status='active'>
                    </RoundCard>

                    {/* mole-9.2 */}
                    <RoundCard roundNo='1' roundDate='16 May ‘23' roundRsTotal='65' roundRsUnit='Lakh' outStandingRs='' rePaidRs='' status='closed'>
                    </RoundCard>

                </div>



            </div>
        </>
    )
}

export default mole