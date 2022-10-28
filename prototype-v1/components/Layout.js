import React, { Children } from 'react'
import Footer from './Footer';
import MainNavbar from './MainNavbar';


const Layout = (props) => {

    return (
        <>
            <header className='sticky top-0 bg-white z-50'>
                <div className="xl:container mx-auto">
                    <MainNavbar></MainNavbar>
                </div>
            </header>

            <main>
                <div className="bg-tw-gray min-h-[400px]">
                    {props.children}
                </div>
            </main>

            <footer>
                <div className="xl:container mx-auto">
                    <Footer></Footer>
                </div>
            </footer>




        </>
    )
};

export default Layout;