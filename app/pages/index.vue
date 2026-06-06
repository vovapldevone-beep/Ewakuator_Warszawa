<script setup lang="ts">
import { districts } from '~~/data/districts'

const { t, locale } = useI18n()
const localePath = useLocalePath()
const { telHref, whatsappHref } = useContact()

const reviewKeys = ['1', '2', '3'] as const
const steps = ['step1', 'step2', 'step3'] as const

const nameFor = (d: (typeof districts)[number]) =>
  locale.value === 'uk' ? d.nameUk : d.namePl

useSeoMeta({
  title: () => `${t('hero.title')} | ${t('brand')}`,
  description: () => t('hero.subtitle'),
  ogTitle: () => `${t('hero.title')} | ${t('brand')}`,
  ogDescription: () => t('hero.subtitle'),
  ogType: 'website',
})
</script>

<template>
  <div>
    <!-- HERO -->
    <section class="hero">
      <div class="container hero__inner">
        <span class="hero__badge">{{ t('hero.badge') }}</span>
        <h1 class="hero__title">{{ t('hero.title') }}</h1>
        <p class="hero__sub">{{ t('hero.subtitle') }}</p>
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

    <ServiceCards />

    <!-- HOW IT WORKS -->
    <section id="how" class="section">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">{{ t('nav.how') }}</span>
          <h2 class="section-title">{{ t('how.title') }}</h2>
          <p class="section-sub">{{ t('how.subtitle') }}</p>
        </div>
        <div class="grid grid--3">
          <article v-for="(s, i) in steps" :key="s" class="step">
            <span class="step__num">{{ i + 1 }}</span>
            <h3 class="step__title">{{ t(`how.${s}.title`) }}</h3>
            <p class="step__desc">{{ t(`how.${s}.desc`) }}</p>
          </article>
        </div>
      </div>
    </section>

    <PriceTable />

    <!-- REVIEWS -->
    <section class="section">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">★★★★★</span>
          <h2 class="section-title">{{ t('reviews.title') }}</h2>
          <p class="section-sub">{{ t('reviews.subtitle') }}</p>
        </div>
        <div class="grid grid--3">
          <article v-for="k in reviewKeys" :key="k" class="card review">
            <div class="review__stars">★★★★★</div>
            <p class="review__text">"{{ t(`reviews.items.${k}.text`) }}"</p>
            <div class="review__meta">
              <strong>{{ t(`reviews.items.${k}.author`) }}</strong>
              <span>{{ t(`reviews.items.${k}.location`) }}</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- DISTRICTS -->
    <section id="districts" class="section">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">{{ t('city') }}</span>
          <h2 class="section-title">{{ t('districts.title') }}</h2>
          <p class="section-sub">{{ t('districts.subtitle') }}</p>
        </div>
        <div class="districts">
          <NuxtLink
            v-for="d in districts"
            :key="d.slug"
            :to="localePath(`/${d.slug}`)"
            class="district-link"
          >
            <span class="district-link__name">{{ nameFor(d) }}</span>
            <span class="district-link__arrow" aria-hidden="true">→</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <ContactSection />
  </div>
</template>

<style scoped>
/* HERO */
.hero {
  position: relative;
  padding: clamp(80px, 14vw, 150px) 0 clamp(70px, 10vw, 120px);
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
  font-size: clamp(3.2rem, 11vw, 7rem);
}

.hero__sub {
  color: var(--muted);
  font-size: clamp(1.05rem, 2.4vw, 1.3rem);
  margin: 26px 0 38px;
  max-width: 640px;
}

.hero__cta {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

/* STATS */
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

/* STEPS */
.step {
  position: relative;
  padding: 36px 32px;
  background: var(--bg-2);
  border: 1px solid var(--border);
}

.step__num {
  display: block;
  font-family: var(--font-head);
  font-size: 4rem;
  line-height: 1;
  color: var(--accent);
  margin-bottom: 14px;
}

.step__title {
  font-size: 1.9rem;
  margin-bottom: 10px;
}

.step__desc {
  color: var(--muted);
}

/* REVIEWS */
.review {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.review__stars {
  color: var(--accent);
  letter-spacing: 4px;
}

.review__text {
  font-size: 1.08rem;
  line-height: 1.7;
}

.review__meta {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: auto;
  padding-top: 8px;
  border-top: 1px solid var(--border);
}

.review__meta span {
  color: var(--muted);
  font-size: 0.9rem;
}

/* DISTRICTS */
.districts {
  display: grid;
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
  grid-template-columns: repeat(2, 1fr);
}

@media (min-width: 640px) {
  .districts {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 960px) {
  .districts {
    grid-template-columns: repeat(4, 1fr);
  }
}

.district-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 22px 24px;
  background: var(--bg);
  font-family: var(--font-head);
  font-size: 1.5rem;
  letter-spacing: 0.02em;
  transition: background 0.15s ease, color 0.15s ease;
}

.district-link:hover {
  background: var(--accent);
  color: #0a0a0a;
}

.district-link__arrow {
  color: var(--accent);
  transition: color 0.15s ease, transform 0.15s ease;
}

.district-link:hover .district-link__arrow {
  color: #0a0a0a;
  transform: translateX(4px);
}
</style>
