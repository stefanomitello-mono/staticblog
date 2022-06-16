import { useState } from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom';
import Header02 from '../../atoms/Header02';
import Icon from '../../atoms/Icons';
import Hypertext from '../../atoms/Link';



type Props = {
    title: string,
    url: string,
    category: string,
    publishedOn: string,
    body: string,
    className?: string
};

const Post = ({ title, url, category, publishedOn, body, className }: Props) => {




    return (

        <>
            <article className={className}>
                <Router>
                    <a href={url}>
                        <span className='text-blue-50 text-xs'>{new Date(publishedOn).toDateString()}</span>
                        <Header02 text={title} className="text-text-10 text-body hover:text-glow-20 px-0 py-0 mt-4 mb-3" />
                        <p className='text-body text-white mb-6'>
                            {body.substr(0, 140)}...

                        </p>
                        <Hypertext title={'Read more..'} uri={url} textColor='blue-50' className='text-xs' />

                    </a>
                </Router>
            </article>

        </>
    );

}

export default Post