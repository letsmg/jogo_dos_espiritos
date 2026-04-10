import { execSync } from 'child_process';

console.log('Corrigindo .gitignore para .htaccess...');

try {
  // Remove o .htaccess do tracking do Git
  execSync('git rm --cached public/.htaccess', { encoding: 'utf8' });
  console.log('public/.htaccess removido do tracking do Git');
  
  // Verifica o status
  const status = execSync('git status', { encoding: 'utf8' });
  console.log('\nStatus atualizado:');
  console.log(status);
  
} catch (error) {
  console.error('Erro ao corrigir .gitignore:', error.message);
  console.log('\nExecute manualmente:');
  console.log('git rm --cached public/.htaccess');
  console.log('git status');
}
