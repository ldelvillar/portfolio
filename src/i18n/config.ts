export const SUPPORTED_LANGUAGES = ['en', 'es'] as const;
export type Lang = (typeof SUPPORTED_LANGUAGES)[number];

export const DEFAULT_LANG: Lang = 'es';

export function langStaticPaths() {
  return SUPPORTED_LANGUAGES.map(lang => ({ params: { lang } }));
}
