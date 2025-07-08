export const SUPPORTED_LANGUAGES = ['en', 'es'] as const;
export type Lang = (typeof SUPPORTED_LANGUAGES)[number];
