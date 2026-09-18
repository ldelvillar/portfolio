import en from '@/i18n/en.json';
import es from '@/i18n/es.json';
import de from '@/i18n/de.json';
import type { Lang } from '@/i18n/config';

export type Translations = typeof en;

const translations: Record<Lang, Translations> = { en, es, de };

export function getTranslations(lang: Lang): Translations {
  return translations[lang];
}
