import { copyFileSync, rmSync, existsSync } from 'fs';

console.log('=== COPIANDO ARQUIVOS REAIS PARA PUBLIC ===');

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
  
  console.log('Arquivos de áudio e imagem copiados com sucesso!');
} catch (error) {
  console.error('Erro ao copiar arquivos de áudio/imagem:', error.message);
}

console.log('\n=== LIMPANDO ARQUIVOS ANTIGOS ===');

const oldFiles = [
  'audio',
  'img', 
  'css',
  'index.html',
  'arquivo.js',
  'copy-real-assets.js',
  'clean-old-files.js',
  'final-cleanup.js'
];

oldFiles.forEach(file => {
  if (existsSync(file)) {
    try {
      rmSync(file, { recursive: true, force: true });
      console.log(`Removido: ${file}`);
    } catch (error) {
      console.error(`Erro ao remover ${file}:`, error.message);
    }
  } else {
    console.log(`Arquivo/pasta não encontrado: ${file}`);
  }
});

console.log('\n=== LIMPEZA CONCLUÍDA! ===');
console.log('Estrutura final:');
console.log('- public/ (com todos os arquivos)');
console.log('- node_modules/');
console.log('- package.json');
console.log('- vite.config.js');
console.log('- .gitignore');
