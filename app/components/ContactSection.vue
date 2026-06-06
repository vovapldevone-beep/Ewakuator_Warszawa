<script setup lang="ts">
const { t } = useI18n()
const { telHref, phoneDisplay, whatsappHref, viberHref, telegramHref } = useContact()
</script>

<template>
  <section id="contact" class="section contact">
    <div class="container contact__inner">
      <span class="eyebrow">{{ t('nav.contact') }}</span>
      <h2 class="contact__title">{{ t('contact.title') }}</h2>
      <p class="contact__sub">{{ t('contact.subtitle') }}</p>

      <a :href="telHref" class="contact__phone">{{ phoneDisplay }}</a>

      <div class="contact__channels">
        <a :href="whatsappHref" target="_blank" rel="noopener" class="contact__chan">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1 1 12 20zm4.4-6c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.7 1-.3.2-.5.1a6.5 6.5 0 0 1-1.9-1.2 7.3 7.3 0 0 1-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.4.2-.4v-.4l-.7-1.7c-.2-.5-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-1 2.2 5.3 5.3 0 0 0 1.1 2.8 12 12 0 0 0 4.6 4c.6.3 1.1.4 1.5.6a3.6 3.6 0 0 0 1.6.1c.5-.1 1.4-.6 1.6-1.1s.2-1 .1-1.1z" />
          </svg>
          WhatsApp
        </a>
        <a :href="viberHref" class="contact__chan">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C7 2 3 5.6 3 10c0 2.4 1.2 4.6 3.2 6v3.8l3.3-2a11 11 0 0 0 2.5.3c5 0 9-3.6 9-8s-4-8-9-8zm5 9.6c-.2.5-1.1 1-1.6 1.1-.4.1-.9.1-1.5-.1a9.6 9.6 0 0 1-4.7-4.1 3.4 3.4 0 0 1-.7-1.8c0-.5.2-.9.5-1.2.2-.2.4-.2.5-.2h.4c.1 0 .3 0 .5.4l.6 1.4c0 .2.1.3 0 .4l-.3.4-.2.2c-.1.1-.2.2-.1.4a6 6 0 0 0 1.1 1.4 5.4 5.4 0 0 0 1.6 1c.2.1.3.1.4 0l.6-.7c.1-.2.3-.1.4-.1l1.4.7c.2.1.3.2.4.2v.5z" />
          </svg>
          Viber
        </a>
        <a :href="telegramHref" target="_blank" rel="noopener" class="contact__chan">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M21.9 4.3 18.5 20c-.2 1.1-.9 1.4-1.8.9l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.3-5 9.1-8.2c.4-.4-.1-.6-.6-.2L6.1 13.1l-4.9-1.5c-1-.3-1-1 .2-1.5L20.6 2.8c.9-.3 1.6.2 1.3 1.5z" />
          </svg>
          Telegram
        </a>
      </div>

      <p class="contact__avail">{{ t('contact.available') }}</p>
    </div>
  </section>
</template>

<style scoped>
.contact {
  background:
    radial-gradient(circle at 50% 0%, rgba(255, 208, 0, 0.08), transparent 55%),
    var(--bg);
  text-align: center;
}

.contact__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact__title {
  font-size: clamp(2.4rem, 6vw, 4.4rem);
  max-width: 760px;
}

.contact__sub {
  color: var(--muted);
  margin-top: 16px;
}

.contact__phone {
  display: inline-block;
  margin: 34px 0 28px;
  font-family: var(--font-head);
  font-size: clamp(3rem, 11vw, 6rem);
  letter-spacing: 0.02em;
  color: var(--accent);
  line-height: 1;
  transition: opacity 0.15s ease;
}

.contact__phone:hover {
  opacity: 0.85;
}

.contact__channels {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px;
}

.contact__chan {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 24px;
  border: 1px solid var(--border);
  background: var(--bg-2);
  font-weight: 600;
  letter-spacing: 0.03em;
  transition: border-color 0.15s ease, color 0.15s ease;
}

.contact__chan svg {
  width: 22px;
  height: 22px;
}

.contact__chan:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.contact__avail {
  margin-top: 30px;
  color: var(--muted);
  font-size: 0.95rem;
}
</style>
