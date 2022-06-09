import { useState } from 'react'

type Props = {
    text: string,
    textColor?: string,
    className?: string
};

const Text = ({ text, textColor = 'text-20', className = "" }: Props) => {
    return (
        <>
            <h2 className={`font-sans text-base md:text-body font-normal text-${textColor} ${className && (className)}`}>
                {text}
            </h2>
        </>
    );
}

export default Text