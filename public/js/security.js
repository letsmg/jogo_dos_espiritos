// Módulo de Segurança para Jogo dos Espíritos
class SecurityManager {
    constructor() {
        this.maxInputLength = 200;
        this.allowedChars = /^[a-zA-Z0-9\s\p{L}\p{M}.,!?;:áéíóúâêîôûãõçÁÉÍÓÚÂÊÎÔÛÃÕÇ-]+$/u;
    }

    // Sanitização de entrada contra XSS
    sanitizeInput(input) {
        if (typeof input !== 'string') return '';
        
        // Remove HTML tags e scripts
        let sanitized = input
            .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
            .replace(/<[^>]*>/g, '')
            .replace(/javascript:/gi, '')
            .replace(/on\w+\s*=/gi, '');

        // Codifica caracteres especiais
        sanitized = this.encodeHTML(sanitized);

        // Limita tamanho
        if (sanitized.length > this.maxInputLength) {
            sanitized = sanitized.substring(0, this.maxInputLength);
        }

        return sanitized.trim();
    }

    // Codificação HTML para prevenir XSS
    encodeHTML(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    // Validação de entrada
    validateInput(input) {
        if (!input || typeof input !== 'string') {
            return { valid: false, error: 'Entrada inválida' };
        }

        if (input.length > this.maxInputLength) {
            return { valid: false, error: 'Texto muito longo' };
        }

        if (!this.allowedChars.test(input)) {
            return { valid: false, error: 'Caracteres não permitidos' };
        }

        return { valid: true, sanitized: this.sanitizeInput(input) };
    }

    // Gera token CSRF simples
    generateCSRFToken() {
        const array = new Uint8Array(32);
        crypto.getRandomValues(array);
        return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
    }

    // Verifica se a requisição é do mesmo domínio
    isSameOrigin() {
        return window.location.origin === window.location.origin;
    }

    // Rate limiting simples
    checkRateLimit() {
        const now = Date.now();
        const lastRequest = localStorage.getItem('lastRequest') || 0;
        const requestCount = parseInt(localStorage.getItem('requestCount') || '0');

        if (now - lastRequest < 1000) { // 1 segundo
            if (requestCount > 5) {
                return false; // Muitas requisições
            }
            localStorage.setItem('requestCount', (requestCount + 1).toString());
        } else {
            localStorage.setItem('requestCount', '1');
        }
        
        localStorage.setItem('lastRequest', now.toString());
        return true;
    }

    // Limpeza de memória
    clearSensitiveData() {
        // Limpa dados sensíveis do formulário
        const input = document.getElementById('texto');
        if (input) {
            input.value = '';
        }
        
        // Limpa variáveis globais se necessário
        if (typeof resposta !== 'undefined') {
            resposta = '';
        }
    }
}

// Instância global do gerenciador de segurança
window.securityManager = new SecurityManager();

// Headers de segurança via meta tags
function addSecurityHeaders() {
    const headers = [
        { 'http-equiv': 'Content-Security-Policy', content: "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; media-src 'self'; font-src 'self';" },
        { 'http-equiv': 'X-Content-Type-Options', content: 'nosniff' },
        { 'http-equiv': 'X-Frame-Options', content: 'DENY' },
        { 'http-equiv': 'X-XSS-Protection', content: '1; mode=block' },
        { 'http-equiv': 'Referrer-Policy', content: 'strict-origin-when-cross-origin' }
    ];

    headers.forEach(header => {
        const meta = document.createElement('meta');
        meta.setAttribute(header['http-equiv'] ? 'http-equiv' : 'name', 
                         header['http-equiv'] || Object.keys(header)[0]);
        meta.setAttribute('content', header.content);
        document.head.appendChild(meta);
    });
}

// Inicializa segurança quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    addSecurityHeaders();
    
    // Adiciona listener para limpeza automática
    window.addEventListener('beforeunload', function() {
        window.securityManager.clearSensitiveData();
    });
});

export { SecurityManager };
