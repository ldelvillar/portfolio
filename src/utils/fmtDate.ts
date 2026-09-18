import type { Translations } from '@/utils/getTranslations';

export function fmtDate(yymm: string, t: Translations): string {
  const [y, m] = yymm.split('-').map(Number);
  return `${t.months[m - 1]} ${y}`;
}
