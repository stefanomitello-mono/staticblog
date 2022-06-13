import Markdown from 'markdown-to-jsx';
import { useState } from 'react'
import { IProject } from '../../../models/data';
import Project from '../../molecules/Project';



type Props = {
    project: IProject[],
    className?: string
};

const Projects = ({ project, className }: Props) => {



    return (

        <>

            <section className='mt-24 mb-28 px-2 py-3 max-w-screen-md mx-auto'>
                <div className='flex flex-row justify-between w-full mb-9'>
                    <h3 className='text-white'>Project</h3>
                </div>

                <div className="grid overflow-hidden grid-cols-1 md:grid-cols-2 grid-rows-2 gap-3 grid-flow-row w-auto">

                    {project && project.map(item => (
                        <div className="col-auto self-end">
                            <Project key={item.title} title={item.title} urlBtn={item.button} body={item.body} sideColor={item.sideColor} />
                        </div>
                    ))}
                </div>

            </section>

        </>
    );

}

export default Projects