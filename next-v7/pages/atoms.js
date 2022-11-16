import React from 'react'
import Head from 'next/head'
import LogoImg from '../components/atoms/LogoImg'
import ProfileCardTitle from '../components/atoms/ProfileCardTitle'
import ProfileCardSubtitle from '../components/atoms/ProfileCardSubtitle'
import UserImg from '../components/atoms/UserImg'
import CardSubtitle from '../components/atoms/CardSubtitle'
import RupSymbol from '../components/atoms/Numbers/RupSymbol'
import CardNumSubPercent from '../components/atoms/Numbers/CardNumSubPercent'
import CardAmount from '../components/atoms/Numbers/CardAmount'
import CardAmountUnit from '../components/atoms/Numbers/CardAmountUnit'
import SectionHeading from '../components/atoms/SectionHeading'
import CardTitle from '../components/atoms/CardTitle'
import StatusBtn from '../components/atoms/buttons/StatusBtn'


const atoms = () => {
    return (
        <>
            <Head>
                <title> Atoms </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1 className='text-4xl px-10 pt-5 text-orange-700 -mb-3'>
                -- Atoms --
            </h1>

            {/* Atoms */}
            <div className="flex flex-wrap items-center gap-x-10 gap-y-2 m-5 p-10 border-2 border-orange-700 bg-gray-100">

                {/* 1st Atom */}
                <div className="bg-white p-5 shadow-xl">
                    <LogoImg color='dark'></LogoImg>
                </div>

                {/* 2nd Atom */}
                <div className="bg-white p-5 shadow-xl">
                    <ProfileCardTitle pcTitle='Smoor Chocolates'>
                    </ProfileCardTitle>
                </div>

                {/* 3rd atom */}
                <div className="bg-white p-5 shadow-xl">
                    <ProfileCardSubtitle pcSubTitle='Amit Trivedi'>
                    </ProfileCardSubtitle>
                </div>

                {/* 4th atom */}
                <div className="bg-white p-5 shadow-xl">
                    <UserImg></UserImg>
                </div>

                {/* 5th atom */}
                <div className="bg-white p-5 shadow-xl">
                    <UserImg isMobile></UserImg>
                </div>

            </div>

            {/* Atoms */}
            <div className="flex flex-wrap items-center gap-x-10 gap-y-2 m-5 p-10 border-2 border-orange-700 bg-gray-100">

                {/* 6th Atom */}
                <SectionHeading sectionHeadingText='Summary'>
                </SectionHeading>

                {/* 7th Atom */}
                <div className="bg-white p-5 shadow-xl">
                    <CardSubtitle subTitle='Raised'></CardSubtitle>
                </div>

                {/* 8th Atom */}
                <div className="bg-white p-5 shadow-xl">
                    <RupSymbol></RupSymbol>
                </div>

                {/* 9th Atom */}
                <div className="bg-white p-5 shadow-xl">
                    <CardAmount cardAmountVal='12.6'>
                    </CardAmount>
                </div>

                {/* 10th Atom */}
                <div className="bg-white p-5 shadow-xl">
                    <CardAmountUnit unit='Cr'></CardAmountUnit>
                </div>

                {/* 1st Atom */}
                <div className="bg-white p-5 shadow-xl">
                    <CardNumSubPercent subPercent='12'>
                    </CardNumSubPercent>
                </div>

            </div>

            {/* Atoms */}
            <div className="flex flex-wrap items-center gap-x-10 gap-y-2 m-5 p-10 border-2 border-orange-700 bg-gray-100">

                {/* 11th Atom */}
                <div className="bg-white p-5 shadow-xl">
                    <CardTitle cardTitle='Round 1'></CardTitle>
                </div>

                {/* 12th Atom */}
                <div className="bg-white p-2 shadow-xl">
                    <StatusBtn status='active'></StatusBtn>
                </div>


            </div>

            <h1 className='text-4xl px-10 pt-5 text-orange-700 -mb-3'>
                --  Reused Components (Atoms) --
            </h1>

            <div className="bg-gray-100 flex flex-wrap items-center gap-x-10 gap-y-5 m-5 p-10 border-2 border-orange-700 ">

                {/* Reused Components (Atoms) :: 01 */}
                <div className="p-5 shadow-xl">

                    <SectionHeading sectionHeadingText='Summary'>
                    </SectionHeading>
                </div>

                {/* Reused Components (Atoms) :: 01 */}
                <div className="p-5 shadow-xl">

                    <SectionHeading sectionHeadingText='Applications in-progress'>
                    </SectionHeading>
                </div>

                {/* Reused Components (Atoms) :: 01 */}
                <div className="p-5 shadow-xl">

                    <SectionHeading sectionHeadingText='Rounds'>
                    </SectionHeading>
                </div>

                <div className="w-screen"></div>


                {/* Reused Components (Atoms) :: 01 */}
                <div className="bg-white p-5 shadow-xl">
                    <CardSubtitle subTitle='Raised'></CardSubtitle>
                </div>

                {/* Reused Components (Atoms) :: 01 */}
                <div className="bg-white p-5 shadow-xl">
                    <CardSubtitle subTitle='Repaid'></CardSubtitle>
                </div>

                {/* Reused Components (Atoms) :: 01 */}
                <div className="bg-white p-5 shadow-xl">
                    <CardSubtitle subTitle='Outstanding'></CardSubtitle>
                </div>

                {/* Reused Components (Atoms) :: 01 */}
                <div className="bg-white p-5 shadow-xl">
                    <CardSubtitle subTitle='Active Rounds' className='text-base font-normal text-tw-gray-100 leading-normal'></CardSubtitle>
                </div>

                <div className="w-screen"></div>

                {/* Reused Components (Atoms) :: 01 */}
                <div className="bg-white p-5 shadow-xl">
                    <CardAmountUnit unit='Cr'></CardAmountUnit>
                </div>

                {/* Reused Components (Atoms) :: 01 */}
                <div className="bg-white p-5 shadow-xl">
                    <CardAmountUnit unit='Lakh'></CardAmountUnit>
                </div>

                <div className="w-screen"></div>

                {/* 1st Atom */}
                <div className="bg-white p-5 shadow-xl">
                    {/* 1st Atom */}
                    <CardTitle cardTitle='Round 1'></CardTitle>
                </div>

                {/* 1st Atom */}
                <div className="bg-white p-5 shadow-xl">
                    {/* 1st Atom */}
                    <CardTitle cardTitle='Round 2'></CardTitle>
                </div>

                {/* 1st Atom */}
                <div className="bg-white p-5 shadow-xl">
                    {/* 1st Atom */}
                    <CardTitle cardTitle='Round 3'></CardTitle>
                </div>

                {/* 1st Atom */}
                <div className="bg-white p-5 shadow-xl">
                    {/* 1st Atom */}
                    <CardTitle cardTitle='Round 4'></CardTitle>
                </div>


                <div className="w-screen"></div>

                {/* Reused Components (Atoms) :: 01 */}
                <div className="bg-white p-5 shadow-xl">

                    <CardSubtitle subTitle='Disbursed on 12 June ‘23' className='text-sm font-normal leading-6 text-tw-gray-70'></CardSubtitle>
                </div>

                {/* Reused Components (Atoms) :: 01 */}
                <div className="bg-white p-5 shadow-xl">

                    <CardSubtitle subTitle='Disbursed on 12 June ‘23' className='text-xs font-medium text-tw-gray-70 leading-5'></CardSubtitle>
                </div>


                <div className="bg-white p-5 shadow-xl">

                    <CardSubtitle subTitle='Closed on 12 June ‘23' className='text-sm font-bold text-tw-gray-100 leading-6'></CardSubtitle>
                </div>

                <div className="w-screen"></div>

                {/* 1st Atom */}
                <div className="bg-white p-2 shadow-xl">
                    {/* 1st Atom */}
                    <StatusBtn status='active'></StatusBtn>
                </div>

                {/* 1st Atom */}
                <div className="bg-white p-2 shadow-xl">
                    {/* 1st Atom */}
                    <StatusBtn status='disable'></StatusBtn>
                </div>



            </div>

        </>
    )
}

export default atoms