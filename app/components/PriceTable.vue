<script setup lang="ts">
const { t } = useI18n()

const rows = [
  { key: 'tow10', price: 'od 150 zł' },
  { key: 'towKm', price: '4 zł' },
  { key: 'van', price: 'od 250 zł' },
  { key: 'moto', price: 'od 180 zł' },
  { key: 'battery', price: 'od 100 zł' },
  { key: 'fuel', price: 'od 90 zł' },
  { key: 'unlock', price: 'od 120 zł' },
] as const
</script>

<template>
  <section id="pricing" class="section">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">{{ t('nav.pricing') }}</span>
        <h2 class="section-title">{{ t('pricing.title') }}</h2>
        <p class="section-sub">{{ t('pricing.subtitle') }}</p>
      </div>

      <div class="price">
        <div class="price__head">
          <span>{{ t('pricing.service') }}</span>
          <span>{{ t('pricing.price') }}</span>
        </div>
        <div v-for="r in rows" :key="r.key" class="price__row">
          <span class="price__service">{{ t(`pricing.rows.${r.key}`) }}</span>
          <span class="price__value">{{ r.price }}</span>
        </div>
      </div>

      <p class="price__note">{{ t('pricing.note') }}</p>
    </div>
  </section>
</template>

<style scoped>
.price {
  border: 1px solid var(--border);
  background: var(--bg-2);
}

.price__head,
.price__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 20px 28px;
}

.price__head {
  background: var(--bg-3);
  font-family: var(--font-body);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.78rem;
  color: var(--muted);
}

.price__row {
  border-top: 1px solid var(--border);
  transition: background 0.15s ease;
}

.price__row:hover {
  background: var(--bg-3);
}

.price__service {
  font-size: 1.05rem;
}

.price__value {
  font-family: var(--font-head);
  font-size: 1.7rem;
  letter-spacing: 0.02em;
  color: var(--accent);
  white-space: nowrap;
}

.price__note {
  margin-top: 18px;
  color: var(--muted);
  font-size: 0.92rem;
}
</style>
