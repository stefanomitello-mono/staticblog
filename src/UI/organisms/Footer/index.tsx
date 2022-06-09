import axios from 'axios';
import { useEffect, useState } from 'react'

import { Social } from '../../../models/data';
import Icon from '../../atoms/Icons';
import Hypertext from '../../atoms/Link';
import Text from '../../atoms/Text';

type Props = {
    copyright: string,
    socials: Social[],
    className?: string
};

const Footer = ({ copyright, socials = [], className }: Props) => {


    return (
        <>
            <footer className='w-screen py-14 flex flex-row items-center justify-center px-2 max-w-screen-md mx-auto'>

                <Text text={copyright} className="text-xs text-left" />
                <div className='w-1/3'></div>

                <div className='flex flex-row '>
                    {socials.map(item => (
                        <a key={item.name} href={item.uri} title={item.name} target="_blank" className='mx-2'>
                            <Icon symbol={item.icon} className="w-14 hover:scale-150" />
                        </a>
                    ))}
                </div>

            </footer>
        </>
    );

}

export default Footer