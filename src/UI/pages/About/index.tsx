import axios from 'axios';
import Markdown from 'markdown-to-jsx';
import { useEffect, useState } from 'react'
import Header01 from '../../atoms/Header01';

function About() {


    const [data, setData] = useState<any>();

    useEffect(() => {
        axios.get<any>('/src/public/about.json')
            .then((response) => {
                setData(response.data);
            });
    }, []);

    console.log(data)



    return (
        <>
            <div className='container px-2 py-3 my-24 max-w-screen-md mx-auto'>

                <Header01 text={'About'} />

                <div className='text-white'>
                    {data && (data.body)}
                </div>


            </div>

        </>
    )
}

export default About