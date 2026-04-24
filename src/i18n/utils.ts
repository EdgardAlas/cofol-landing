import { getRelativeLocaleUrl } from 'astro:i18n';
import { languages, defaultLang } from './ui';

export type Locale = keyof typeof languages;

export function getCurrentLocale(currentLocale: string | undefined): Locale {
  return (currentLocale && currentLocale in languages ? currentLocale : defaultLang) as Locale;
}

export function getLocaleUrl(locale: Locale, path = '/'): string {
  return getRelativeLocaleUrl(locale, path).replace(/\/$/, '') || '/';
}
