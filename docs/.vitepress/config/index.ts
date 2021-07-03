import { UserConfig } from 'vitepress'
import { metaData } from './constants'
import head from './head'
import themeConfig from './theme'

const config: UserConfig = {
  title: 'Guardline Docs',
  description: metaData.description,
  head,
  themeConfig,
}

export default config