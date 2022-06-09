import { useState } from 'react'
import { Link } from "react-router-dom";
import Icon from '../Icons';

type Props = {
    title: string,
    uri: string,
    icon?: string,
    textColor?: string,
    className?: string
};

const Hypertext = ({ title, uri, icon, textColor = 'white', className }: Props) => {

    console.log(title, uri, icon, textColor)
    return (
        <>
            <Link to={uri} className={`text-${textColor} hover:text-glow-10 font-sans text-sm px-5 py-2.5 text-center inline-flex mr-2 ${className} `}>
                {title}

                {icon && (
                    <Icon symbol={icon}></Icon>
                )}
            </Link>
        </>
    );

}

export default Hypertext