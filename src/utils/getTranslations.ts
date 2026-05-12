import type { Lang } from '@/i18n/config';

export async function getTranslations(locale: Lang) {
  return await import(`../i18n/${locale}.json`);
}
