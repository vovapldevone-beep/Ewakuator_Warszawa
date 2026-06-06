<script setup lang="ts">
const { t } = useI18n()
const { telHref, phoneDisplay } = useContact()

useSeoMeta({
  title: () => `${t('nav.contact')} — ${t('brand')} ${t('city')}`,
  description: () => t('contact.subtitle'),
  ogTitle: () => `${t('nav.contact')} — ${t('brand')} ${t('city')}`,
  ogDescription: () => t('contact.subtitle'),
})
</script>

<template>
  <div>
    <section class="khead">
      <div class="container">
        <span class="eyebrow">{{ t('city') }}</span>
        <h1 class="khead__title">{{ t('contact.title') }}</h1>
        <p class="khead__sub">{{ t('contact.subtitle') }}</p>
        <a :href="telHref" class="btn btn--primary btn--lg khead__btn">
          {{ t('contact.call') }} — {{ phoneDisplay }}
        </a>
      </div>
    </section>

    <SiteBenefits />

    <ContactSection />
  </div>
</template>

<style scoped>
.khead {
  padding: clamp(70px, 12vw, 120px) 0 clamp(50px, 8vw, 90px);
  background:
    radial-gradient(circle at 80% -10%, rgba(255, 208, 0, 0.14), transparent 45%),
    linear-gradient(180deg, #0d0d0d, var(--bg));
  text-align: center;
}

.khead__title {
  font-size: clamp(2.8rem, 9vw, 6rem);
  max-width: 820px;
  margin-inline: auto;
}

.khead__sub {
  color: var(--muted);
  margin: 22px auto 34px;
  max-width: 560px;
}
</style>
