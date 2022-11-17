import Head from 'next/head'
import SectionHeading from '../components/atoms/SectionHeading'
import NavbarLight from '../components/Orgnisams/NavbarLight'
import RoundSec from '../components/Orgnisams/RoundSec'
import SumSecHome from '../components/Orgnisams/SumSecHome'

export default function Home() {

  return (
    <>
      <Head>
        <title> Home </title>
      </Head>

      {/* org-01 */}
      <NavbarLight></NavbarLight>

      {/*  */}
      <div className="bg-gray-100">
        <div className='2xl:container 2xl:px-0 px-5 xs:py-5 '>
          <div className="grid grid-flow-row lg:grid-cols-3 gap-x-4 py-8 gap-y-8">

            <div className="lg:col-span-2 ">
              <div className="flex flex-col gap-y-8">

                {/* org-2 */}
                <SumSecHome raised='126026547' repaid='202180.22' repaidPercent='12' outstanding='3600180.22' outstandingPercent='88' actRoundNo='5' ></SumSecHome>

                {/* org-03 */}
                <RoundSec></RoundSec>
              </div>
            </div>

            <div className="col-span-1 row-start-1 lg:col-start-3 flex flex-col gap-y-4">
              {/* atoms-06 */}
              <SectionHeading sectionHeadingText='Applications in-progress'>
              </SectionHeading>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
