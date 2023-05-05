import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span className='tracking-tight font-semibold text-xl select-none'>Odestry</span>,
  project: {
    link: 'https://github.com/odestry',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/odestry/website',
  footer: {
    text: 'Odestry',
  },
}

export default config
