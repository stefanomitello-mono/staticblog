import { useState } from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";

type Props = {
    logoImg: string,
    title: string,
    uri: string,
    className?: string
};

const Logo = ({ logoImg, title, uri, className = "" }: Props) => {
    return (
        <>
            <Router>
                <a href={uri} className={`${className && (className)}`}>
                    {logoImg && (<img src={`/assets/${logoImg}.png`} className="mr-4 h-6 w-auto" />)}
                    {title}
                </a>
            </Router>
        </>
    );
}

export default Logo  