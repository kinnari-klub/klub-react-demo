import React from 'react'
import LogoImg from '../atoms/LogoImg'
import ProfileCard from '../Mole/ProfileCard/ProfileCard'
import ProfileCardShort from '../Mole/ProfileCard/ProfileCardShort'

{/* org-01 => Mole-2 , Atoms-5 */ }
const NavbarLight = ({ logoImgSrc, logoColor, pcTitle, pcSubTitle, userImgPath }) => {

    return (
        <>
            <header className='sticky top-0 bg-white z-50'>
                {/*  */}
                <div className='2xl:container 2xl:px-0 h-12 xs:h-[90px] kb-drop-shadow-md px-5 xs:py-5'>

                    <div className="flex justify-between items-center h-full flex-wrap gap-5">

                        {/* atoms-01 */}
                        <LogoImg logoImgSrc={logoImgSrc} logoColor={logoColor}></LogoImg>

                        <div className="hidden xs:block">
                            {/* mole-01 */}
                            <ProfileCard pcTitle={pcTitle} pcSubTitle={pcSubTitle} userImgPath={userImgPath}></ProfileCard>
                        </div>

                        <div className="flex xs:hidden ">
                            {/* mole-02 */}
                            <ProfileCardShort></ProfileCardShort>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default NavbarLight