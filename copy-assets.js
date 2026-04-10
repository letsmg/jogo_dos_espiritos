import { copyFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

// Criar pastas necessárias
const folders = ['public', 'public/js', 'public/css', 'public/audio', 'public/img', 'public/css'];

folders.forEach(folder => {
  if (!existsSync(folder)) {
    mkdirSync(folder, { recursive: true });
    console.log(`Pasta criada: ${folder}`);
  }
});

// Copiar arquivos
const filesToCopy = [
  {
    source: 'node_modules/jquery/dist/jquery.min.js',
    dest: 'public/js/jquery.min.js'
  },
  {
    source: 'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
    dest: 'public/js/bootstrap.bundle.min.js'
  },
  {
    source: 'node_modules/bootstrap/dist/css/bootstrap.min.css',
    dest: 'public/css/bootstrap.min.css'
  },
  {
    source: 'index.html',
    dest: 'public/index.html'
  },
  {
    source: 'arquivo.js',
    dest: 'public/arquivo.js'
  },
  {
    source: 'css/diversos.css',
    dest: 'public/css/diversos.css'
  }
];

// Copiar áudios
try {
  const audioFiles = ['voices.mp3', 'yt1.mp3'];
  audioFiles.forEach(file => {
    try {
      copyFileSync(`audio/${file}`, `public/audio/${file}`);
      console.log(`Áudio copiado: ${file}`);
    } catch (err) {
      console.log(`Áudio não encontrado: ${file}`);
    }
  });
} catch (err) {
  console.log('Pasta audio não encontrada');
}

// Copiar imagens
try {
  copyFileSync('img/espirito.png', 'public/img/espirito.png');
  console.log('Imagem copiada: espirito.png');
} catch (err) {
  console.log('Imagem espirito.png não encontrada');
}

try {
  copyFileSync('img/espiritos.jpg', 'public/img/espiritos.jpg');
  console.log('Imagem copiada: espiritos.jpg');
} catch (err) {
  console.log('Imagem espiritos.jpg não encontrada');
}

filesToCopy.forEach(({ source, dest }) => {
  try {
    copyFileSync(source, dest);
    console.log(`Arquivo copiado: ${source} -> ${dest}`);
  } catch (err) {
    console.error(`Erro ao copiar ${source}: ${err.message}`);
  }
});

console.log('Cópia de arquivos concluída!');
