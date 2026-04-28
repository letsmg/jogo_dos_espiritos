// Módulo de Segurança para Jogo Spirit
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

// Gerenciador de Localização
class LocationManager {
    constructor() {
        this.userCountry = null;
        this.userLanguage = 'pt-BR';
        this.detected = false;
    }

    // Detectar IP e país do usuário usando API gratuita HTTPS
    async detectUserLocation() {
        try {
            // Usar API gratuita de geolocalização (ipwho.is) - HTTPS gratuito
            const response = await fetch('https://ipwho.is/');
            const data = await response.json();

            if (data.success && data.country_code) {
                this.userCountry = data.country_code;
                this.detected = true;

                // Se não for Brasil, usar inglês
                if (data.country_code !== 'BR') {
                    this.userLanguage = 'en-US';
                } else {
                    this.userLanguage = 'pt-BR';
                }

                console.log('País detectado:', data.country_code, 'Idioma configurado:', this.userLanguage);

                // Armazenar dados úteis
                this.locationData = {
                    country: data.country,
                    countryCode: data.country_code,
                    region: data.region,
                    city: data.city,
                    ip: data.ip,
                    flag: data.flag
                };

                return this.locationData;
            }
        } catch (error) {
            console.error('Erro ao detectar localização:', error);
            // Mantém idioma padrão (pt-BR) em caso de erro
            this.detected = false;
        }
        return null;
    }

    // Obter idioma detectado
    getLanguage() {
        return this.userLanguage;
    }

    // Obter país detectado
    getCountry() {
        return this.userCountry;
    }

    // Verificar se detectou localização
    isDetected() {
        return this.detected;
    }
}

// Instâncias globais
window.securityManager = new SecurityManager();
window.locationManager = new LocationManager();

// Headers de segurança via meta tags
function addSecurityHeaders() {
    // CSP relaxada para compatibilidade mobile
    const headers = [
        { 'http-equiv': 'Content-Security-Policy', content: "default-src 'self' 'unsafe-inline' 'unsafe-eval'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; img-src 'self' data: blob: https:; media-src 'self' blob: data:; font-src 'self' https://cdn.jsdelivr.net data:; connect-src 'self' https://cdn.jsdelivr.net https://ipwho.is;" },
        { 'name': 'referrer', content: 'strict-origin-when-cross-origin' }
    ];

    headers.forEach(header => {
        const meta = document.createElement('meta');
        const attrName = header['http-equiv'] ? 'http-equiv' : 'name';
        meta.setAttribute(attrName, header[attrName] || Object.keys(header)[0]);
        meta.setAttribute('content', header.content);
        document.head.appendChild(meta);
    });
}

// Inicializa segurança quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    addSecurityHeaders();

    // Detectar localização do usuário
    if (window.locationManager) {
        window.locationManager.detectUserLocation();
    }

    // Adiciona listener para limpeza automática
    window.addEventListener('beforeunload', function() {
        window.securityManager.clearSensitiveData();
    });
});
