import TechStackItem from '@/components/TechStackItem';
import { nanoid } from "nanoid";
import List from '@/components/icons/List';
import type { ReactNode } from 'react';

import AstroIcon from '@/components/logos/AstroIcon';
import ReactIcon from '@/components/logos/ReactIcon';
import ReactRouter from '@/components/logos/ReactRouter';
import Ts from '@/components/logos/TypescriptIcon';
import Tailwind from '@/components/logos/Tailwind';
import Figma from '@/components/logos/Figma';
import Node from '@/components/logos/Node';
import NextJs from '@/components/logos/NextJS';
import PostgreSql from '@/components/logos/PostgreSql';
import DeviconPhp from '@/components/logos/PHP';
import Firebase from '@/components/logos/Firebase';
import Python from '@/components/logos/Python';
import Tensorflow from '@/components/logos/Tensorflow';
import Keras from '@/components/logos/Keras';
import Numpy from '@/components/logos/NumPy';
import OpenCv from '@/components/logos/OpenCV';
import Gcp from '@/components/logos/GCP';
import Azure from '@/components/logos/Azure';
import Git from '@/components/logos/Git';
import C from '@/components/logos/C';
import Linux from '@/components/logos/Linux';
import Bash from '@/components/icons/Bash';

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
                icon: <Ts />,
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
                icon: <Node />,
                name: 'Node JS',
            },
            {
                icon: <NextJs />,
                name: 'Next JS',
            },
            {
                icon: <PostgreSql />,
                name: 'Postgre SQL',
            },
            {
                icon: <DeviconPhp />,
                name: 'PHP',
            },
            {
                icon: <Firebase />,
                name: 'Firebase',
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
                icon: <Linux />,
                name: 'Linux',
            },
            {
                icon: <Bash />,
                name: 'Terminal',
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
                                {/* div for the svg color */}
                                <div className='text-black dark:text-white'>
                                    {technology.icon}
                                </div>
                                <h3>{technology.name}</h3>
                            </div>
                        ));
                        return (
                            <TechStackItem
                                title={field.name}
                                displayedTechnologies={displayedTechnology}
                                key={nanoid()}
                            />
                        );
                    })}
                    
                </div>
            </div>
        </section>
    );
}
