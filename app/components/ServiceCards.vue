<script setup lang="ts">
const { t } = useI18n()

const services = [
  { key: 'tow', icon: 'tow' },
  { key: 'vans', icon: 'van' },
  { key: 'moto', icon: 'moto' },
  { key: 'battery', icon: 'battery' },
  { key: 'fuel', icon: 'fuel' },
  { key: 'unlock', icon: 'unlock' },
] as const
</script>

<template>
  <section id="services" class="section">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">{{ t('nav.services') }}</span>
        <h2 class="section-title">{{ t('services.title') }}</h2>
        <p class="section-sub">{{ t('services.subtitle') }}</p>
      </div>

      <div class="grid grid--3">
        <article v-for="s in services" :key="s.key" class="card service">
          <div class="service__icon" aria-hidden="true">
            <!-- tow -->
            <svg v-if="s.icon === 'tow'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M3 17h11v-4H6l-3 4z" stroke-linejoin="round" />
              <path d="M14 13l6-6h2" stroke-linecap="round" stroke-linejoin="round" />
              <circle cx="6.5" cy="18.5" r="1.8" />
              <circle cx="17" cy="18.5" r="1.8" />
              <path d="M14 17h1.2M19 17h1" stroke-linecap="round" />
            </svg>
            <!-- van -->
            <svg v-else-if="s.icon === 'van'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M2 16V7h11v9" stroke-linejoin="round" />
              <path d="M13 10h4l3 3v3h-7z" stroke-linejoin="round" />
              <circle cx="7" cy="17.5" r="1.8" />
              <circle cx="17" cy="17.5" r="1.8" />
            </svg>
            <!-- moto -->
            <svg v-else-if="s.icon === 'moto'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <circle cx="5.5" cy="16" r="3" />
              <circle cx="18.5" cy="16" r="3" />
              <path d="M5.5 16l3-5h5l2 2h3" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M9 8h3" stroke-linecap="round" />
            </svg>
            <!-- battery -->
            <svg v-else-if="s.icon === 'battery'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <rect x="3" y="8" width="18" height="10" rx="1.5" />
              <path d="M7 8V6h3v2M14 8V6h3v2" stroke-linejoin="round" />
              <path d="M8 13h3M9.5 11.5v3M14 13h2" stroke-linecap="round" />
            </svg>
            <!-- fuel -->
            <svg v-else-if="s.icon === 'fuel'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M5 21V5a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v16" stroke-linejoin="round" />
              <path d="M4 21h11" stroke-linecap="round" />
              <path d="M5 11h9" stroke-linecap="round" />
              <path d="M14 8l3 3v6a2 2 0 0 0 2-2v-5l-3-3" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <!-- unlock -->
            <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <rect x="5" y="11" width="14" height="9" rx="1.5" />
              <path d="M8 11V7a4 4 0 0 1 7-2.6" stroke-linecap="round" stroke-linejoin="round" />
              <circle cx="12" cy="15.5" r="1.4" />
            </svg>
          </div>

          <h3 class="service__title">{{ t(`services.items.${s.key}.title`) }}</h3>
          <p class="service__desc">{{ t(`services.items.${s.key}.desc`) }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.service {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.service__icon {
  display: grid;
  place-items: center;
  width: 60px;
  height: 60px;
  background: var(--bg-3);
  border: 1px solid var(--border);
  color: var(--accent);
}

.service__icon svg {
  width: 32px;
  height: 32px;
}

.service__title {
  font-size: 1.8rem;
}

.service__desc {
  color: var(--muted);
}
</style>
