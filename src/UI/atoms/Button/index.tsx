import { useState } from 'react'
import { Link } from "react-router-dom";

type Props = {
    title: string,
    uri: string,
    icon?: string,
    backgroundColor?: string,
    textColor?: string,
    className?: string
};

const Button = ({ title, uri, icon, backgroundColor = 'transparent', textColor = 'white', className }: Props) => {

    return (
        <>
            <Link to={uri}>

                <button type="button" className={`text-${textColor} bg-${backgroundColor} hover:text-glow-10 hover:bg-blue-30  capitalize font-sans rounded-lg border-2 border-solid border-[#7cc9ff] border-opacity-40 rounded-mdtext-sm px-5 py-2.5 text-center inline-flex items-center mr-2 ${className} `}>
                    {icon && (
                        <img src={`src/assets/icons/${icon}.png`} className="w-5 h-5 mr-2 -ml-1" />
                    )}
                    {title}
                </button>
            </Link>
        </>
    );

}

export default Button