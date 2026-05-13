export interface Cert {
  id: string;
  issuer: string;
  issuerShort: string;
  category: string;
  date: string;
  hours: number;
  status: 'active' | 'expired' | 'in-progress';
  mono: string;
  tint: string;
  skills: string[];
  credentialUrl: string;
}

export const CERTS: Cert[] = [
  /* {
    id: 'aws-saa-c03',
    issuer: 'Amazon Web Services',
    issuerShort: 'AWS',
    category: 'cloud',
    date: '2025-02',
    hours: 80,
    status: 'active',
    mono: 'AWS',
    tint: '#ff9900',
    skills: ['EC2', 'S3', 'IAM', 'VPC', 'Cloud Architecture'],
    credentialUrl: '#',
  }, */
  {
    id: 'ai-900',
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
  },
  {
    id: 'meta-fe-2024',
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
  },
  {
    id: 'gcp-gce-2025',
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
  /* {
    id: 'dca-2025',
    issuer: 'Docker, Inc.',
    issuerShort: 'Docker',
    category: 'devops',
    date: '2025-03',
    hours: 60,
    status: 'active',
    mono: 'DCA',
    tint: '#60a5fa',
    skills: ['Docker', 'Compose', 'Swarm', 'Image Optimization', 'CI/CD'],
    credentialUrl: '#',
  }, */
];
