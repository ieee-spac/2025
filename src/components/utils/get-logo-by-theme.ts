import type { ITIER_LOGO } from '@/content/constants'

// Utility function to return the correct logo based on the theme
export function getLogoByTheme(theme: string | undefined, logo: ITIER_LOGO) {
  return theme === 'light' ? logo.light : logo.dark
}
