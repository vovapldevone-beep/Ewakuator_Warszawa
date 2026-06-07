declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

export default defineNuxtPlugin(() => {
  const {
    public: { googleAnalyticsId },
  } = useRuntimeConfig()

  if (!googleAnalyticsId) return

  window.dataLayer = window.dataLayer || []
  // gtag.js requires the raw `arguments` object here, NOT a real array.
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments)
  }

  window.gtag('js', new Date())
  window.gtag('config', googleAnalyticsId)

  useHead({
    script: [
      {
        src: `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`,
        async: true,
      },
    ],
    link: [{ rel: 'preconnect', href: 'https://www.googletagmanager.com' }],
  })

  const router = useRouter()
  router.afterEach((to, from) => {
    // Initial navigation is already tracked by gtag('config') above.
    if (from.matched.length === 0) return

    window.gtag('config', googleAnalyticsId, { page_path: to.fullPath })
  })
})
