import { copyFileSync } from 'fs';

console.log('Copiando arquivos reais...');

try {
  // Copiar arquivos de áudio
  copyFileSync('audio/voices.mp3', 'public/audio/voices.mp3');
  console.log('voices.mp3 copiado');
  
  copyFileSync('audio/yt1.mp3', 'public/audio/yt1.mp3');
  console.log('yt1.mp3 copiado');
  
  copyFileSync('audio/estatica.wav', 'public/audio/estatica.wav');
  console.log('estatica.wav copiado');
  
  // Copiar arquivos de imagem
  copyFileSync('img/espirito.png', 'public/img/espirito.png');
  console.log('espirito.png copiado');
  
  copyFileSync('img/espiritos.jpg', 'public/img/espiritos.jpg');
  console.log('espiritos.jpg copiado');
  
  console.log('Todos os arquivos copiados com sucesso!');
} catch (error) {
  console.error('Erro ao copiar arquivos:', error.message);
}
