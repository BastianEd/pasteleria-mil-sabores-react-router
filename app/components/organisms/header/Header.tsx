import { Link, NavLink } from "react-router-dom";
import { useAuth } from "~/hooks/useAuth";
import { useCart } from "~/hooks/useCart";
import { Logo } from "../../atoms/logo/Logo";
import { Button } from "../../atoms/button/Button";
import { useState } from "react";

/**
 * Componente Organismo: Header
 *
 * Renderiza la barra de navegación superior, logo, menú,
 * información de usuario y botón de carrito.
 * Reemplaza el <header> y <nav> de index.html.
 * Es responsive (se adapta a móvil).
 */
export const Header = () => {
  // Hooks para obtener estado global
  const { currentUser, logout } = useAuth();
  const { totalItems } = useCart();
  
  // Estado local para manejar el menú móvil
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Clase para los enlaces de navegación
  // NavLink de React Router nos permite saber si el enlace está "activo"
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 rounded-full transition-colors ${
      isActive
        ? 'bg-chocolate text-white'
        : 'text-marron hover:bg-chocolate hover:text-white'
    }`;

  return (
    <header className="bg-gradient-to-r from-rosa to-crema shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* 1. Logo */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        {/* 2. Menú de Navegación (Desktop) */}
        <ul className="hidden lg:flex items-center space-x-4">
          <li><NavLink to="/" className={navLinkClasses} end>Inicio</NavLink></li>
          <li><NavLink to="/products" className={navLinkClasses}>Productos</NavLink></li>
          <li><NavLink to="/blog" className={navLinkClasses}>Blog</NavLink></li>
          <li><NavLink to="/contact" className={navLinkClasses}>Contacto</NavLink></li>
          
          {/* Mostramos login/registro SOLO si no hay usuario */}
          {!currentUser && (
            <>
              <li><NavLink to="/register" className={navLinkClasses}>Registro</NavLink></li>
              <li><NavLink to="/login" className={navLinkClasses}>Iniciar Sesión</NavLink></li>
            </>
          )}
        </ul>

        {/* 3. Acciones (Usuario y Carrito) */}
        <div className="hidden lg:flex items-center space-x-4">
          {currentUser ? (
            // Si el usuario está logueado
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium">Hola, {currentUser.nombre.split(' ')[0]}</span>
              <Button variant="secondary" onClick={logout} className="py-2 px-4">
                <i className="fas fa-sign-out-alt"></i>
              </Button>
            </div>
          ) : (
            // Si no está logueado (no mostramos nada, ya están en el menú)
            null
          )}
          
          {/* Botón de Carrito */}
          <Link to="/cart" className="relative bg-chocolate text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-chocolate-hover transition-transform hover:scale-110">
            <i className="fas fa-shopping-cart"></i>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-dorado text-chocolate w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        {/* 4. Botón de Menú Móvil (Hamburguesa) */}
        <button
          className="lg:hidden text-chocolate text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Abrir menú"
        >
          <i className="fas fa-bars"></i>
        </button>
      </nav>

      {/* 5. Panel de Menú Móvil */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-crema shadow-lg absolute top-full left-0 w-full z-40">
          <ul className="flex flex-col p-4 space-y-2">
            <li><NavLink to="/" className={navLinkClasses} end onClick={() => setIsMobileMenuOpen(false)}>Inicio</NavLink></li>
            <li><NavLink to="/products" className={navLinkClasses} onClick={() => setIsMobileMenuOpen(false)}>Productos</NavLink></li>
            <li><NavLink to="/blog" className={navLinkClasses} onClick={() => setIsMobileMenuOpen(false)}>Blog</NavLink></li>
            <li><NavLink to="/contact" className={navLinkClasses} onClick={() => setIsMobileMenuOpen(false)}>Contacto</NavLink></li>
            
            <hr className="my-2 border-rosa" />

            {currentUser ? (
              // Si está logueado en móvil
              <>
                <li className="px-4 py-2 text-marron font-medium">Hola, {currentUser.nombre}</li>
                <li>
                  <Button variant="secondary" onClick={logout} fullWidth>
                    Cerrar Sesión
                  </Button>
                </li>
              </>
            ) : (
              // Si no está logueado en móvil
              <>
                <li><NavLink to="/register" className={navLinkClasses} onClick={() => setIsMobileMenuOpen(false)}>Registro</NavLink></li>
                <li><NavLink to="/login" className={navLinkClasses} onClick={() => setIsMobileMenuOpen(false)}>Iniciar Sesión</NavLink></li>
              </>
            )}

            <hr className="my-2 border-rosa" />
            
            {/* Carrito en móvil */}
            <li>
              <Button to="/cart" variant="primary" fullWidth onClick={() => setIsMobileMenuOpen(false)}>
                <i className="fas fa-shopping-cart"></i>
                <span>Ver Carrito ({totalItems})</span>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};