export const contact = {
  whatsappNumber: '5543988632851',
  email: 'erickgarciaeditor@gmail.com',
  instagram: '@erickgarciaeditor',
  instagramUrl: 'https://www.instagram.com/erickgarciaeditor/',
};

export function getWhatsappUrl(message?: string) {
  const base = `https://wa.me/${contact.whatsappNumber}`;

  if (!message) {
    return base;
  }

  return `${base}?text=${encodeURIComponent(message)}`;
}
