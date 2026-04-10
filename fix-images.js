import { copyFileSync, existsSync } from 'fs';

console.log('Copiando imagens reais...');

// Verificar se as imagens originais existem
const originalImages = [
  'img/espirito.png',
  'img/espiritos.jpg'
];

originalImages.forEach(img => {
  if (existsSync(img)) {
    try {
      copyFileSync(img, `public/${img}`);
      console.log(`Imagem copiada: ${img} -> public/${img}`);
    } catch (error) {
      console.error(`Erro ao copiar ${img}:`, error.message);
    }
  } else {
    console.log(`Imagem original não encontrada: ${img}`);
  }
});

console.log('Verificação de imagens concluída!');
