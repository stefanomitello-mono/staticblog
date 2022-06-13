import { useState } from 'react'
import Icon from '../../atoms/Icons';
import Hypertext from '../../atoms/Link';



type Props = {
    text: string,
    url: string,
    category: string,
    publishedOn: string,
    className?: string
};

const SnippetArticle = ({ text, url, category, publishedOn, className }: Props) => {

    return (
        <article className='flex flex-row items-start my-[30px]'>
            <Icon symbol={category.toLowerCase()} className="w-6 h-6 mr-2" />
            <div className='flex flex-col'>
                <Hypertext title={text} uri={url} className="text-text-10 text-body hover:text-glow-20 px-0 py-0" />
                <span className='text-blue-50 text-xs'>{new Date(publishedOn).toDateString()}</span>
            </div>
        </article>
    );

}

export default SnippetArticle