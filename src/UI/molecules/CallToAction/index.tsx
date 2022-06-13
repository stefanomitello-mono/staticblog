import Markdown from 'markdown-to-jsx';
import { useState } from 'react'
import Button from '../../atoms/Button';
import Header01 from '../../atoms/Header01';



type Props = {
    title: string,
    body: string,
    txtBtn?: string,
    urlBtn: string,
    sideColor?: string,
    className?: string
};

const CallToAction = ({ }: Props) => {




    return (

        <>

            <section className='bg-blue-20 flex flex-col items-center py-28'>
                <Header01 text={'What are u working on?'} textColor={'glow-10'} />
                <p className='text-white my-5'>
                    Let’s have a conversation! I’d love to hear about what you’re working on and find a way to work together.
                </p>
                <Button title={'Chat'} uri={'#chat'} backgroundColor={'glow-10'} textColor={'blue-10'} className="mt-5 text-blue-20 bg-glow-10s" icon="message" />

            </section>


        </>
    );

}

export default CallToAction