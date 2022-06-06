import { useState } from 'react'
import svgIcon from '../../assets/icons.svg';
import Button from '../Button';

type Props = {
    title: string,
    uri: string,
    text: string
};

const Project = ({ title, uri, text }: Props) => {


    return (
        <>
            <div className="flex flex-col relative items-center bg-blue-20 rounded-lg hover:bg-blue-10 p-8">
                <span className="w-[5px] h-full rounded-tl rounded-bl bg-red-600 absolute left-0 top-0" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-text-10 ">Noteworthy technology acquisitions 2021</h5>
                    <p className="mb-3 font-normal text-text-20">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                    <div className='w-40'>
                        <Button title={'Button'} uri={'#qualcosa'} isButton={true} textColor={'white'} ></Button>
                    </div>

                </div>
            </div>


        </>
    );


}

export default Project