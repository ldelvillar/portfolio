import { SITE } from '@/data/site';
import type { Translations } from '@/utils/getTranslations';

export function pageTitle(t: Translations, name?: string): string {
  return name ? `${name} - ${SITE.name}` : `${SITE.name} - ${t.site.tagline}`;
}
