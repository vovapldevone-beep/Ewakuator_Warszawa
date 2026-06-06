<script setup lang="ts">
import { districts } from '~~/data/districts'

const { t, locale } = useI18n()
const localePath = useLocalePath()
const { telHref, phoneDisplay } = useContact()

const year = new Date().getFullYear()

const nameFor = (d: (typeof districts)[number]) =>
  locale.value === 'uk' ? d.nameUk : d.namePl

// show a representative subset in the footer
const footerDistricts = districts.slice(0, 9)
</script>

<template>
  <footer class="footer">
    <div class="container footer__grid">
      <div class="footer__brand">
        <NuxtLink :to="localePath('/')" class="footer__logo">
          <span class="footer__logo-mark">A</span>{{ t('brand') }}
        </NuxtLink>
        <p class="footer__tagline">{{ t('footer.tagline') }}</p>
        <a :href="telHref" class="footer__phone">{{ phoneDisplay }}</a>
      </div>

      <div class="footer__col">
        <h4 class="footer__title">{{ t('footer.servicesTitle') }}</h4>
        <a href="#services">{{ t('services.items.tow.title') }}</a>
        <a href="#services">{{ t('services.items.vans.title') }}</a>
        <a href="#services">{{ t('services.items.moto.title') }}</a>
        <a href="#services">{{ t('services.items.battery.title') }}</a>
        <a href="#pricing">{{ t('pricing.title') }}</a>
      </div>

      <div class="footer__col">
        <h4 class="footer__title">{{ t('footer.districtsTitle') }}</h4>
        <NuxtLink
          v-for="d in footerDistricts"
          :key="d.slug"
          :to="localePath(`/${d.slug}`)"
        >
          {{ nameFor(d) }}
        </NuxtLink>
      </div>

      <div class="footer__col">
        <h4 class="footer__title">{{ t('footer.contactTitle') }}</h4>
        <a :href="telHref">{{ phoneDisplay }}</a>
        <NuxtLink :to="localePath('/kontakt')">{{ t('nav.contact') }}</NuxtLink>
        <p class="footer__city">{{ t('city') }}</p>
        <p class="footer__avail">{{ t('contact.available') }}</p>
      </div>
    </div>

    <div class="footer__bar">
      <div class="container footer__bar-inner">
        <span>&copy; {{ year }} {{ t('brand') }} {{ t('city') }}</span>
        <span>{{ t('footer.rights') }}</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--bg-2);
  border-top: 1px solid var(--border);
}

.footer__grid {
  display: grid;
  gap: 40px;
  padding: 72px 20px 56px;
  grid-template-columns: 1fr;
}

@media (min-width: 720px) {
  .footer__grid {
    grid-template-columns: 1.6fr 1fr 1fr 1fr;
  }
}

.footer__logo {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-head);
  font-size: 2rem;
  letter-spacing: 0.04em;
}

.footer__logo-mark {
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  background: var(--accent);
  color: #0a0a0a;
  font-size: 1.4rem;
}

.footer__tagline {
  color: var(--muted);
  margin: 16px 0;
  max-width: 320px;
}

.footer__phone {
  font-family: var(--font-head);
  font-size: 1.8rem;
  color: var(--accent);
}

.footer__title {
  font-size: 1.3rem;
  margin-bottom: 18px;
  color: var(--text);
}

.footer__col a,
.footer__col p {
  display: block;
  color: var(--muted);
  margin-bottom: 10px;
  font-size: 0.95rem;
  transition: color 0.15s ease;
}

.footer__col a:hover {
  color: var(--accent);
}

.footer__bar {
  border-top: 1px solid var(--border);
}

.footer__bar-inner {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: space-between;
  padding: 22px 20px;
  color: var(--muted);
  font-size: 0.85rem;
}
</style>
