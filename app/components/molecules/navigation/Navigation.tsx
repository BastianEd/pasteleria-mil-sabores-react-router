import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "~/hooks/useAuth";
import { useCart } from "~/hooks/useCart";

/**
 * Componente Molécula: Navigation (Versión Corregida y Moderna)
 *
 * Maneja los enlaces de navegación, el menú móvil y las
 * acciones de usuario (login/logout/carrito).
 *
 * Lógica Responsive (Mobile-First con breakpoint 'md:'):
 * - 'hidden md:flex': Oculto por defecto (móvil), se muestra como flex en 'md' (768px) y superior.
 * - 'md:hidden': Visible por defecto (móvil), se oculta en 'md' (768px) y superior.
 */
export const Navigation = () => {
    const { currentUser, logout } = useAuth();
    const { totalItems } = useCart();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <> {/* Usamos un fragmento para que el panel móvil absoluto funcione correctamente */}

            {/*
            ============================================
            NAVEGACIÓN DESKTOP (md: 768px y superior)
            ============================================
            Este contenedor agrupa los enlaces y las acciones del usuario.
            Está oculto en móvil y visible en desktop.
            */}
            <div className="hidden md:flex items-center gap-6">

                {/* === Lista de Enlaces de Navegación === */}
                <ul className="flex items-center gap-2">
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

                    {/* === Enlaces de Registro/Login (Solo si no está logueado) === */}
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

                {/* === Acciones de Usuario (Perfil y Carrito) === */}
                <div className="flex items-center gap-4">
                    {currentUser ? (
                        <div className="flex items-center gap-3">
                            <span className="text-sm font-medium text-marron">
                                Hola, {currentUser.nombre.split(' ')[0]}
                            </span>
                            {/* Botón de Logout con texto para mejor UX en desktop */}
                            <button
                                onClick={logout}
                                className="bg-rosa text-marron px-4 py-2 rounded-full text-sm font-medium hover:bg-salmon transition-all duration-300"
                            >
                                <i className="fas fa-sign-out-alt mr-1"></i>
                                Salir
                            </button>
                        </div>
                    ) : null}

                    {/* === Botón del Carrito === */}
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
            </div>

            {/*
            ============================================
            NAVEGACIÓN MÓVIL (hasta md: 768px)
            ============================================
            Este contenedor agrupa el botón de hamburguesa y el panel desplegable.
            Está visible en móvil y oculto en desktop.
            */}
            <div className="md:hidden">
                {/* === Botón Hamburguesa === */}
                <button
                    className="text-chocolate text-2xl z-50"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Abrir menú"
                >
                    <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </button>

                {/* === Panel Móvil Desplegable === */}
                {isMobileMenuOpen && (
                    <div className="bg-white shadow-fuerte absolute top-full left-0 w-full z-40 animate-fade-in">
                        {/* * El contenido interno del menú móvil se mantiene idéntico,
                          * ya que indicaste que esta parte funcionaba bien.
                        */}
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
            </div>
        </>
    );
};