import axios from 'axios';
import { useEffect, useState } from 'react'
import { Feed } from '../../../models/articles';
import Header01 from '../../atoms/Header01';
import Post from '../../molecules/Article';
import SnippetArticle from '../../molecules/Article/previewArticle';
import LatestArticles from '../../organisms/LatestArticles';

function Articles() {


    const [post, setPost] = useState<Feed>();


    useEffect(() => {

        axios.get<Feed>('/articles.json')
            .then((response) => {
                setPost(response.data);
            });
    }, []);


    return (
        <>


            <div className='container px-2 py-3 my-24 max-w-screen-md mx-auto'>

                <Header01 text={'Articles'} className='mb-14' />

                {
                    post && post.articles.map(item => (
                        <Post key={item.uri} title={item.title} url={item.uri} category={item.category} publishedOn={item.publishedOn} body={item.body} className='mb-24' />
                    ))
                }
            </div>


        </>
    )

}

export default Articles