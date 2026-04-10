import { execSync } from 'child_process';

try {
  console.log('Verificando status do Git...');
  const status = execSync('git status', { encoding: 'utf8' });
  console.log(status);
} catch (error) {
  console.error('Erro ao verificar status do Git:', error.message);
}
