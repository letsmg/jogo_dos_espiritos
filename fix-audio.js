import { copyFileSync, existsSync } from 'fs';

console.log('Copiando arquivos de áudio reais...');

// Verificar se os arquivos de áudio originais existem
const originalAudio = [
  'audio/voices.mp3',
  'audio/yt1.mp3',
  'audio/estatica.wav'
];

originalAudio.forEach(audio => {
  if (existsSync(audio)) {
    try {
      copyFileSync(audio, `public/${audio}`);
      console.log(`Áudio copiado: ${audio} -> public/${audio}`);
    } catch (error) {
      console.error(`Erro ao copiar ${audio}:`, error.message);
    }
  } else {
    console.log(`Áudio original não encontrado: ${audio}`);
  }
});

console.log('Verificação de áudio concluída!');
