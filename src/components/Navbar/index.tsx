import { useEffect, useState } from 'react'

import axios from 'axios';
import { Link } from "react-router-dom";


import { Data } from "../../models/data";
import svgIcon from '../../assets/icons.svg';
import Button from '../Button';

function Navbar() {

    const [data, setData] = useState<Data>();

    useEffect(() => {
        axios.get<Data>('/src/public/data.json')
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            });
    }, []);



    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 max-w-screen-md mx-auto">
                <div className="container mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between items-baseline lg:w-auto lg:static lg:block lg:justify-start">
                        <Link
                            className="text-lg font-bold inline-flex py-2 whitespace-nowrap capitalize text-text-10"
                            to={data?.site.baseUri!}
                        >
                            <svg className="mr-4 w-4" viewBox="0 0 25 20" xmlns="http://www.w3.org/2000/svg">
                                <use href={`${svgIcon}#${data?.site.icon}`} />
                            </svg>
                            {data?.site.name}
                        </Link>
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
                        <ul className="flex flex-col items-center lg:flex-row list-none lg:ml-auto">
                            {data?.navbar.map(item => (
                                <li key={item.name} className="nav-item mx-4 ">
                                    <Button title={item.name} uri={item.uri} isButton={item.isButton} textColor={'white'} />
                                </li>
                            ))}

                        </ul>
                    </div>
                </div>
            </nav >
        </>
    );
}

export default Navbar