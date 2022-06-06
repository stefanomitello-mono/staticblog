import axios from 'axios';
import { useEffect, useState } from 'react'

import svgIcon from '../assets/icons.svg';
import { Articles } from '../models/articles';


import Button from '../components/Button'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Project from '../components/ProjectCard';



function Home() {

    const [articles, setArticles] = useState<Articles>();

    useEffect(() => {
        axios.get<Articles>('/src/public/articles.json')
            .then((response) => {
                console.log(response.data);
                setArticles(response.data);
            });
    }, []);

    return (
        <>
            <Navbar></Navbar>

            <div className="mt-28 max-w-screen-md mx-auto px-2 ">
                <Hero />
                <section className='mt-24 mb-28'>

                    <div className='flex flex-row justify-between w-full mb-9'>
                        <h3 className='text-white'>Latest Articles</h3>
                        <Button title={'All Articles'} uri={'#articles'} isButton={false} textColor={'white'} />
                    </div>

                    {articles?.articles.map(item => (
                        <article className='flex flex-row items-baseline my-[30px]'>
                            <svg className="mr-4 w-4" viewBox="0 0 25 20" xmlns="http://www.w3.org/2000/svg">
                                <use href={`${svgIcon}#${item.category}`} />
                            </svg>
                            <a href={item.uri} className='flex flex-col'>
                                <h4 className='text-text-10 text-body'>{item.title}</h4>
                                <span className='text-blue-50 text-xs'>{new Date(item.publishedOn).toDateString()}</span>
                            </a>
                        </article>
                    ))}


                </section>

                <section className='mt-24 mb-28'>
                    <div className='flex flex-row justify-between w-full mb-9'>
                        <h3 className='text-white'>Project</h3>
                    </div>

                    <Project title={'title'} uri={'#url'} text={'Hello dude!'} />

                </section>
            </div >
        </>
    )
}

export default Home