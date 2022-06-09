import { useState } from 'react'

type Props = {
    symbol: React.ReactNode,
    className?: string
};

const Icon = ({ symbol, className = "" }: Props) => {
    return (
        <img
            className={`${className && (className)}`}
            src={`./src/assets/icons/${symbol}.png`} />
    );
}

export default Icon  