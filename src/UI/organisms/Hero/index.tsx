import axios from 'axios';
import { useEffect, useState } from 'react'

import Header01 from '../../atoms/Header01';
import Text from '../../atoms/Text';


type Props = {
    title: string,
    subtitle: string,
    className?: string
};

const Hero = ({ title, subtitle, className }: Props) => {


    return (
        <>
            <section id="hero" className={`px-2 py-3 max-w-screen-md mx-auto ${className}`}>
                <Header01 text={title} className="mb-10 font-bold bg-clip-text text-transparent bg-gradient-to-b from-glow-10 to-glow-20 text-shadow" />
                <Text text={subtitle} className='' />
            </section>
        </>

    );

}

export default Hero