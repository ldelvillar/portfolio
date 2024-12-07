import Atropos from "atropos/react";
import 'atropos/css';
import type { ReactNode } from 'react';

interface TechStackItemProps {
    title: string;
    displayedTechnologies: ReactNode[];
}

export default function TechStackItem({ title, displayedTechnologies }: TechStackItemProps) {
    return (
        <Atropos
            activeOffset={40}
            shadowScale={1.05}
        >
            <div className="h-[100%] flex flex-col items-center bg-white dark:bg-primary border dark:border-gray-800 rounded-2xl">
                <h2 className="text-3xl font-bold text-gray-100 bg-gradient-to-t from-[#fffc5f] to-[#c9b500] dark:from-[#fffec9] dark:to-[#efeb00] bg-clip-text text-transparent mt-3">{title}</h2>
                <div className="my-6 grid grid-cols-3 gap-6">
                    {displayedTechnologies}
                </div>
            </div>
        </Atropos>
    );
}
