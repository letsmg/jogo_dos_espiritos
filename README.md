<img src="https://raw.githubusercontent.com/letsmg/jogo_dos_espiritos/main/pacman-contribution-graph.svg" />

# 🌌 Jogo Spirit versão IA

---

## 👨‍💻 Autor

**Luiz Eduardo**  
🔗 https://github.com/letsmg

---

# 🌎 Language / Idioma

* 🇧🇷 [Ver em Português](#-português)
* 🇺🇸 [Read in English](#-english)

---

# 🇧🇷 Português

Este projeto destina-se apenas para uso didático a fim de mostrar ao aluno uma forma simples de se fazer um jogo sem necessidade de muitos artifícios visuais.

Esse "jogo" não é original, possui outras versões semelhantes na internet que serviram de base para construção deste.
Atenção!
O mal uso desse projeto é de exclusiva responsabilidade de quem os usa, sendo recomendado apenas para fim de estudos ou entretenimento.

## Como Funciona a Brincadeira

O jogo na verdade consiste em enganar seus amigos fazendo-os acreditar que algo sobrenatural realmente acontece nesse software.

**Para fazer funcionar:**

1. **Digite a resposta secreta:**
   - Pressione `=` (igual) ou `;` (ponto e vírgula) para começar a digitar a resposta secreta
   - Nada do que você digitar aparecerá na tela - em vez disso, aparecerá uma pergunta pré-definida
   - Digite a resposta que você sabe (ex: "azul", "casa", "Maria")

2. **Termine a pergunta:**
   - Pressione `=` ou `;` novamente para terminar de digitar a resposta secreta
   - O programa continuará a pergunta onde parou

3. **Seu amigo pergunta:**
   - Seu amigo digita a pergunta no campo de texto
   - Pressiona Enter ou o botão "Perguntar"

4. **A resposta aparece:**
   - Um som é tocado (yt1.mp3 com 50% de volume)
   - A voz da IA fala a resposta
   - O texto aparece letra por letra
   - A imagem de fundo é revelada gradualmente

**Dicas para não levantar suspeitas:**
- Suas respostas devem ser curtas (10-15 dígitos no máximo)
- Explique que precisa falar com respeito aos espíritos
- Se alguém tentar digitar no seu lugar, não pressione `=` ou `;` - o espírito dará uma resposta de erro
- Use as teclas secretas (`=` ou `;`) discretamente para não ser percebido

**Para testar sozinho:**
- Digite qualquer resposta
- Pressione `=` ou `;` para terminar
- Digite a pergunta e veja a resposta aparecer

# Jogo Spirit com IA

Um jogo interativo de perguntas aos espíritos com efeitos sonoros, visuais e **respostas geradas por IA**.

## Características

- Interface responsiva com Bootstrap 5
- Efeitos sonoros ambientais
- Design moderno com tema escuro
- Controle de volume
- **Respostas dinâmicas geradas por IA**
- Proteções de segurança (XSS, headers HTTP)

## Tecnologias

- HTML5
- CSS3 (Bootstrap 5)
- JavaScript (jQuery)
- Vite (para desenvolvimento local)
- **Integração com IA para respostas dinâmicas**

## Como executar localmente

### Pré-requisitos

- Node.js 20+
- npm

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

O site será aberto automaticamente no navegador em http://localhost:3000

## Funcionalidade de IA

O jogo agora usa IA para gerar respostas mais dinâmicas e misteriosas:

### Modo Mock (Padrão)
- Usa respostas pré-definidas com variações aleatórias
- Não requer API key
- Funciona offline

### Modo com API (Opcional)
Para usar uma API real de IA (OpenAI, Anthropic, etc.):

1. Edite `public/js/ai-responses.js`
2. Configure sua API key:
```javascript
window.aiResponseGenerator.setAPIKey('sua-api-key-aqui');
window.aiResponseGenerator.apiEndpoint = 'https://api.exemplo.com/v1/completions';
```

3. O jogo usará a API para gerar respostas mais personalizadas

### Respostas de Erro com IA
- Mensagens de erro mais variadas e misteriosas
- Geradas dinamicamente pelo sistema de IA

## Deploy

O deploy é feito automaticamente via GitHub Actions quando há push para a branch main.

O workflow:
1. Copia os arquivos da pasta `public/`
2. Cria um pacote zip
3. Faz deploy via SSH para o servidor

## Segurança

O projeto implementa várias camadas de segurança:

- Sanitização XSS na saída
- Headers de segurança HTTP (CSP, X-Frame-Options, etc.)
- Validação de entrada
- Proteção contra ataques comuns no .htaccess
- CSP relaxada para compatibilidade mobile

## Estrutura do Projeto

```
jogo_ia/
├── public/              # Arquivos de produção
│   ├── index.html      # Página principal
│   ├── arquivo.js      # Lógica do jogo
│   ├── js/             # JavaScript adicional
│   │   ├── security.js      # Módulo de segurança
│   │   └── ai-responses.js  # Módulo de IA
│   ├── css/            # Estilos
│   ├── audio/          # Arquivos de áudio
│   └── img/            # Imagens
├── package.json        # Dependências
├── vite.config.js      # Configuração do Vite
└── .github/workflows/  # CI/CD
```

## Licença

MIT

<p align="center">
© 2026 — Built with scalability in mind
</p>

<img src="https://raw.githubusercontent.com/letsmg/jogo_dos_espiritos/main/snake-dark.svg?palette=github-dark" />

Copyright (c) 2026 Luiz Eduardo

---

# English

This project is intended for educational purposes only to show students a simple way to create a game without the need for many visual effects.

This "game" is not original; there are similar versions on the internet that served as the basis for its construction.
Attention!
The misuse of this project is the sole responsibility of those who use it, being recommended only for study or entertainment purposes.

## How the Trick Works

The game actually consists of tricking your friends by making them believe that something supernatural really happens in this software.

**To make it work:**

1. **Type the secret answer:**
   - Press `=` (equals) or `;` (semicolon) to start typing the secret answer
   - Nothing you type will appear on the screen - instead, a predefined question will appear
   - Type the answer you know (e.g., "blue", "house", "Maria")

2. **Finish the question:**
   - Press `=` or `;` again to finish typing the secret answer
   - The program will continue the question where it stopped

3. **Your friend asks:**
   - Your friend types the question in the text field
   - Presses Enter or the "Ask" button

4. **The answer appears:**
   - A sound is played (yt1.mp3 at 50% volume)
   - The AI voice speaks the answer
   - The text appears letter by letter
   - The background image is revealed gradually

**Tips to avoid raising suspicion:**
- Your answers should be short (10-15 characters maximum)
- Explain that you need to speak respectfully to the spirits
- If someone tries to type in your place, don't press `=` or `;` - the spirit will give an error response
- Use the secret keys (`=` or `;`) discreetly to not be noticed

**To test alone:**
- Type any answer
- Press `=` or `;` to finish
- Type the question and watch the answer appear

# Spirit Game with AI

An interactive game of asking spirits with sound effects, visuals, and **AI-generated responses**.

## Features

- Responsive interface with Bootstrap 5
- Ambient sound effects
- Modern design with dark theme
- Volume control
- **Dynamic AI-generated responses**
- Security protections (XSS, HTTP headers)

## Technologies

- HTML5
- CSS3 (Bootstrap 5)
- JavaScript (jQuery)
- Vite (for local development)
- **AI integration for dynamic responses**

## How to run locally

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will automatically open in your browser at http://localhost:3000

## AI Functionality

The game now uses AI to generate more dynamic and mysterious responses:

### Mock Mode (Default)
- Uses predefined responses with random variations
- No API key required
- Works offline

### API Mode (Optional)
To use a real AI API (OpenAI, Anthropic, etc.):

1. Edit `public/js/ai-responses.js`
2. Configure your API key:
```javascript
window.aiResponseGenerator.setAPIKey('your-api-key-here');
window.aiResponseGenerator.apiEndpoint = 'https://api.example.com/v1/completions';
```

3. The game will use the API to generate more personalized responses

### AI Error Responses
- More varied and mysterious error messages
- Dynamically generated by the AI system

## Deploy

Deploy is done automatically via GitHub Actions when there's a push to the main branch.

The workflow:
1. Copies files from the `public/` folder
2. Creates a zip package
3. Deploys via SSH to the server

## Security

The project implements multiple layers of security:

- XSS sanitization on output
- HTTP security headers (CSP, X-Frame-Options, etc.)
- Input validation
- Protection against common attacks in .htaccess
- Relaxed CSP for mobile compatibility

## Project Structure

```
jogo_ia/
├── public/              # Production files
│   ├── index.html      # Main page
│   ├── arquivo.js      # Game logic
│   ├── js/             # Additional JavaScript
│   │   ├── security.js      # Security module
│   │   └── ai-responses.js  # AI module
│   ├── css/            # Styles
│   ├── audio/          # Audio files
│   └── img/            # Images
├── package.json        # Dependencies
├── vite.config.js      # Vite configuration
└── .github/workflows/  # CI/CD
```

## License

MIT

<p align="center">
  2026 — Built with scalability in mind
</p>

<img src="https://raw.githubusercontent.com/letsmg/jogo_dos_espiritos/main/snake-dark.svg?palette=github-dark" />

Copyright (c) 2026 Luiz Eduardo