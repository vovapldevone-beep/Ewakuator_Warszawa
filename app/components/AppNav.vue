<script setup lang="ts">
const { t, locale } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const { telHref, phoneDisplay } = useContact()

const open = ref(false)
const close = () => (open.value = false)
</script>

<template>
  <header class="nav">
    <div class="container nav__inner">
      <NuxtLink :to="localePath('/')" class="nav__logo" @click="close">
        <span class="nav__logo-mark">A</span>
        <span class="nav__logo-text">{{ t('brand') }}</span>
      </NuxtLink>

      <nav class="nav__links" :class="{ 'nav__links--open': open }">
        <a href="#services" @click="close">{{ t('nav.services') }}</a>
        <a href="#how" @click="close">{{ t('nav.how') }}</a>
        <a href="#pricing" @click="close">{{ t('nav.pricing') }}</a>
        <a href="#districts" @click="close">{{ t('nav.districts') }}</a>
        <a href="#contact" @click="close">{{ t('nav.contact') }}</a>

        <div class="nav__lang">
          <NuxtLink
            :to="switchLocalePath('pl')"
            :class="{ 'is-active': locale === 'pl' }"
            @click="close"
            >PL</NuxtLink
          >
          <span aria-hidden="true">/</span>
          <NuxtLink
            :to="switchLocalePath('uk')"
            :class="{ 'is-active': locale === 'uk' }"
            @click="close"
            >UK</NuxtLink
          >
        </div>
      </nav>

      <div class="nav__right">
        <a :href="telHref" class="nav__phone">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path
              d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>{{ phoneDisplay }}</span>
        </a>

        <button
          class="nav__burger"
          :aria-expanded="open"
          aria-label="Menu"
          @click="open = !open"
        >
          <span /><span /><span />
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 50;
  height: var(--nav-h);
  background: rgba(10, 10, 10, 0.85);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
}

.nav__inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.nav__logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav__logo-mark {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  background: var(--accent);
  color: #0a0a0a;
  font-family: var(--font-head);
  font-size: 1.5rem;
  line-height: 1;
}

.nav__logo-text {
  font-family: var(--font-head);
  font-size: 1.7rem;
  letter-spacing: 0.04em;
}

.nav__links {
  display: flex;
  align-items: center;
  gap: 28px;
  margin-left: auto;
}

.nav__links a {
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.02em;
  color: var(--text);
  transition: color 0.15s ease;
}

.nav__links a:hover {
  color: var(--accent);
}

.nav__lang {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--muted);
  font-weight: 700;
  font-size: 0.85rem;
}

.nav__lang a {
  color: var(--muted);
  font-size: 0.85rem;
}

.nav__lang a.is-active {
  color: var(--accent);
}

.nav__right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.nav__phone {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-head);
  font-size: 1.4rem;
  letter-spacing: 0.03em;
  color: var(--accent);
}

.nav__phone svg {
  width: 18px;
  height: 18px;
}

.nav__burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 42px;
  height: 42px;
  background: transparent;
  border: 1px solid var(--border);
  cursor: pointer;
}

.nav__burger span {
  height: 2px;
  background: var(--text);
}

@media (max-width: 980px) {
  .nav__phone span {
    display: none;
  }
}

@media (max-width: 860px) {
  .nav__burger {
    display: flex;
  }

  .nav__links {
    position: fixed;
    inset: var(--nav-h) 0 auto 0;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
    background: var(--bg-2);
    border-bottom: 1px solid var(--border);
    padding: 8px 20px 20px;
    transform: translateY(-130%);
    transition: transform 0.25s ease;
  }

  .nav__links--open {
    transform: translateY(0);
  }

  .nav__links a {
    width: 100%;
    padding: 14px 0;
    border-bottom: 1px solid var(--border);
    font-size: 1.05rem;
  }

  .nav__lang {
    padding-top: 14px;
  }
}
</style>
