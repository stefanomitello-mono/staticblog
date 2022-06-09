import { useState } from 'react'

type Props = {
    text: string,
    textColor?: string,
    className?: string
};

const Text = ({ text, textColor = 'text-10', className = "" }: Props) => {
    return (
        <>
            <p className={`font-sans text-h2 md:text-md-h2 font-bold text-${textColor} ${className && (className)} px-5 py-1`}>
                {text}
            </p>
        </>
    );
}

export default Text  