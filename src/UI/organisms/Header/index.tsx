import axios from 'axios';
import { useEffect, useState } from 'react'
import Logo from '../../atoms/Logo';
import Navbar from '../../molecules/Navbar';

import { INavbar } from '../../../models/data';

type Props = {
    titleSite: string,
    urlSite: string,
    iconLogo?: string,
    navItem?: INavbar[],
    className?: string
};

const Header = ({ titleSite, urlSite, iconLogo, navItem = [], className }: Props) => {

    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 max-w-screen-md mx-auto">
            <div className="container mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between items-center lg:w-auto lg:static lg:block lg:justify-start">
                    <Logo logoImg={iconLogo!} title={titleSite} uri={urlSite} className="text-lg font-bold inline-flex py-2 whitespace-nowrap capitalize text-text-10" />
                    <button
                        className="text-white cursor-pointer px-3 py-1 block lg:hidden"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <svg viewBox="0 0 100 80" width="40" height="40" className='fill-white text-right'>
                            <rect width="100" height="3"></rect>
                            <rect y="30" width="66" height="3"></rect>
                            <rect y="60" width="100" height="3"></rect>
                        </svg>
                    </button>
                </div>

                <div
                    className={
                        "lg:flex flex-grow items-center" +
                        (navbarOpen ? " flex" : " hidden")
                    }
                    id="example-navbar-danger"
                >
                    <ul className="flex flex-col w-full items-center lg:flex-row lg:justify-end list-none lg:ml-auto">



                        {navItem.map(item => (
                            <li key={item.name} className="nav-item mx-4 ">
                                <Navbar text={item.name} url={item.uri} isButton={item.isButton} />
                            </li>
                        ))}

                    </ul>
                </div>




            </div>
        </nav >
    );

}

export default Header