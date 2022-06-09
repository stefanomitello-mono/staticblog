import { useState } from 'react'

type Props = {
    text: string,
    textColor?: string,
    className?: string
};

const Header01 = ({ text, textColor = 'text-10', className = "" }: Props) => {
    return (
        <>
            <h1 className={`font-sans text-h1 md:text-md-h1 font-bold text-${textColor} ${className && (className)} px-5 py-1`}>
                {text}
            </h1>
        </>
    );
}

export default Header01