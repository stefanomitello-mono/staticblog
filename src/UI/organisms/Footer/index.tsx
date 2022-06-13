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
            <footer className=' py-14 flex flex-col md:flex-row items-center justify-between px-2 max-w-screen-md mx-auto'>

                <Text text={copyright} className="text-xs text-left w-auto my-2" />

                <div className='flex flex-row w-auto'>
                    {socials.map(item => (
                        <a key={item.name} href={item.uri} title={item.name} target="_blank" className='mx-2'>
                            <Icon symbol={item.icon} className="w-8 hover:scale-150" />
                        </a>
                    ))}
                </div>

            </footer>
        </>
    );

}

export default Footer