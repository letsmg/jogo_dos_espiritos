import { rmSync, existsSync } from 'fs';

console.log('Limpando arquivos antigos...');

const oldFiles = [
  'audio',
  'img', 
  'css',
  'index.html',
  'arquivo.js',
  'copy-real-assets.js'
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

console.log('Limpeza concluída!');
