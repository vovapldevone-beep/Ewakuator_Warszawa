<script setup lang="ts">
import { findDistrict } from '~~/data/districts'

const route = useRoute()
const { t, locale } = useI18n()
const localePath = useLocalePath()
const { telHref, whatsappHref } = useContact()

const slug = computed(() => String(route.params.district))
const district = computed(() => findDistrict(slug.value))

// 404 when the slug does not match any known district.
if (!district.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'District not found',
    fatal: true,
  })
}

const displayName = computed(() =>
  locale.value === 'uk' ? district.value!.nameUk : district.value!.namePl,
)

// Title always uses the Polish name as requested:
// "Ewakuator {namePl} Warszawa — Holowanie 24/7 | AutoHol"
const metaTitle = computed(() =>
  t('district.metaTitle', { name: district.value!.namePl }),
)

useSeoMeta({
  title: () => metaTitle.value,
  description: () => district.value!.description,
  ogTitle: () => metaTitle.value,
  ogDescription: () => district.value!.description,
  ogType: 'website',
})
</script>

<template>
  <div v-if="district">
    <!-- HERO -->
    <section class="hero">
      <div class="container hero__inner">
        <NuxtLink :to="localePath('/')" class="hero__back">← {{ t('district.back') }}</NuxtLink>
        <span class="hero__badge">{{ t('hero.badge') }}</span>
        <h1 class="hero__title">{{ t('district.heroTitle', { name: displayName }) }}</h1>
        <p class="hero__sub">{{ district.description }}</p>
        <div class="hero__cta">
          <a :href="telHref" class="btn btn--primary btn--lg">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {{ t('hero.call') }}
          </a>
          <a :href="whatsappHref" target="_blank" rel="noopener" class="btn btn--ghost btn--lg">
            {{ t('hero.whatsapp') }}
          </a>
        </div>
      </div>
    </section>

    <!-- STATS -->
    <section class="stats">
      <div class="container stats__grid">
        <div class="stat">
          <span class="stat__num">{{ t('stats.minutes') }}</span>
          <span class="stat__label">{{ t('stats.minutesLabel') }}</span>
        </div>
        <div class="stat">
          <span class="stat__num">{{ t('stats.support') }}</span>
          <span class="stat__label">{{ t('stats.supportLabel') }}</span>
        </div>
        <div class="stat">
          <span class="stat__num">{{ t('stats.clients') }}</span>
          <span class="stat__label">{{ t('stats.clientsLabel') }}</span>
        </div>
        <div class="stat">
          <span class="stat__num">{{ t('stats.rating') }} ★</span>
          <span class="stat__label">{{ t('stats.ratingLabel') }}</span>
        </div>
      </div>
    </section>

    <SiteBenefits :district-name="displayName" />

    <ServiceCards />

    <PriceTable />

    <ContactSection />
  </div>
</template>

<style scoped>
.hero {
  position: relative;
  padding: clamp(70px, 12vw, 130px) 0 clamp(60px, 9vw, 110px);
  background:
    radial-gradient(circle at 80% -10%, rgba(255, 208, 0, 0.16), transparent 45%),
    linear-gradient(180deg, #0d0d0d, var(--bg));
  overflow: hidden;
}

.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    repeating-linear-gradient(45deg, transparent 0 22px, rgba(255, 208, 0, 0.04) 22px 24px);
  pointer-events: none;
}

.hero__inner {
  position: relative;
  max-width: 880px;
}

.hero__back {
  display: inline-block;
  margin-bottom: 22px;
  color: var(--muted);
  font-weight: 600;
  letter-spacing: 0.04em;
  transition: color 0.15s ease;
}

.hero__back:hover {
  color: var(--accent);
}

.hero__badge {
  display: inline-block;
  padding: 8px 16px;
  border: 1px solid var(--accent);
  color: var(--accent);
  font-weight: 700;
  font-size: 0.78rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  margin-bottom: 26px;
}

.hero__title {
  font-size: clamp(2.8rem, 9vw, 6rem);
}

.hero__sub {
  color: var(--muted);
  font-size: clamp(1.05rem, 2.4vw, 1.25rem);
  margin: 26px 0 38px;
  max-width: 660px;
}

.hero__cta {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.stats {
  background: var(--accent);
  color: #0a0a0a;
}

.stats__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
}

@media (min-width: 800px) {
  .stats__grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px 16px;
}

.stat__num {
  font-family: var(--font-head);
  font-size: clamp(2.6rem, 6vw, 3.6rem);
  line-height: 1;
}

.stat__label {
  margin-top: 8px;
  font-weight: 600;
  font-size: 0.92rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
</style>
