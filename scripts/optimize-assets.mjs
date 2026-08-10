import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

await mkdir('public/assets/images', { recursive: true });

const heroInput = 'public/assets/images/erick-hero.webp';

const heroSizes = [
  { width: 480, name: 'erick-hero-480.webp' },
  { width: 720, name: 'erick-hero-720.webp' },
  { width: 960, name: 'erick-hero-960.webp' },
];

for (const item of heroSizes) {
  await sharp(heroInput)
    .resize({
      width: item.width,
      withoutEnlargement: true,
    })
    .webp({
      quality: 78,
      effort: 5,
    })
    .toFile(`public/assets/images/${item.name}`);
}

console.log('Imagens otimizadas criadas com sucesso.');
