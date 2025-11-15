/**
 * Configuración de Tailwind CSS v4
 * Pastelería Mil Sabores
 *
 * Extendemos Tailwind con colores y fuentes personalizadas
 */
export default {
    content: [
        './app/**/*.{js,jsx,ts,tsx}', // Escanea todos los archivos en app/
    ],
    theme: {
        extend: {
            /**
             * ============================================
             * COLORES PERSONALIZADOS
             * ============================================
             * Basados en el diseño original de Mil Sabores
             */
            colors: {
                crema: '#FFF5E1',
                rosa: '#FFC0CB',
                chocolate: {
                    DEFAULT: '#8B4513',
                    hover: '#6B3410',
                    dark: '#4A240B',
                },
                marron: '#5D4037',
                dorado: '#FFD700',
                menta: '#98E4D6',
                salmon: '#FFA07A',
                gris: '#B0BEC5',
            },

            /**
             * ============================================
             * FUENTES PERSONALIZADAS
             * ============================================
             */
            fontFamily: {
                pacifico: ['Pacifico', 'cursive'],
                lato: ['Lato', 'sans-serif'],
                sans: ['Lato', 'ui-sans-serif', 'system-ui'],
            },

            /**
             * ============================================
             * SOMBRAS PERSONALIZADAS
             * ============================================
             */
            boxShadow: {
                'suave': '0 2px 8px rgba(139, 69, 19, 0.1)',
                'media': '0 4px 16px rgba(139, 69, 19, 0.15)',
                'fuerte': '0 8px 24px rgba(139, 69, 19, 0.2)',
            },

            /**
             * ============================================
             * BORDES REDONDEADOS ADICIONALES
             * ============================================
             */
            borderRadius: {
                '4xl': '2rem',
            },

            /**
             * ============================================
             * ANIMACIONES PERSONALIZADAS
             * ============================================
             */
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in',
                'slide-in': 'slideIn 0.3s ease-out',
            },

            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideIn: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(0)' },
                },
            },
        },
    },
    plugins: [],
};
