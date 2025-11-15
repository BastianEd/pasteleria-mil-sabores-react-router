import { Outlet } from "react-router";
import { Header } from "../organisms/header/Header";
import { Footer } from "../organisms/footer/Footer";
import { AuthProvider } from "~/context/AuthContext";
import { CartProvider } from "~/context/CartContext";

/**
 * Componente Layout Principal
 *
 * Estructura base de la aplicación que envuelve todas las páginas.
 * Incluye:
 * - Providers globales (Auth y Cart)
 * - Header
 * - Contenido principal (Outlet)
 * - Footer
 */
export const MainLayout = () => {
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
};
