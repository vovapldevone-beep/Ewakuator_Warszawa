declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  const {
    public: { googleAnalyticsId },
  } = useRuntimeConfig()

  if (!googleAnalyticsId || import.meta.dev) return

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args)
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
