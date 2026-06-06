<script setup lang="ts">
const { t } = useI18n()

const props = defineProps<{
  /** Optional district name to personalise the heading */
  districtName?: string
}>()

const benefits = [
  { key: 'fast', icon: 'bolt' },
  { key: 'always', icon: 'clock' },
  { key: 'price', icon: 'tag' },
  { key: 'pro', icon: 'shield' },
] as const

const heading = computed(() =>
  props.districtName
    ? t('district.benefitsTitle', { name: props.districtName })
    : t('how.subtitle'),
)
</script>

<template>
  <section class="section benefits">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">AutoHol</span>
        <h2 class="section-title">{{ heading }}</h2>
      </div>

      <div class="grid grid--4">
        <article v-for="b in benefits" :key="b.key" class="card benefit">
          <div class="benefit__icon" aria-hidden="true">
            <svg v-if="b.icon === 'bolt'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" stroke-linejoin="round" />
            </svg>
            <svg v-else-if="b.icon === 'clock'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <svg v-else-if="b.icon === 'tag'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M3 12 12 3h8v8l-9 9-8-8z" stroke-linejoin="round" />
              <circle cx="16" cy="8" r="1.4" />
            </svg>
            <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M12 3 5 6v6c0 4 3 6.5 7 9 4-2.5 7-5 7-9V6l-7-3z" stroke-linejoin="round" />
              <path d="m9 12 2 2 4-4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <h3 class="benefit__title">{{ t(`benefits.${b.key}.title`) }}</h3>
          <p class="benefit__desc">{{ t(`benefits.${b.key}.desc`) }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.benefit {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.benefit__icon {
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  background: var(--bg-3);
  border: 1px solid var(--border);
  color: var(--accent);
}

.benefit__icon svg {
  width: 28px;
  height: 28px;
}

.benefit__title {
  font-size: 1.6rem;
}

.benefit__desc {
  color: var(--muted);
  font-size: 0.98rem;
}
</style>
