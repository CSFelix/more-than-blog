import CONFIG from 'morethan-log.config'
import Head from 'next/head'

export type MetaConfigProps = {
  title: string
  description: string
  type: 'Website' | 'Post' | 'Page' | string
  date?: string
  url: string
}

const MetaConfig: React.FC<MetaConfigProps> = ({ ...props }) => {
  const meta = {
    ...props,
  }

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content="follow, index" />
      <meta charSet="UTF-8" />
      {CONFIG.seo.keywords && (
        <meta name="keywords" content={CONFIG.seo.keywords.join(', ')} />
      )}
      <meta name="description" content={meta.description} />
      {/* og */}
      <meta property="og:type" content={meta.type} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={meta.url} />
      {CONFIG.lang && <meta property="og:locale" content={CONFIG.lang} />}
      {CONFIG.ogImageGenerateURL && (
        <meta
          property="og:image"
          content={`${CONFIG.ogImageGenerateURL}/${encodeURIComponent(
            meta.title
          )}.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fmorethan-log.vercel.app%2Flogo-for-dark-bg.svg`}
        />
      )}
      {/* twitter */}
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:card" content="summary_large_image" />
      {CONFIG.ogImageGenerateURL && (
        <meta
          name="twitter:image"
          content={`${CONFIG.ogImageGenerateURL}/${encodeURIComponent(
            meta.title
          )}.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fmorethan-log.vercel.app%2Flogo-for-dark-bg.svg`}
        />
      )}
      {/* post */}
      {meta.type === 'Post' && (
        <>
          <meta property="article:published_time" content={meta.date} />
          <meta property="article:author" content={CONFIG.profile.name} />
        </>
      )}
    </Head>
  )
}

export default MetaConfig
