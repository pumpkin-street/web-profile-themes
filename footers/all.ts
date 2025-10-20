// Footer index for Pumpkin Street Web Profiles
// This file contains all available footers and their metadata

export interface Footer {
  id: string
  name: string
  description: string
  cssUrl: string
  htmlUrl?: string
  author?: string
  version?: string
}

export const footers: Footer[] = [
  {
    id: 'default',
    name: 'Default',
    description: 'The standard Pumpkin Street footer with branding',
    cssUrl: 'https://raw.githubusercontent.com/pumpkin-street/web-profile-themes/main/footers/default.css',
    htmlUrl: 'https://raw.githubusercontent.com/pumpkin-street/web-profile-themes/main/footers/default.html',
    author: 'Pumpkin Street',
    version: '1.0.0'
  },
  {
    id: 'none',
    name: 'None',
    description: 'No footer displayed',
    cssUrl: '',
    author: 'Pumpkin Street',
    version: '1.0.0'
  }
]

export const getFooterById = (id: string): Footer | undefined => {
  return footers.find(footer => footer.id === id)
}

export const getFooterCssUrl = (id: string): string | undefined => {
  const footer = getFooterById(id)
  return footer?.cssUrl
}

export const getFooterHtmlUrl = (id: string): string | undefined => {
  const footer = getFooterById(id)
  return footer?.htmlUrl
}

export default footers
