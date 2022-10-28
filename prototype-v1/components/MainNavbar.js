import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Navbar } from 'flowbite-react'


const MainNavbar = () => {

    return (
        <>

            {/*  */}
            <Navbar fluid={true} rounded={true}>
                <Navbar.Brand href="https://flowbite.com/">
                    <Image src="/klub-white-bg-logo.svg"
                        className="mr-3 h-6 sm:h-9"
                        alt="Klub logo" width={50} height={50}
                    />
                </Navbar.Brand>

                <Navbar.Toggle />

                <Navbar.Collapse>

                    <Link href='/'>
                        <Navbar.Link active={true} className='nav-menu !bg-tw-blue !text-white !rounded-xl !cursor-pointer !px-2 !py-1'>
                            Home
                        </Navbar.Link>
                    </Link>

                    <Link href='/rounds'>
                        <Navbar.Link className='nav-menu !text-blue-700 !rounded-xl !cursor-pointer !px-2 !py-1'>
                            Rounds
                        </Navbar.Link>
                    </Link>

                    <Link href='/profile'>
                        <Navbar.Link className='nav-menu !text-blue-700 !rounded-xl !cursor-pointer !px-2 !py-1'>
                            Profile
                        </Navbar.Link>
                    </Link>

                    <Link href='/logout'>
                        <Navbar.Link className='nav-menu !text-blue-700 !rounded-xl !cursor-pointer !px-2 !py-1'>
                            Logout
                        </Navbar.Link>
                    </Link>

                </Navbar.Collapse>

            </Navbar>

        </>
    )
}

export default MainNavbar