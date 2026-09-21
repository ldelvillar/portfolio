import { SITE } from '@/data/site';
import { CERTS } from '@/data/certifications';
import { PROJECTS } from '@/data/projects';
import type { Lang } from '@/i18n/config';
import type { Translations } from '@/utils/getTranslations';

export type SchemaPage = 'home' | 'projects' | 'certifications';

interface Options {
  site: URL;
  url: string;
  lang: Lang;
  t: Translations;
  title: string;
  image: string;
  page?: SchemaPage;
}

export function buildJsonLd({
  site,
  url,
  lang,
  t,
  title,
  image,
  page,
}: Options) {
  const abs = (path: string) => new URL(path, site).href;
  const personId = abs('/#person');
  const websiteId = abs('/#website');
  const pageId = `${url}#webpage`;
  const langUrl = abs(`/${lang}`);

  const credentials = CERTS.filter(c => c.status !== 'in-progress').map(c => ({
    '@type': 'EducationalOccupationalCredential',
    '@id': abs(`/#cert-${c.id}`),
    name: c.title,
    description: t.certifications.items[c.id].desc,
    credentialCategory: 'certificate',
    dateCreated: c.date,
    keywords: c.skills.join(', '),
    recognizedBy: { '@type': 'Organization', name: c.issuer.split(' · ')[0] },
    ...(c.credentialUrl !== '#' && { url: c.credentialUrl }),
  }));

  const person = {
    '@type': 'Person',
    '@id': personId,
    name: SITE.name,
    url: langUrl,
    email: SITE.email,
    image,
    jobTitle: t.hero.subtitle,
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.location.city,
      addressCountry: SITE.location.country,
    },
    worksFor: { '@type': 'Organization', name: SITE.employer },
    alumniOf: { '@type': 'CollegeOrUniversity', name: SITE.university },
    knowsAbout: [...new Set(PROJECTS.flatMap(p => p.stack))],
    hasCredential: credentials,
    sameAs: [SITE.github, SITE.linkedin],
  };

  const website = {
    '@type': 'WebSite',
    '@id': websiteId,
    url: langUrl,
    name: SITE.name,
    description: t.site.description,
    inLanguage: lang,
    publisher: { '@id': personId },
  };

  const graph: object[] = [person, website];
  if (!page) return { '@context': 'https://schema.org', '@graph': graph };

  const webPage = {
    '@id': pageId,
    url,
    name: title,
    description: t.site.description,
    inLanguage: lang,
    isPartOf: { '@id': websiteId },
    about: { '@id': personId },
    primaryImageOfPage: { '@type': 'ImageObject', url: image },
  };

  if (page === 'home') {
    graph.push({
      '@type': 'ProfilePage',
      ...webPage,
      mainEntity: { '@id': personId },
    });
  } else {
    const isProjects = page === 'projects';
    graph.push({
      '@type': 'CollectionPage',
      ...webPage,
      mainEntity: { '@id': `${url}#list` },
    });
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: SITE.name, item: langUrl },
        {
          '@type': 'ListItem',
          position: 2,
          name: isProjects ? t.projects_page.title : t.certifications.title,
          item: url,
        },
      ],
    });
    graph.push({
      '@type': 'ItemList',
      '@id': `${url}#list`,
      itemListElement: isProjects
        ? PROJECTS.map((p, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            item: {
              '@type': 'SoftwareSourceCode',
              name: p.title,
              description: t.projects_page.items[p.id].desc,
              codeRepository: p.github,
              ...(p.preview && { url: p.preview }),
              dateCreated: p.year,
              keywords: p.stack.join(', '),
              author: { '@id': personId },
            },
          }))
        : credentials.map((c, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            item: { '@id': c['@id'] },
          })),
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}
