import { useState } from "react";
import { Link, NavLink } from "react-router-dom"; // <-- LA CORRECCIÓN CLAVE
import { useAuth } from "~/hooks/useAuth";
import { useCart } from "~/hooks/useCart";

/**
 * Componente Molécula: Navigation
 *
 * Maneja los enlaces de navegación, el menú móvil y las
 * acciones de usuario (login/logout/carrito).
 */
export const Navigation = () => {
    const { currentUser, logout } = useAuth();
    const { totalItems } = useCart();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <>
            {/*
            ============================================
            MENÚ DE NAVEGACIÓN (DESKTOP)
            ============================================
            */}
            <ul className="hidden lg:flex items-center gap-2">
                <li>
                    <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>
                        Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/products" className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>
                        Productos
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/blog" className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>
                        Blog
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>
                        Contacto
                    </NavLink>
                </li>

                {!currentUser && (
                    <>
                        <li>
                            <NavLink to="/register" className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>
                                Registro
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/login" className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>
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
            */}
            <div className="hidden lg:flex items-center gap-4">
                {currentUser ? (
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
            */}
            <button
                className="lg:hidden text-chocolate text-2xl z-50"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Abrir menú"
            >
                <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>

            {/*
            ============================================
            PANEL DE MENÚ MÓVIL
            ============================================
            */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white shadow-fuerte absolute top-full left-0 w-full z-40 animate-fade-in">
                    <ul className="flex flex-col p-4 space-y-2">
                        <li>
                            <NavLink to="/" end className={({ isActive }) => `nav-link block text-center ${isActive ? 'nav-link-active' : ''}`} onClick={closeMobileMenu}>
                                Inicio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/products" className={({ isActive }) => `nav-link block text-center ${isActive ? 'nav-link-active' : ''}`} onClick={closeMobileMenu}>
                                Productos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog" className={({ isActive }) => `nav-link block text-center ${isActive ? 'nav-link-active' : ''}`} onClick={closeMobileMenu}>
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={({ isActive }) => `nav-link block text-center ${isActive ? 'nav-link-active' : ''}`} onClick={closeMobileMenu}>
                                Contacto
                            </NavLink>
                        </li>

                        <hr className="my-2 border-rosa" />

                        {currentUser ? (
                            <>
                                <li className="px-4 py-2 text-marron font-medium text-center">
                                    Hola, {currentUser.nombre}
                                </li>
                                <li>
                                    <button
                                        onClick={() => {
                                            logout();
                                            closeMobileMenu();
                                        }}
                                        className="btn-secondary w-full"
                                    >
                                        Cerrar Sesión
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <NavLink to="/register" className={({ isActive }) => `nav-link block text-center ${isActive ? 'nav-link-active' : ''}`} onClick={closeMobileMenu}>
                                        Registro
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/login" className={({ isActive }) => `nav-link block text-center ${isActive ? 'nav-link-active' : ''}`} onClick={closeMobileMenu}>
                                        Iniciar Sesión
                                    </NavLink>
                                </li>
                            </>
                        )}

                        <hr className="my-2 border-rosa" />

                        <li>
                            <Link to="/cart" className="btn-primary w-full" onClick={closeMobileMenu}>
                                <i className="fas fa-shopping-cart"></i>
                                <span>Ver Carrito ({totalItems})</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
};