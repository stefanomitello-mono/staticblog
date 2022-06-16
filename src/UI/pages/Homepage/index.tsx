import axios from 'axios';
import { useEffect, useState } from 'react'
import { Feed } from '../../../models/articles';
import { Data } from '../../../models/data';
import { CallToAction } from '../../molecules/CallToAction';
import { Hero } from '../../organisms/Hero';
import LatestArticles from '../../organisms/LatestArticles';
import Projects from '../../organisms/Projects';

function Home() {


    const [data, setData] = useState<Data>();
    const [post, setPost] = useState<Feed>();


    useEffect(() => {
        axios.get<Data>('/data.json')
            .then((response) => {
                setData(response.data);
            });

        axios.get<Feed>('/articles.json')
            .then((response) => {
                setPost(response.data);
            });
    }, []);


    return (
        <>
            <Hero title={data?.hero.title!} subtitle={data?.hero.subtitle!} className="mt-32" />

            <LatestArticles title={'All articles'} allArticlesUri={'/articles'} feed={post!} />

            <Projects project={data?.project!} />

            <CallToAction title={''} body={''} urlBtn={''} />
        </>
    )
}

export default Home