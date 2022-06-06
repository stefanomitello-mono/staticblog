import axios from 'axios';
import { useEffect, useState } from 'react'

import svgIcon from '../assets/icons.svg';
import { Articles } from '../models/articles';


import Button from '../components/Button'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Project from '../components/ProjectCard';



function Feed() {

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

            {articles}
        </>
    )
}

export default Feed