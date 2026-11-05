import type { ImageMetadata } from 'astro';
import type { Translations } from '@/utils/getTranslations';
import ibmAgents from '@/assets/images/cert-ibm-agents-2026.webp';
import ai900 from '@/assets/images/cert-ai-900.webp';
import dp900 from '@/assets/images/cert-dp-900.webp';
import claudeCode from '@/assets/images/cert-claude-code-2026.webp';

type CertTexts = Translations['certifications'];

export interface Cert {
  id: keyof CertTexts['items'];
  title: string;
  issuer: string;
  date: string;
  hours: number;
  status: 'active' | 'in-progress';
  mono: string;
  tint: string;
  skills: string[];
  credentialUrl: string;
  pdfUrl?: string;
  image?: ImageMetadata;
}

export const CERTS: Cert[] = [
  {
    id: 'ibm-agents-2026',
    title: 'Building AI Agents and Agentic Workflows Specialization',
    issuer: 'IBM',
    date: '2026-10',
    hours: 35,
    status: 'active',
    mono: 'IBMA',
    tint: '#22d3ee',
    skills: [
      'Multi-Agent Systems',
      'Agent Design',
      'LangGraph',
      'LangChain',
      'CrewAI',
      'AutoGen',
      'MCP',
      'A2A',
      'Tool Integration',
      'Memory Management',
      'Context Handling',
    ],
    credentialUrl:
      'https://www.credly.com/badges/0022ad88-23ac-4ed8-a030-6b3f457cf705/public_url',
    pdfUrl: '/certifications/ibm-agents-2026.pdf',
    image: ibmAgents,
  },
  {
    id: 'ai-900',
    title: 'AI-900: Azure AI Fundamentals',
    issuer: 'Microsoft',
    date: '2024-09',
    hours: 30,
    status: 'active',
    mono: 'AI-900',
    tint: '#22d3ee',
    skills: [
      'Machine Learning',
      'Deep Learning',
      'NLP',
      'Computer Vision',
      'Azure AI Services',
      'Cluster Management',
    ],
    credentialUrl:
      'https://www.credly.com/badges/6e265efb-5577-4d90-9d37-890bf065e632/public_url',
    pdfUrl: '/certifications/ai-900.pdf',
    image: ai900,
  },
  {
    id: 'dp-900',
    title: 'DP-900: Azure Data Fundamentals',
    issuer: 'Microsoft',
    date: '2025-06',
    hours: 20,
    status: 'active',
    mono: 'DP-900',
    tint: '#0078d4',
    skills: [
      'Relational Data',
      'Non-Relational Data',
      'Azure Data Services',
      'Data Analytics',
      'Azure Synapse',
      'Power BI',
    ],
    credentialUrl: 'https://verify.certiport.com/',
    pdfUrl: '/certifications/dp-900.pdf',
    image: dp900,
  },
  {
    id: 'claude-code-2026',
    title: 'Claude Code in Action',
    issuer: 'Anthropic',
    date: '2026-05',
    hours: 1.5,
    status: 'active',
    mono: 'CLAUDE',
    tint: '#d97757',
    skills: [
      'Prompt Engineering',
      'Agent Design',
      'MCP',
      'Task Automation',
      'Productivity',
    ],
    credentialUrl: 'https://verify.skilljar.com/c/2ko5u7gh7n4t',
    pdfUrl: '/certifications/claude-code-2026.pdf',
    image: claudeCode,
  },
  {
    id: 'gcp-gce-2025',
    title: 'Google Cloud Professional Cloud Architect',
    issuer: 'Google',
    date: '2025-08',
    hours: 120,
    status: 'in-progress',
    mono: 'GCE',
    tint: '#4285f4',
    skills: [
      'Cloud Architecture',
      'Compute Engine',
      'Networking',
      'Security',
      'GCP Services',
      'Cost Management',
    ],
    credentialUrl: '#',
  },
];
