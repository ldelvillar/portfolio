import { nanoid } from "nanoid";
import List from '@/components/icons/List';
import type { ReactNode } from 'react';
import Atropos from "atropos/react";
import 'atropos/css';

import AstroIcon from '@/components/logos/AstroIcon';
import ReactIcon from '@/components/logos/ReactIcon';
import ReactRouter from '@/components/logos/ReactRouter';
import TS from '@/components/logos/TypescriptIcon';
import Tailwind from '@/components/logos/Tailwind';
import Figma from '@/components/logos/Figma';
import NextJS from '@/components/logos/NextJS';
import Node from '@/components/logos/Node';
import Express from '@/components/logos/Express';
import MySQL from '@/components/logos/MySQL';
import PHP from '@/components/logos/PHP';
import Firebase from '@/components/logos/Firebase';
import Python from '@/components/logos/Python';
import Tensorflow from '@/components/logos/Tensorflow';
import Keras from '@/components/logos/Keras';
import Pytorch from "@/components/logos/PyTorch";
import Numpy from '@/components/logos/NumPy';
import OpenCv from '@/components/logos/OpenCV';
import Gcp from '@/components/logos/GCP';
import Azure from '@/components/logos/Azure';
import Git from '@/components/logos/Git';
import C from '@/components/logos/C';
import Java from '@/components/logos/Java';
import Linux from '@/components/logos/Linux';

interface Technology {
    icon: ReactNode;
    name: string;
}

interface TechField {
    name: string;
    technologies: Technology[];
}

const FIELDS: TechField[] = [
    {
        name: "Frontend",
        technologies: [
            {
                icon: <AstroIcon />,
                name: 'Astro',
            },
            {
                icon: <ReactIcon />,
                name: 'React',
            },
            {
                icon: <ReactRouter />,
                name: 'React Router',
            },
            {
                icon: <TS />,
                name: 'TypeScript',
            },
            {
                icon: <Tailwind />,
                name: 'Tailwind CSS',
            },
            {
                icon: <Figma />,
                name: 'Figma',
            },
        ],
    },
    {
        name: "Backend",
        technologies: [
            {
                icon: <NextJS />,
                name: 'Next JS',
            },
            {
                icon: <Node />,
                name: 'Node JS',
            },
            {
                icon: <Express />,
                name: 'Express',
            },
            {
                icon: <MySQL />,
                name: 'MySQL',
            },
            {
                icon: <Firebase />,
                name: 'Firebase',
            },
            {
                icon: <PHP />,
                name: 'PHP',
            },
        ],
    },
    {
        name: "Machine Learning",
        technologies: [
            {
                icon: <Python />,
                name: 'Python',
            },
            {
                icon: <Tensorflow />,
                name: 'Tensorflow',
            },
            {
                icon: <Keras />,
                name: 'Keras',
            },
            {
                icon: <Pytorch />,
                name: 'PyTorch',
            },
            {
                icon: <Numpy />,
                name: 'NumPy',
            },
            {
                icon: <OpenCv />,
                name: 'OpenCV',
            },
        ],
    },
    {
        name: "Others",
        technologies: [
            {
                icon: <Gcp /> ,
                name: 'GCP',
            },
            {
                icon: <Azure /> ,
                name: 'Azure',
            },
            {
                icon: <Git />,
                name: 'Git',
            },
            {
                icon: <C /> ,
                name: 'C',
            },
            {
                icon: <Java />,
                name: 'Java',
            },
            {
                icon: <Linux />,
                name: 'Linux',
            },
        ],
    }
];

export default function TechStack() {
    return (
        <section id='techstack' className="scroll-m-20 mt-36 w-full mx-auto container lg:max-w-4xl md:max-w-2xl pb-10">
            <div className="mb-14">
                <h2 className='text-gray-900 dark:text-white text-3xl font-bold mb-6 flex items-center'>
                    <span className="mr-5">
                        <List />
                    </span>
                    Tech Stack
                </h2>

                <div className="flex flex-col md:grid md:grid-cols-2 gap-5">
                    {FIELDS.map(field => {
                        const displayedTechnology = field.technologies.map((technology) => (
                            <div className="flex flex-col justify-center items-center text-gray-800 dark:text-gray-200" key={nanoid()}>
                                <div className='text-black dark:text-white'>
                                    {technology.icon}
                                </div>
                                <h3>{technology.name}</h3>
                            </div>
                        ));
                        return (
                            <Atropos
                                activeOffset={40}
                                shadowScale={1.05}
                                key={nanoid()}
                            >
                                <div className="h-[100%] flex flex-col items-center bg-white dark:bg-primary border dark:border-gray-800 rounded-2xl">
                                    <h2 className="text-3xl font-bold text-gray-100 bg-gradient-to-t from-[#fffc5f] to-[#c9b500] dark:from-[#fffec9] dark:to-[#efeb00] bg-clip-text text-transparent mt-3">{field.name}</h2>
                                    <div className="my-6 grid grid-cols-3 gap-6">
                                        {displayedTechnology}
                                    </div>
                                </div>
                            </Atropos>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
