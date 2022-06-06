import { useState } from 'react'
import svgIcon from '../../assets/icons.svg';
import { Link } from "react-router-dom";



type Props = {
    title: string,
    uri: string,
    isButton: boolean,
    icon?: string,
    backgroundColor?: string,
    textColor: string
};

const Button = ({ title, uri, isButton = true, icon, backgroundColor, textColor }: Props) => {


    return (
        <>
            <Link className={`px-3 flex items-center justify-center text-center mx-text-base capitalize font-sans text-${textColor} hover:opacity-75 ${backgroundColor ? (`bg-${backgroundColor}`) : ('')} ${isButton ? ('border-2 border-solid border-[#7cc9ff] border-opacity-40 rounded-md hover:bg-blue-30 hover:text-glow-10') : ('')}`} to={uri}>
                {isButton ?
                    (
                        <button className='py-1'>
                            {icon && (
                                <svg className="mr-4 w-4" viewBox="0 0 25 20" xmlns="http://www.w3.org/2000/svg">
                                    <use href={`${svgIcon}#${icon}`} />
                                </svg>
                            )}
                            {title}
                        </button>
                    ) :
                    (title)
                }
            </Link>
        </>
    );


}

export default Button