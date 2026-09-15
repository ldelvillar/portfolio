import type { Translations } from '@/utils/getTranslations';

type CertTexts = Translations['certifications'];

export interface Cert {
  id: keyof CertTexts['items'];
  title: string;
  issuer: string;
  issuerShort: string;
  category: Exclude<keyof CertTexts['categories'], 'all'>;
  date: string;
  hours: number;
  status: 'active' | 'expired' | 'in-progress';
  mono: string;
  tint: string;
  skills: string[];
  credentialUrl: string;
  pdfUrl?: string;
}

export const CERTS: Cert[] = [
  {
    id: 'ai-900',
    title: 'AI-900: Azure AI Fundamentals',
    issuer: 'Microsoft',
    issuerShort: 'Microsoft',
    category: 'ai',
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
  },
  {
    id: 'meta-fe-2024',
    title: 'Meta Front-End Developer Professional',
    issuer: 'Meta · Coursera',
    issuerShort: 'Meta',
    category: 'dev',
    date: '2024-04',
    hours: 156,
    status: 'active',
    mono: 'META',
    tint: '#a78bfa',
    skills: ['React', 'JavaScript', 'HTML/CSS', 'UX', 'Bootstrap'],
    credentialUrl: '#',
  },
  {
    id: 'claude-code-2026',
    title: 'Claude Code in Action',
    issuer: 'Anthropic',
    issuerShort: 'Anthropic',
    category: 'ai',
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
  },
  {
    id: 'gcp-gce-2025',
    title: 'Google Cloud Professional Cloud Architect',
    issuer: 'Google',
    issuerShort: 'GCP',
    category: 'cloud',
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
