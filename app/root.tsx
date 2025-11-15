import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "react-router";

import type { LinksFunction } from "react-router";
import appStyles from "./app.css?url";
import { Header } from "./components/organisms/header/Header";
import { Footer } from "./components/organisms/footer/Footer";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";

/**
 * Define los enlaces externos (CSS, fuentes, etc.)
 * que se cargarán en el <head> del documento
 */
export const links: LinksFunction = () => [
    // CSS principal de la aplicación
    { rel: "stylesheet", href: appStyles },

    // Preconexión a Google Fonts para mejorar rendimiento
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous"
    },

    // Fuentes: Lato (principal) y Pacifico (títulos)
    {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,400&family=Pacifico&display=swap"
    },

    // Font Awesome para iconos
    {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
    }
];

/**
 * Layout principal de la aplicación
 * Envuelve todas las páginas con la estructura HTML básica
 */
export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <Meta />
            <Links />
        </head>
        <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        </body>
        </html>
    );
}

/**
 * Componente raíz de la aplicación
 *
 * IMPORTANTE: Aquí envolvemos toda la aplicación con los Providers
 * para que estén disponibles en todas las rutas y componentes
 */
export default function App() {
    return (
        <AuthProvider>
            <CartProvider>
                <div className="min-h-screen flex flex-col bg-crema">
                    {/* Header fijo en la parte superior */}
                    <Header />

                    {/*
            Contenido principal
            El Outlet renderiza el contenido de las rutas hijas
          */}
                    <main className="flex-1">
                        <Outlet />
                    </main>

                    {/* Footer en la parte inferior */}
                    <Footer />
                </div>
            </CartProvider>
        </AuthProvider>
    );
}
