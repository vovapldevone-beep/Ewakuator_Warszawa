<script setup lang="ts">
const { t } = useI18n()
const { telHref } = useContact()
</script>

<template>
  <a :href="telHref" class="sticky-cta">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <span>{{ t('sticky.call') }}</span>
  </a>
</template>

<style scoped>
.sticky-cta {
  display: none;
}

@media (max-width: 768px) {
  .sticky-cta {
    position: fixed;
    inset: auto 0 0 0;
    z-index: 60;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    height: 60px;
    background: var(--accent);
    color: #0a0a0a;
    font-family: var(--font-head);
    font-size: 1.5rem;
    letter-spacing: 0.04em;
    box-shadow: 0 -8px 24px rgba(0, 0, 0, 0.4);
  }

  .sticky-cta svg {
    width: 24px;
    height: 24px;
  }
}
</style>
