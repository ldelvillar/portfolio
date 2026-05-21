import type { AstroComponentFactory } from 'astro/runtime/server/index.js';
import AstroIcon from '@/assets/logos/AstroIcon.astro';
import Preact from '@/assets/logos/Preact.astro';
import NextJS from '@/assets/logos/NextJS.astro';
import Prisma from '@/assets/logos/Prisma.astro';
import Tailwind from '@/assets/logos/Tailwind.astro';
import TypeScript from '@/assets/logos/Typescript.astro';
import Express from '@/assets/logos/Express.astro';
import MySQL from '@/assets/logos/MySQL.astro';
import GCP from '@/assets/logos/GCP.astro';

export type ProjectStatus = 'live' | 'dev' | 'archived';
export type ProjectCategory = 'saas' | 'oss' | 'personal';

export const TECH_META: Record<
  string,
  { icon: AstroComponentFactory; bgcolor: string }
> = {
  'Next.js': { icon: NextJS, bgcolor: 'bg-black' },
  Prisma: { icon: Prisma, bgcolor: 'bg-[#14b8a6]' },
  'Express.js': { icon: Express, bgcolor: 'bg-slate-800' },
  'Tailwind CSS': { icon: Tailwind, bgcolor: 'bg-[#003159]' },
  Astro: { icon: AstroIcon, bgcolor: 'bg-[#43008f]' },
  Preact: { icon: Preact, bgcolor: 'bg-[#673ab8]' },
  TypeScript: { icon: TypeScript, bgcolor: 'bg-[#3178c6]' },
  MySQL: { icon: MySQL, bgcolor: 'bg-[#003159]' },
  GCP: { icon: GCP, bgcolor: 'bg-[#003159]' },
};

export const FALLBACK_BG = 'bg-gray-700';

export interface ProjectStat {
  k: string;
  v: string;
  accent?: boolean;
}

export interface Project {
  id: string;
  featured?: boolean;
  category: ProjectCategory[];
  year: string;
  team: string;
  status: ProjectStatus;
  mono: string;
  tint: string;
  url: string;
  image: string;
  stack: string[];
  stats: ProjectStat[];
  github?: string;
  preview?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'notes_app',
    featured: true,
    category: ['personal', 'oss'],
    year: '2024',
    team: '1',
    status: 'live',
    mono: 'SNAP',
    tint: '#22d3ee',
    url: 'snap-notes.vercel.app',
    image: '/images/snap-notes.webp',
    stack: ['Next.js', 'Prisma', 'Express.js', 'Tailwind CSS'],
    stats: [
      { k: 'Stack', v: 'Next.js' },
      { k: 'DB', v: 'Prisma' },
      { k: 'Status', v: 'live' },
    ],
    github: 'https://github.com/ldelvillar/snap-notes',
    preview: 'https://snap-notes.vercel.app/',
  },
  {
    id: 'kmpe',
    featured: false,
    category: ['saas'],
    year: '2026',
    team: '2',
    status: 'live',
    mono: 'KMPE',
    tint: '#fbbf24',
    url: 'kilometrosporexplorar.es',
    image: '/images/kmpe.webp',
    stack: ['Astro', 'Preact', 'TypeScript', 'Express.js', 'Tailwind CSS'],
    stats: [
      { k: 'Users', v: '300+', accent: true },
      { k: 'Stack', v: 'Astro' },
      { k: 'Islands', v: 'Preact' },
    ],
    github: 'https://github.com/ldelvillar/kilometros-por-explorar',
    preview: 'https://www.kilometrosporexplorar.es',
  },
  {
    id: 'movies-api',
    category: ['personal'],
    year: '2025',
    team: '1',
    status: 'live',
    mono: 'MAPI',
    tint: '#34d399',
    url: 'movies-api-production-ead1.up.railway.app',
    image: '/images/movies-api.webp',
    stack: ['TypeScript', 'Express.js', 'MySQL', 'GCP'],
    stats: [
      { k: 'Architecture', v: 'MVC' },
      { k: 'DB', v: 'MySQL' },
      { k: 'Cloud', v: 'GCP' },
    ],
    github: 'https://github.com/ldelvillar/movies-api',
    preview: 'https://movies-api-production-ead1.up.railway.app/movies',
  },
];
