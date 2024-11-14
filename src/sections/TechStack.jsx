import TechStackItem from '@/components/TechStackItem'
import Sass from '@/components/logos/Sass.jsx';
import Js from '@/components/logos/Js.jsx';
import ReactIcon from '@/components/logos/ReactIcon.jsx';
import Tailwind from '@/components/logos/Tailwind.jsx';
import Figma from '@/components/logos/Figma.jsx';
import Node from '@/components/logos/Node.jsx';
import NextJs from '@/components/logos/NextJs.jsx';
import PostgreSql from '@/components/logos/PostgreSql.jsx';
import Firebase from '@/components/logos/Firebase.jsx';
import Python from '@/components/logos/Python.jsx';
import Tensorflow from '@/components/logos/Tensorflow.jsx';
import Keras from '@/components/logos/Keras.jsx';
import Numpy from '@/components/logos/Numpy.jsx';
import OpenCv from '@/components/logos/OpenCv.jsx';
import Gcp from '@/components/logos/Gcp.jsx';
import Azure from '@/components/logos/Azure.jsx';
import Git from '@/components/logos/Git.jsx';
import C from '@/components/logos/C.jsx';
import Linux from '@/components/logos/Linux.jsx';
import Bash from '@/components/logos/Bash.jsx';
import { nanoid } from "nanoid";
import List from '@/components/icons/List';
import AstroIcon from '@/components/logos/AstroIcon';

export default function TechStack() {
    const FIELDS = [
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
                    icon: <Tailwind />,
                    name: 'Tailwind CSS',
                },
                {
                    icon: <Sass />,
                    name: 'SASS',
                },
                {
                    icon: <Js />,
                    name: 'JavaScript',
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
