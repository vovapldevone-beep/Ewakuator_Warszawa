/**
 * Central place for all AutoHol contact details.
 * Call phone:      +48 602 761 635
 * Messenger phone: +380 63 704 6615 (WhatsApp / Viber / Telegram)
 */
export const useContact = () => {
  const phoneDisplay = '+48 602 761 635'
  const phoneRaw = '+48602761635'

  const messengerDisplay = '+380 63 704 6615'
  const messengerRaw = '+380637046615'
  const messengerDigits = '380637046615'

  return {
    phoneDisplay,
    phoneRaw,
    telHref: `tel:${phoneRaw}`,
    messengerDisplay,
    messengerRaw,
    whatsappHref: `https://wa.me/${messengerDigits}`,
    viberHref: `viber://chat?number=%2B${messengerDigits}`,
    telegramHref: `https://t.me/${messengerRaw}`,
  }
}
