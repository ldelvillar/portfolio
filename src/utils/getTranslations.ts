// src/utils/getTranslations.ts
type Locale = 'en' | 'es';

export async function getTranslations(locale: Locale) {
  return await import(`../i18n/${locale}.json`);
}
