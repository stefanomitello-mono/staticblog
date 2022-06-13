import axios from 'axios';
import { useEffect, useState } from 'react'
import { Feed } from '../../../models/articles';

import Header02 from '../../atoms/Header02';
import Hypertext from '../../atoms/Link';
import SnippetArticle from '../../molecules/Article/previewArticle';


type Props = {
    title: string,
    allArticlesUri: string,
    feed: Feed,
    className?: string
};

const LatestArticles = ({ title, allArticlesUri, feed, className }: Props) => {


    return (
        <>
            <section id="articles-latest" className={`px-2 py-3 max-w-screen-md mx-auto ${className}`}>
                <div className='flex flex-row justify-between'>
                    <Header02 text={title} />
                    <Hypertext title={'All Articles >>'} uri={allArticlesUri} />
                </div>
                <div>
                    {
                        feed && feed.articles.slice(0, 3).map(item => (
                            <SnippetArticle key={item.uri} text={item.title} url={item.uri} category={item.category} publishedOn={item.publishedOn} />
                        ))
                    }


                </div>

            </section>
        </>

    );

}

export default LatestArticles