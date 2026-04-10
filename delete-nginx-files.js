import { rmSync, existsSync } from 'fs';

console.log('Removendo arquivos do Nginx...');

const nginxFiles = [
  'nginx.conf',
  'docker-compose.yml'
];

nginxFiles.forEach(file => {
  if (existsSync(file)) {
    try {
      rmSync(file, { force: true });
      console.log(`Removido: ${file}`);
    } catch (error) {
      console.error(`Erro ao remover ${file}:`, error.message);
    }
  } else {
    console.log(`Arquivo não encontrado: ${file}`);
  }
});

// Remover script temporário
try {
  rmSync('delete-nginx-files.js', { force: true });
  console.log('Script temporário removido');
} catch (error) {
  console.error('Erro ao remover script temporário:', error.message);
}

console.log('Arquivos do Nginx removidos!');
