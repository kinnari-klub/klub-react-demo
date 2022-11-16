import React from 'react'
import StatusBtn from '../../atoms/buttons/StatusBtn'
import CardSubtitle from '../../atoms/CardSubtitle'
import CardTitle from '../../atoms/CardTitle'

{/* mole-7 */ }
const RoundInfo = ({ cardTitle, cardSubTitle = 'Disbursed on', cardSubTitleDate = '', status }) => {

    const RoundSubTitle = () => {

        if (status == 'active') {
            return (
                <>
                    {/* atoms-7.1 */}
                    <CardSubtitle subTitle={`${cardSubTitle} ${cardSubTitleDate}`} className='text-sm font-normal leading-6 text-tw-gray-70'>
                    </CardSubtitle>
                </>
            );
        } else {
            return (
                <>
                    {/* atoms-7.2 */}
                    <CardSubtitle subTitle={`${cardSubTitle} ${cardSubTitleDate}`} className='text-xs font-medium text-tw-gray-70 leading-5'></CardSubtitle>
                </>
            );
        }
    }


    return (
        <>
            <div className="w-max">
                <div className="flex flex-col gap-y-1">
                    <div className="flex gap-x-2 justify-between items-center">
                        {/* atoms-11 */}
                        <CardTitle cardTitle={cardTitle}>
                        </CardTitle>

                        {/* atoms-12 */}
                        <StatusBtn status={status}></StatusBtn>
                    </div>

                    <div className='pr-0.5'>
                        {/* inner Function */}
                        <RoundSubTitle ></RoundSubTitle>
                    </div>

                </div>

            </div>
        </>
    )
}

export default RoundInfo