import React from 'react'

const RupInfoSmallBox = (props) => {

    // Used in className :: Color changes on Progress or inputs.... 
    let dotColorV = `text-tw-${props.dotColor}`;

    // function that Calculates Loan Percentage... 
    const ProgressLoan = () => {

        if (proData == 'repaid') {
            var totalPaid = props.amount;
        }

        if (proData == 'raised') {
            var totalRaised = props.amount;
        }

        var LoanPc = (totalPaid / totalRaised) * 100;

        return LoanPc;
    }

    // Component that returns the Symbol of Rupee only if needed....
    const RupSymbol = () => {

        if (props.rupSymbol == 'true') {
            return (
                <span className="">
                    &#x20B9;
                </span>
            )
        }
        else return (<span className=''></span>);
    }

    // Component that returns the colored Dot based on props....
    const DotColor = () => {

        if (props.dotColor != 'transparent') {

            if (props.dotColor == 'green') {
                return (
                    <span className=
                        {`text-xl text-tw-green`}>
                        &#x2022;
                    </span>
                )
            }

            if (props.dotColor == 'yellow') {
                return (
                    <span className=
                        {`text-xl text-tw-yellow`}>
                        &#x2022;
                    </span>
                )
            }

        }
        else {
            return (
                <span className='text-xl'> </span>
            )
        }

    }


    // Returns the small White box of right side
    if (props.IsSmallBox == true) {

        return (

            <>

                <div className="inline-flex flex-col  borde-none rounded-lg px-3 py-3 justify-start items-start bg-white">

                    <div className="flex text-xl font-semibold font-sans text-black text-left items-baseline">

                        <span>
                            <RupSymbol></RupSymbol>
                        </span>

                        <span className="">
                            {`${props.amount} ${props.unit}`}
                        </span>
                    </div>



                    <div className="flex items-center text-gray-500 text-left space-x-1 h-6">

                        <span className='text-xs'>
                            {`${props.text}`}
                        </span>

                        <DotColor></DotColor>

                    </div>
                </div>

            </>
        )
    }

    // Returns the Big White box of Left side
    else if (props.IsSmallBox == false) {
        return (
            <>
                <div className="inline-flex flex-col bg-white border border-gray-100 rounded-lg h-full px-4 py-5 justify-center">

                    <div className="flex justify-center text-3xl font-bold font-sans  text-tw-blue w-max">
                        <span>
                            <RupSymbol></RupSymbol>
                        </span>

                        <span className="">
                            {`${props.amount} ${props.unit}`}
                        </span>
                    </div>

                    <span className="text-xs text-black text-center">
                        {` ${props.text}`}
                    </span>
                </div>
            </>
        )
    };

}

export default RupInfoSmallBox;