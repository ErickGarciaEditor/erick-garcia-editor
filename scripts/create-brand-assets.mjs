import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';

const hero = 'public/assets/images/erick-hero-960.webp';

const faviconSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" rx="116" fill="#070707"/>
  <rect x="20" y="20" width="472" height="472" rx="96" stroke="#ff4f3c" stroke-width="28"/>
  <text x="256" y="292" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="156" font-weight="900" letter-spacing="-14" fill="#f6eee8">EG</text>
  <circle cx="382" cy="142" r="24" fill="#ff4f3c"/>
</svg>`;

await writeFile('public/favicon.svg', faviconSvg);

await sharp(Buffer.from(faviconSvg))
  .resize(180, 180)
  .png()
  .toFile('public/apple-touch-icon.png');

await sharp(Buffer.from(faviconSvg))
  .resize(64, 64)
  .png()
  .toFile('public/favicon.png');

await sharp(Buffer.from(faviconSvg))
  .resize(32, 32)
  .toFile('public/favicon.ico');

const photo = await sharp(hero)
  .resize(520, 650, { fit: 'cover', position: 'center' })
  .webp({ quality: 84 })
  .toBuffer();

const ogSvg = Buffer.from(`
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#070707"/>
      <stop offset="52%" stop-color="#100b0a"/>
      <stop offset="100%" stop-color="#2a0f0c"/>
    </linearGradient>
    <radialGradient id="red" cx="80%" cy="25%" r="65%">
      <stop offset="0%" stop-color="#ff4f3c" stop-opacity="0.32"/>
      <stop offset="100%" stop-color="#ff4f3c" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#red)"/>
  <rect x="54" y="54" width="1092" height="522" rx="46" fill="rgba(255,255,255,0.025)" stroke="rgba(246,238,232,0.12)"/>

  <text x="88" y="148" font-family="Arial, Helvetica, sans-serif" font-size="34" font-weight="900" fill="#f6eee8">Erick Garcia</text>
  <text x="88" y="184" font-family="Arial, Helvetica, sans-serif" font-size="17" font-weight="900" letter-spacing="6" fill="#ff4f3c">SOCIAL MEDIA E SITES</text>

  <text x="88" y="314" font-family="Arial, Helvetica, sans-serif" font-size="76" font-weight="900" letter-spacing="-5" fill="#f6eee8">Social media,</text>
  <text x="88" y="394" font-family="Arial, Helvetica, sans-serif" font-size="76" font-weight="900" letter-spacing="-5" fill="#f6eee8">vídeos e sites.</text>

  <text x="88" y="474" font-family="Arial, Helvetica, sans-serif" font-size="30" font-weight="600" fill="#d9d0ca">Redes sociais e sites para apresentar melhor</text>
  <text x="88" y="514" font-family="Arial, Helvetica, sans-serif" font-size="30" font-weight="600" fill="#d9d0ca">o seu trabalho e facilitar o contato.</text>

  <rect x="742" y="54" width="404" height="522" rx="42" fill="#141212" stroke="rgba(246,238,232,0.14)"/>
</svg>
`);

await sharp(ogSvg)
  .composite([
    {
      input: photo,
      left: 742,
      top: 54,
    },
  ])
  .webp({ quality: 82 })
  .toFile('public/assets/brand/og-erick-garcia.webp');

console.log('Brand assets criados.');
