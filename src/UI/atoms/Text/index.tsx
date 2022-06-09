import { useState } from 'react'

type Props = {
    text: React.ReactNode,
    textColor?: string,
    className?: string
};

const Text = ({ text, textColor = 'text-10', className = "" }: Props) => {
    return (
        <>
            <p className={`font-sans text-base md:text-body text-${textColor} ${className && (className)} px-5 py-1`}>
                {text}
            </p>
        </>
    );
}

export default Text  