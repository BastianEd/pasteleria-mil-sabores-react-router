import { Logo } from "~/components/atoms/logo/Logo";
import { Navigation } from "~/components/molecules/navigation/Navigation";

/**
 * Componente Organismo: Header
 *
 * Barra de navegación superior. Organiza el Logo y la Navegación.
 * El estado (menú móvil, usuario, carrito) se maneja
 * dentro del componente de Navegación.
 */
export const Header = () => {
    return (
        <header className="gradient-hero shadow-media sticky top-0 z-50">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">

                    {/* Átomo: Logo */}
                    <div className="flex-shrink-0">
                        <Logo />
                    </div>

                    {/* Molécula: Navegación y Acciones */}
                    <Navigation />

                </div>
            </nav>
        </header>
    );
};