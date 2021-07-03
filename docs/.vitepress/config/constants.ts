const isProd = process.env.NODE_ENV === 'production'

const site = isProd ? 'https://docs.guardline.app' : 'http://localhost:3000'

export const metaData = {
  title: 'Guardline Docs',
  description: 'Managed Virtual Private Networks',
  site,
  image: `${site}/assets/og-image.png`,
}