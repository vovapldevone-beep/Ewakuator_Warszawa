// https://nuxt.com/docs/api/configuration/nuxt-config
import { districts } from './data/districts'

// Build the full route list for SSG (both locales).
const districtRoutes = districts.map((d) => `/${d.slug}`)
const prerenderRoutes = [
  '/',
  '/uk',
  '/kontakt',
  '/uk/kontakt',
  ...districtRoutes,
  ...districtRoutes.map((r) => `/uk${r}`),
]

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      googleAnalyticsId: 'G-19CQRGMTB6',
    },
  },

  // Generated as a fully static site (run `nuxt generate`).
  ssr: true,

  modules: ['@nuxtjs/i18n', '@nuxt/image'],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'pl' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#0a0a0a' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&family=Bebas+Neue&display=swap',
        },
      ],
    },
  },

  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'pl',
    // Used to build absolute canonical / hreflang URLs. Change to your domain.
    baseUrl: 'https://autohol.pl',
    langDir: '.',
    locales: [
      { code: 'pl', language: 'pl-PL', name: 'Polski', file: 'pl.json' },
      { code: 'uk', language: 'uk-UA', name: 'Українська', file: 'uk.json' },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_locale',
      redirectOn: 'root',
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: prerenderRoutes,
    },
  },
})
