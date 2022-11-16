import React from 'react'
import CardSubtitle from '../../atoms/CardSubtitle'
import CardAmount from '../../atoms/Numbers/CardAmount'
import CardNumWP from '../CardNumber/CardNumWP'
import CardNumWU from '../CardNumber/CardNumWU'

const RoundValueTitle = ({ subTitle, cardAmountVal, unit, subPercent, alignItems = 'items-start' }) => {

    const IsSubPercent = () => {
        if (subPercent == undefined) {

            if (unit != undefined) {
                return (
                    <>
                        <CardNumWU cardAmountVal={cardAmountVal} unit={unit}></CardNumWU>
                    </>
                )
            } else {
                return (
                    <>
                        {/* 1st Atom */}
                        <CardNumWU cardAmountVal={cardAmountVal}></CardNumWU>
                    </>
                )
            }

        } else {
            return (
                <>
                    <CardNumWP cardAmountVal={cardAmountVal}
                        subPercent={subPercent}>
                    </CardNumWP>
                </>
            )
        }
    }

    return (
        <>
            <div className={`flex flex-col ${alignItems} gap-y-1`}>

                <div className="w-max">
                    <span className="text-sm font-normal leading-6 text-tw-gray-70">
                        <IsSubPercent></IsSubPercent>
                    </span>
                </div>

                <div className="w-max">
                    <CardSubtitle subTitle={subTitle} className='w-max text-sm font-normal leading-6 text-tw-gray-70'>
                    </CardSubtitle>
                </div>
            </div>
        </>
    )
}

export default RoundValueTitle