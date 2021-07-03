
import { HeadConfig } from 'vitepress'
import { metaData } from './constants'

const head: HeadConfig[] = [
  ['meta', { name: 'author', content: 'Guardline Team' }],
  ['meta', { name: 'keywords', content: 'guardline, vpn, virtual, private, network, mesh, docs' }],
  ['link', { rel: 'icon', type: 'image/svg+xml', href: '/assets/guardline-logo.svg' }],

  ['meta', { name: 'HandheldFriendly', content: 'True' }],
  ['meta', { name: 'MobileOptimized', content: '320' }],
  ['meta', { name: 'theme-color', content: '#0033ff' }],

  ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ['meta', { name: 'twitter:site', content: metaData.site }],
  ['meta', { name: 'twitter:title', value: metaData.title }],
  ['meta', { name: 'twitter:description', value: metaData.description }],
  ['meta', { name: 'twitter:image', content: metaData.image }],

  ['meta', { property: 'og:type', content: 'website' }],
  ['meta', { property: 'og:locale', content: 'en_US' }],
  ['meta', { property: 'og:site', content: metaData.site }],
  ['meta', { property: 'og:site_name', content: metaData.title }],
  ['meta', { property: 'og:title', content: metaData.title }],
  ['meta', { property: 'og:image', content: metaData.image }],
  ['meta', { property: 'og:description', content: metaData.description }],

  // ['link', { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' }],
  // ['link', { rel: 'preconnect', crossorigin: 'anonymous', href: 'https://fonts.gstatic.com' }],
  ['link', { href: 'https://staging.guardline.app/custom.cache.proxy/fonts.googleapis.com/css2?family=PT+Sans+Caption:wght@700&family=Roboto:wght@400;700&display=swap&cacheTime=year&isGoogleFont=true', rel: 'stylesheet' }],
]

export default head