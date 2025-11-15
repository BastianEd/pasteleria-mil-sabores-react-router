import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

// Importamos nuestros proveedores de contexto y la plantilla principal
import { AuthProvider } from "~/context/AuthContext";
import { CartProvider } from "~/context/CartContext";
import { MainLayout } from "./components/layout/MainLayout";

/**
 * Función 'links' de React Router.
 * Aquí se definen las etiquetas <link> que irán en el <head> del HTML.
 * Modificamos la importación de Google Fonts para incluir "Pacifico",
 * la fuente que usaba el proyecto original para los títulos.
 */
export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    // Añadimos 'Pacifico' a la importación de fuentes
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Pacifico&display=swap",
  },
  {
    rel: "stylesheet",
    // Importamos Font Awesome para los iconos, igual que en el proyecto original
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css",
  }
];

/**
 * Este es el componente 'Layout' principal que envuelve toda la aplicación.
 * Es el lugar perfecto para poner nuestros proveedores de contexto (AuthProvider, CartProvider)
 * y nuestra plantilla visual (MainLayout).
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
        {/*
         * AuthProvider maneja el estado del usuario (quién está logueado).
         * CartProvider maneja el estado del carrito.
         * Envolvemos MainLayout con ellos para que todos los componentes hijos
         * (incluyendo el Header y las páginas) puedan acceder a esta información.
         */}
        <AuthProvider>
          <CartProvider>
            {/* MainLayout contiene el Header y Footer persistentes */}
            <MainLayout>
              {children}
            </MainLayout>
          </CartProvider>
        </AuthProvider>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

/**
 * Componente 'App' por defecto.
 * React Router renderizará la ruta activa (página) aquí, dentro del <Outlet>.
 */
export default function App() {
  return <Outlet />;
}

/**
 * ErrorBoundary (Manejo de Errores)
 * Esto captura errores de renderizado o de rutas (ej. 404)
 * y muestra una interfaz amigable en lugar de una pantalla blanca.
 * (Sin cambios respecto al original)
 */
export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}