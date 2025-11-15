import { Link, NavLink } from "react-router";
import { useAuth } from "~/hooks/useAuth";
import { useCart } from "~/hooks/useCart";
import { useState } from "react";

/**
 * Componente Organismo: Header
 *
 * Barra de navegación superior con:
 * - Logo y tagline
 * - Menú de navegación
 * - Información de usuario
 * - Carrito de compras
 * - Menú móvil responsive
 */
export const Header = () => {
    // Hooks para obtener estado global
    const { currentUser, logout } = useAuth();
    const { totalItems } = useCart();

    // Estado local para manejar el menú móvil
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="gradient-hero shadow-media sticky top-0 z-50">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    {/*
            ============================================
            LOGO Y TAGLINE
            ============================================
          */}
                    <div className="flex flex-col flex-shrink-0">
                        <Link
                            to="/"
                            className="font-pacifico text-2xl md:text-3xl text-chocolate hover:opacity-90 transition-opacity"
                        >
                            Pastelería Mil Sabores
                        </Link>
                        <span className="text-xs md:text-sm text-marron italic -mt-1">
              Dulces momentos desde 1975
            </span>
                    </div>

                    {/*
            ============================================
            MENÚ DE NAVEGACIÓN (DESKTOP)
            ============================================
            Solo visible en pantallas grandes (lg)
          */}
                    <ul className="hidden lg:flex items-center gap-2">
                        <li>
                            <NavLink
                                to="/"
                                end
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? 'nav-link-active' : ''}`
                                }
                            >
                                Inicio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/products"
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? 'nav-link-active' : ''}`
                                }
                            >
                                Productos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/blog"
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? 'nav-link-active' : ''}`
                                }
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? 'nav-link-active' : ''}`
                                }
                            >
                                Contacto
                            </NavLink>
                        </li>

                        {/* Mostrar login/registro SOLO si no hay usuario */}
                        {!currentUser && (
                            <>
                                <li>
                                    <NavLink
                                        to="/register"
                                        className={({ isActive }) =>
                                            `nav-link ${isActive ? 'nav-link-active' : ''}`
                                        }
                                    >
                                        Registro
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/login"
                                        className={({ isActive }) =>
                                            `nav-link ${isActive ? 'nav-link-active' : ''}`
                                        }
                                    >
                                        Iniciar Sesión
                                    </NavLink>
                                </li>
                            </>
                        )}
                    </ul>

                    {/*
            ============================================
            ACCIONES DEL USUARIO (DESKTOP)
            ============================================
            Usuario logueado y carrito
          */}
                    <div className="hidden lg:flex items-center gap-4">
                        {currentUser ? (
                            // Si el usuario está logueado
                            <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-marron">
                  Hola, {currentUser.nombre.split(' ')[0]}
                </span>
                                <button
                                    onClick={logout}
                                    className="bg-rosa text-marron px-4 py-2 rounded-full text-sm font-medium hover:bg-salmon transition-all duration-300"
                                >
                                    <i className="fas fa-sign-out-alt"></i>
                                </button>
                            </div>
                        ) : null}

                        {/* Botón de Carrito */}
                        <Link
                            to="/cart"
                            className="relative bg-chocolate text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-chocolate-hover transition-all hover:scale-110 shadow-suave"
                            title="Ver carrito"
                        >
                            <i className="fas fa-shopping-cart"></i>
                            {totalItems > 0 && (
                                <span className="absolute -top-2 -right-2 bg-dorado text-chocolate w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                  {totalItems}
                </span>
                            )}
                        </Link>
                    </div>

                    {/*
            ============================================
            BOTÓN MENÚ HAMBURGUESA (MÓVIL)
            ============================================
            Solo visible en pantallas pequeñas
          */}
                    <button
                        className="lg:hidden text-chocolate text-2xl z-50"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Abrir menú"
                    >
                        <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </button>
                </div>
            </nav>

            {/*
        ============================================
        PANEL DE MENÚ MÓVIL
        ============================================
        Menú deslizable desde el lado izquierdo
      */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white shadow-fuerte absolute top-full left-0 w-full z-40 animate-fade-in">
                    <ul className="flex flex-col p-4 space-y-2">
                        <li>
                            <NavLink
                                to="/"
                                end
                                className={({ isActive }) =>
                                    `nav-link block text-center ${isActive ? 'nav-link-active' : ''}`
                                }
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Inicio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/products"
                                className={({ isActive }) =>
                                    `nav-link block text-center ${isActive ? 'nav-link-active' : ''}`
                                }
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Productos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/blog"
                                className={({ isActive }) =>
                                    `nav-link block text-center ${isActive ? 'nav-link-active' : ''}`
                                }
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `nav-link block text-center ${isActive ? 'nav-link-active' : ''}`
                                }
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Contacto
                            </NavLink>
                        </li>

                        <hr className="my-2 border-rosa" />

                        {currentUser ? (
                            // Si está logueado en móvil
                            <>
                                <li className="px-4 py-2 text-marron font-medium text-center">
                                    Hola, {currentUser.nombre}
                                </li>
                                <li>
                                    <button
                                        onClick={() => {
                                            logout();
                                            setIsMobileMenuOpen(false);
                                        }}
                                        className="btn-secondary w-full"
                                    >
                                        Cerrar Sesión
                                    </button>
                                </li>
                            </>
                        ) : (
                            // Si no está logueado en móvil
                            <>
                                <li>
                                    <NavLink
                                        to="/register"
                                        className={({ isActive }) =>
                                            `nav-link block text-center ${isActive ? 'nav-link-active' : ''}`
                                        }
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Registro
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/login"
                                        className={({ isActive }) =>
                                            `nav-link block text-center ${isActive ? 'nav-link-active' : ''}`
                                        }
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Iniciar Sesión
                                    </NavLink>
                                </li>
                            </>
                        )}

                        <hr className="my-2 border-rosa" />

                        {/* Carrito en móvil */}
                        <li>
                            <Link
                                to="/cart"
                                className="btn-primary w-full"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <i className="fas fa-shopping-cart"></i>
                                <span>Ver Carrito ({totalItems})</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};
