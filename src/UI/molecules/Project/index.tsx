import Markdown from 'markdown-to-jsx';
import { useState } from 'react'
import Button from '../../atoms/Button';
import Header02 from '../../atoms/Header02';
import Hypertext from '../../atoms/Link';



type Props = {
    title: string,
    body: string,
    txtBtn?: string,
    urlBtn: string,
    sideColor?: string,
    className?: string
};

const Project = ({ title, body, txtBtn = 'Button', urlBtn, sideColor = 'white', className }: Props) => {




    return (

        <>
            <div className={`flex flex-col relative  bg-blue-20 rounded-lg hover:bg-blue-10 p-8 ${className}`}>
                <span className={`w-[5px] h-full rounded-tl rounded-bl bg-${sideColor} absolute left-0 top-0`} />
                <div className="flex flex-col p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-text-10 ">{title}</h5>
                    <p className="mb-3 font-normal text-text-20">{body}</p>

                    <div className='w-40'>
                        <Button title={txtBtn} uri={urlBtn} textColor={'white'}></Button>
                    </div>

                </div>
            </div>

        </>
    );

}

export default Project