import { useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '../../atoms/Button';
import Hypertext from '../../atoms/Link';



type Props = {
    text: string,
    url: string,
    isButton: boolean,
    className?: string
};

const Navbar = ({ text, url, isButton = false, className }: Props) => {

    if (isButton) {
        return (
            <Button title={text} uri={url} className={className} />
        );
    } else {
        return (
            <>
                <Hypertext title={text} uri={url} className={className} />
            </>
        );
    }


}

export default Navbar  