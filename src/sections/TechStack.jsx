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
import i18next from "i18next";

export default function TechStack() {

    const STACKS = {
        FRONTEND: [
            {
                icon: <AstroIcon />,
                name: 'Astro',
                id: nanoid(),
            },
            {
                icon: <ReactIcon />,
                name: 'React',
                id: nanoid(),
            },
            {
                icon: <Tailwind />,
                name: 'Tailwind CSS',
                id: nanoid(),
            },
            {
                icon: <Sass />,
                name: 'SASS',
                id: nanoid(),
            },
            {
                icon: <Js />,
                name: 'JavaScript',
                id: nanoid(),
            },
            {
                icon: <Figma />,
                name: 'Figma',
                id: nanoid(),
            },
        ],
        BACKEND: [
            {
                icon: <Node />,
                name: 'Node JS',
                id: nanoid(),
            },
            {
                icon: <NextJs />,
                name: 'Next JS',
                id: nanoid(),
            },
            {
                icon: <PostgreSql />,
                name: 'Postgre SQL',
                id: nanoid(),
            },
            {
                icon: <Firebase />,
                name: 'Firebase',
                id: nanoid(),
            },
        ],
        AI: [
            {
                icon: <Python />,
                name: 'Python',
                id: nanoid(),
            },
            {
                icon: <Tensorflow />,
                name: 'Tensorflow',
                id: nanoid(),
            },
            {
                icon: <Keras />,
                name: 'Keras',
                id: nanoid(),
            },
            {
                icon: <Numpy />,
                name: 'NumPy',
                id: nanoid(),
            },
            {
                icon: <OpenCv />,
                name: 'OpenCV',
                id: nanoid(),
            },
        ],
        OTHERS: [
            {
                icon: <Gcp /> ,
                name: 'GCP',
                id: nanoid(),
            },
            {
                icon: <Azure /> ,
                name: 'Azure',
                id: nanoid(),
            },
            {
                icon: <Git />,
                name: 'Git',
                id: nanoid(),
            },
            {
                icon: <C /> ,
                name: 'C',
                id: nanoid(),
            },
            {
                icon: <Linux />,
                name: 'Linux',
                id: nanoid(),
            },
            {
                icon: <Bash />,
                name: 'Terminal',
                id: nanoid(),
            },
        ],
    }

    const frontend = STACKS.FRONTEND.map((item) => (
        <div className="flex flex-col justify-center items-center text-gray-800 dark:text-gray-200" key={item.id}>
            {/* div for the svg color */}
            <div className='text-black dark:text-white'>
                {item.icon}
            </div>
            <h3>{item.name}</h3>
        </div>
    ))

    const backend = STACKS.BACKEND.map((item) => (
        <div className="flex flex-col justify-center items-center text-gray-800 dark:text-gray-200" key={item.id}>
            {/* div for the svg color */}
            <div className='text-black dark:text-white'>
                {item.icon}
            </div>
            <h3>{item.name}</h3>
        </div>
    ))

    const ai = STACKS.AI.map((item) => (
        <div className="flex flex-col justify-center items-center text-gray-800 dark:text-gray-200" key={item.id}>
            {/* div for the svg color */}
            <div className='text-black dark:text-white'>
                {item.icon}
            </div>
            <h3>{item.name}</h3>
        </div>
    ))

    const others = STACKS.OTHERS.map((item) => (
        <div className="flex flex-col justify-center items-center text-gray-800 dark:text-gray-200" key={item.id}>
            {/* div for the svg color */}
            <div className='text-black dark:text-white'>
                {item.icon}
            </div>
            <h3>{item.name}</h3>
        </div>
    ))

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
                    <TechStackItem
                        title="Frontend"
                        array={frontend}
                    />
                    <TechStackItem
                        title="Backend"
                        array={backend}
                    />
                    <TechStackItem
                        title={i18next.language === "en" ? "AI" : "IA"}
                        array={ai}
                    />
                    <TechStackItem
                        title={i18next.language === "en" ? "Others" : "Otros"}
                        array={others}
                    />
                </div>
            </div>
        </section>
    )
}
