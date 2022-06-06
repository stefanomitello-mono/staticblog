import { useEffect, useState } from 'react'
import { Data } from '../../models/data';
import './style.scss'
import axios from 'axios';



function Hero() {

    const [data, setData] = useState<Data>();

    useEffect(() => {
        axios.get<Data>('/src/public/data.json')
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            });
    }, []);

    return (
        <>
            <h1 className='mb-10 font-bold bg-clip-text text-transparent bg-gradient-to-b from-glow-10 to-glow-20 text-shadow'>{data?.hero.title}</h1>
            <p className='text-lg font-medium text-text-10'>{data?.hero.subtitle}</p>
        </>
    );
}

export default Hero