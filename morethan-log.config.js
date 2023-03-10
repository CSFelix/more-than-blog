const CONFIG = {
  // profile setting
  profile: {
    name: 'CSFelix',
    image: '/debian.png',  // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    description: 'Data Science Student',
    linkedin: 'csfelix',
    email: 'csfelix008@gmail.com',
    github: 'CSFelix',
    instagram: 'csfelix08',
    kaggle: 'dsfelix',
  },
  projects: [
    {
      name: 'Portfolio',
      href: 'https://csfelix.github.io'
    },
    {
      name: 'Working for FX Sistemas',
      href: 'https://www.fxsistemas.com.br',
    },
    {
      name: 'Resume',
      href: 'https://csfelix.github.io/assets/docs/curriulum-vitae-english.pdf',
    }
  ],
  // blog setting
  blog: {
    title: 'CSFelix',
    description: "What's shaking, bacon?",
    theme: 'auto' // ['light', 'dark', 'auto']
  },

  // CONFIG configration
  link: 'https://csfelix.vercel.app',
  since: 2018, // If leave this empty, current year will be used.
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  postsPerPage: 10,
  ogImageGenerateURL: 'https://og-image-korean.vercel.app', // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ['Blog', 'Website', 'Notion', 'DataScience', 'Machine Learning'
  , 'Deep Learning', 'Python', 'Numpy', 'Seaborn', 'Matplotlib', 'Matplot'
  , 'Scikit Learn', 'SKLearn', 'Scikit', 'TensorFlow', 'Tensor Flow'
  , 'Quantum Computation', 'Quantum', 'Qiskit'],
  },

  // notion configuration
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
    // if you prefer not to make your database public, use this!!!
    accessToken: process.env.NOTION_ACCESS_TOKEN
  },

  // plugin configuration
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: '' // ex. G-9N3FE0117Q
    }
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: '' // ex. qvdR1gXMirk_DCUOKPgRnxu2x6fqSPrquYnEZZMjR9w
    }
  },
  utterances: {
    enable: true,
    config: {
      repo: 'CSFelix/more-than-blog',
      'issue-term': 'og:title',
      label: '💬 Utterances',
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
