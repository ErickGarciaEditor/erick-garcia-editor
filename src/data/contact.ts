export const contact = {
  whatsappNumber: '5543988632851',
  email: 'contato@erickgarciaeditor.com.br',
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


export function getMailtoUrl(subject: string, body: string) {
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);

  return `mailto:${contact.email}?subject=${encodedSubject}&body=${encodedBody}`;
}
