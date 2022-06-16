import { useState } from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import Icon from '../Icons';

type Props = {
    title: string,
    uri: string,
    icon?: string,
    textColor?: string,
    className?: string
};

const Hypertext = ({ title, uri, icon, textColor = 'white', className }: Props) => {

    return (
        <>
            <Router>
                <a href={uri} className={`text-${textColor} hover:text-glow-10 font-sans text-sm text-center inline-flex mr-2 ${className} `}>
                    {title}

                    {icon && (
                        <Icon symbol={icon}></Icon>
                    )}
                </a>
            </Router>
        </>
    );

}

export default Hypertext