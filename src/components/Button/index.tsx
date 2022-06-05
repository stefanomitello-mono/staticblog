import { useState } from 'react'


type Props = {
    title: string,
    uri: string,
    isButton: boolean
};

const Button = ({ title, uri, isButton = true }: Props) => {


    return (
        <>
            <a className={`px-3 py-1 flex items-center text-base capitalize font-sans text-text-10 hover:opacity-75 ${isButton ? 'border-2 border-solid border-[#7cc9ff] border-opacity-40 rounded-md' : ''}`} href={uri}>
                {isButton ?
                    (
                        <button className=''>{title}</button>
                    ) : (
                        title
                    )
                }
            </a>
        </>
    );


}

export default Button