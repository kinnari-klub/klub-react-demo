import React from 'react'

const SectionHeading = ({ sectionHeadingText = '', className = 'text-base leading-normal font-bold text-tw-gray-80' }) => {
    return (
        <>
            <h3 className={className}>
                {sectionHeadingText}
            </h3>
        </>
    )
}

export default SectionHeading