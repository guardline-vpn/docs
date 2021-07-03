
import { UserConfig } from 'vitepress'
import { sidebar } from './sidebar'
import { nav } from './nav'

const themeConfig: UserConfig['themeConfig'] = {
  repo: 'guardline-vpn/docs',
  logo: '/assets/guardline-logo.svg',
  docsDir: 'docs',
  docsBranch: 'main',
  docsRepo: 'guardline-vpn/docs',
  editLinks: true,
  editLinkText: 'Suggest changes to this page',
  nav,
  sidebar
}

export default themeConfig