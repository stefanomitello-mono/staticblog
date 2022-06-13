import { useState } from 'react'

type Props = {
    text: string,
    textColor?: string,
    className?: string
};

const Header02 = ({ text, textColor = 'text-10', className = "" }: Props) => {
    return (
        <>
            <h2 className={`font-sans text-h2 md:text-md-h2 font-bold text-${textColor} ${className && (className)} py-1`}>
                {text}
            </h2>
        </>
    );
}

export default Header02  