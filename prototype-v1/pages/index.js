import Head from 'next/head'
import ProPageHeading from '../components/ProPageHeading/ProPageHeading'
import SecSmallHeading from '../components/WhiteBoxSections/SecSmallHeading';
import RupInfoSmallBox from '../components/WhiteBoxSections/RupInfoSmallBox';
import RoundSumBox from '../components/WhiteBoxSections/RoundSumBox/RoundSumBox';
import OnApp from '../components/WhiteBoxSections/OnApp/OnApp';
import ContinueBtn from '../components/WhiteBoxSections/OnApp/ContinueBtn';
import Image from 'next/image';
import CTA from '../components/WhiteBoxSections/CTA';

export default function Home() {

  return (
    <>
      <Head>
        <title> Home </title>
      </Head>

      {/* Smoor Chocolates ---
      --- 4.7M INR raised - Joined on 13 August 2023 */}
      <div className="xl:container mx-auto">
        <div className="px-2 sm:px-4">
          <div className="px-0.5">
            <ProPageHeading></ProPageHeading>
          </div>
        </div>
      </div>

      <hr className='border-t-tw-hr-gray w-3/4' />

      {/* main page */}
      <div className="xl:container mx-auto">
        <div className="px-2 sm:px-4">
          <div className="px-0.5">
            <div className="w-full flex md:flex-row flex-col flex-nowrap gap-x-4">

              {/* Summary section*/}
              <div className="md:w-8/12">

                {/* Summary First Row section */}
                <div className="pb-2">

                  {/* heading */}
                  <SecSmallHeading name='Summary'></SecSmallHeading>

                  {/*  White Loan section.. */}
                  <div className="flex flex-nowrap items-start h-[100px] gap-x-4">

                    <div className="">
                      {/* 9.6 Cr */}
                      <RupInfoSmallBox
                        rupSymbol='true'
                        amount={`9.6`}
                        unit='Cr'
                        text='Total Remaining'
                        IsSmallBox={false}
                        dotColor='transparent'>
                      </RupInfoSmallBox>
                    </div>



                    <div className="bg-white w-full h-full rounded-lg">

                      {/* 3 Small White box */}
                      <div className="px-[3%] flex justify-between">

                        {/* 3 Cr */}
                        <RupInfoSmallBox

                          rupSymbol='true'
                          amount={`3`}
                          unit='Cr'
                          text='Total Repaid'
                          proData='repaid'
                          IsSmallBox={true}
                          dotColor='green'
                        >
                        </RupInfoSmallBox>

                        {/* 12.6 Cr */}
                        <RupInfoSmallBox
                          rupSymbol='true'
                          amount={`12.6`}
                          unit='Cr'
                          text='Total Raised'
                          proData='raised'
                          IsSmallBox={true}
                          dotColor='yellow'
                        >
                        </RupInfoSmallBox>

                        {/* 3 Loans */}
                        <RupInfoSmallBox
                          rupSymbol='false'
                          amount={`3`}
                          unit='Loans'
                          text='Total Active Loans'
                          IsSmallBox={true}
                          dotColor='transparent'
                        >
                        </RupInfoSmallBox>
                      </div>
                      {/* End of 3 Small White box */}

                      {/* 3 Cr / 12.6 Cr == 27% */}
                      {/* ...Progress Bar... */}
                      <div className="px-[3%]">

                        {/* Outer Vessel */}
                        <div className="w-full bg-yellow-300 rounded-full 
      h-2 mb-4 dark:bg-gray-700">

                          {/* Inner Vessel */}
                          <div className="bg-green-600 h-2 rounded-full dark:bg-red-500 w-[27%]" ></div>
                          {/* w-[48%] ===> import LoanPc from  <RupInfoSmallBox> */}
                        </div>
                      </div>
                      {/* ...End :: Progress Bar... */}

                    </div>
                    {/* ...End :: Only Progressbar... */}


                  </div>
                  {/* ...End :: White Loan section.. */}
                </div>

                {/* ALl 4 RoundSumBox */}
                <div className="py-5">
                  <div className="flex justify-between gap-x-2 gap-y-6 flex-wrap">

                    <div className="w-[48%] ">

                      <RoundSumBox
                        RoundName='Round'
                        RoundNo='4'
                        RoundInfo='activated on'
                        RoundDate="25 June `22"

                        TAmountCur=''
                        TAmount='82.4'
                        TAmounttUnit='Lakh'
                        TAmountText='false'

                        TOutCur=''
                        TOutStd='60.2'
                        TOutStdUnit='Lakh'
                        TOutStdText='Total OutStanding'

                        TRepaidCur=''
                        TRepaid='22.2'
                        TRepaidUnit='Cr'
                        TRepaidText='Total Repaid'

                        isActive='true'
                        rdAlertRs="2,56,345.39"

                        closedDate=""
                        rePaidTime='today'
                      >

                      </RoundSumBox>
                    </div>

                    <div className="w-[48%]
                    ">

                      <RoundSumBox
                        RoundName='Round'
                        RoundNo='3'
                        RoundInfo='activated on'
                        RoundDate="10 April `25"

                        TAmountCur=''
                        TAmount='2.8'
                        TAmounttUnit='Cr'
                        TAmountText='false'

                        TOutCur=''
                        TOutStd='1.2'
                        TOutStdUnit='Cr'
                        TOutStdText='Total OutStanding'

                        TRepaidCur=''
                        TRepaid='1.6'
                        TRepaidUnit='Cr'
                        TRepaidText='Total Repaid'

                        isActive='true'
                        rdAlertRs="28,36,000"

                        closedDate=""
                        rePaidTime='yesterday'
                      >

                      </RoundSumBox>
                    </div>

                    <div className="w-[48%] ">

                      <RoundSumBox
                        RoundName='Round'
                        RoundNo='2'
                        RoundInfo='activated on'
                        RoundDate="02 March `23"

                        TAmountCur=''
                        TAmount='3.6'
                        TAmounttUnit='Cr'
                        TAmountText='false'

                        TOutCur=''
                        TOutStd=''
                        TOutStdUnit=''
                        TOutStdText=''

                        TRepaidCur=''
                        TRepaid=''
                        TRepaidUnit=''
                        TRepaidText=''

                        isActive='false'
                        rdAlertRs="2,56,345.39"

                        rePaidTime="12 October `23"
                      >

                      </RoundSumBox>
                    </div>

                    <div className="w-[48%]">

                      <RoundSumBox
                        RoundName='Round'
                        RoundNo='1'
                        RoundInfo='activated on'
                        RoundDate="15 May `24"

                        TAmountCur=''
                        TAmount='4.8'
                        TAmounttUnit='Cr'
                        TAmountText='false'

                        TOutCur=''
                        TOutStd='2.6'
                        TOutStdUnit='Cr'
                        TOutStdText='Total OutStanding'

                        TRepaidCur=''
                        TRepaid='1.2'
                        TRepaidUnit='Cr'
                        TRepaidText='Total Repaid'

                        isActive='true'
                        rdAlertRs="32,23,000"

                        closedDate=""
                        rePaidTime='yesterday'
                      >


                      </RoundSumBox>
                    </div>

                  </div>

                </div>

              </div>
              {/* End :: Summary section */}

              {/* Ongoing Applications */}
              <div className="md:w-4/12">

                <SecSmallHeading name='Ongoing Applications'>
                </SecSmallHeading>

                <div className="flex flex-col gap-y-6">
                  <div className="p-5 bg-white">
                    <OnApp
                      roundNo='4'
                      roundName='Round'
                      tAmount='1.90'
                      tAmountUnit='Cr'>
                    </OnApp>
                  </div>


                  {/* CTA section */}
                  <CTA></CTA>


                </div>

              </div>

            </div>

          </div>
        </div>
      </div>



    </>
  )
}
