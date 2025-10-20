// Theme index for Pumpkin Street Web Profiles
// This file contains all available themes and their metadata

export interface Theme {
  id: string
  name: string
  description: string
  cssUrl: string
  previewUrl?: string
  author?: string
  version?: string
}

export const themes: Theme[] = [
  {
    id: 'default',
    name: 'Default',
    description: 'The classic Pumpkin Street theme with orange accents and dark background',
    cssUrl: 'https://raw.githubusercontent.com/pumpkin-street/web-profile-themes/main/themes/default.css',
    author: 'Pumpkin Street',
    version: '1.0.0'
  }
]

export const getThemeById = (id: string): Theme | undefined => {
  return themes.find(theme => theme.id === id)
}

export const getThemeCssUrl = (id: string): string | undefined => {
  const theme = getThemeById(id)
  return theme?.cssUrl
}

export default themes
