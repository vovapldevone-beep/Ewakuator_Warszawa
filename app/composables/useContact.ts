/**
 * Central place for all AutoHol contact details.
 * Phone: +48 700 123 456
 */
export const useContact = () => {
  const phoneDisplay = '+48 700 123 456'
  const phoneRaw = '+48700123456'
  const digits = '48700123456'

  return {
    phoneDisplay,
    phoneRaw,
    telHref: `tel:${phoneRaw}`,
    whatsappHref: `https://wa.me/${digits}`,
    viberHref: `viber://chat?number=%2B${digits}`,
    telegramHref: `https://t.me/${phoneRaw}`,
  }
}
