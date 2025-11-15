import { Link } from "react-router-dom";

/**
 * Componente Organismo: Footer
 *
 * Pie de página con:
 * - Información de la empresa
 * - Enlaces de navegación
 * - Categorías de productos
 * - Información adicional
 * - Redes sociales
 * - Copyright
 */
export const Footer = () => {
    return (
        <footer className="gradient-footer text-white mt-20">
            <div className="container mx-auto px-4 py-12">
                {/*
          ============================================
          CONTENIDO PRINCIPAL DEL FOOTER
          ============================================
          Grid con 4 columnas en desktop
        */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/*
            === COLUMNA 1: INFORMACIÓN DE LA EMPRESA ===
          */}
                    <div className="space-y-4">
                        <h4 className="font-pacifico text-2xl text-dorado mb-4">
                            Pastelería Mil Sabores
                        </h4>
                        <p className="text-sm leading-relaxed opacity-90">
                            50 años endulzando la vida de las familias chilenas con productos
                            de repostería de la más alta calidad.
                        </p>

                        {/* Redes Sociales */}
                        <div className="flex gap-3 mt-4">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-dorado hover:text-chocolate transition-all hover:-translate-y-1"
                                title="Facebook"
                                aria-label="Síguenos en Facebook"
                            >
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-dorado hover:text-chocolate transition-all hover:-translate-y-1"
                                title="Instagram"
                                aria-label="Síguenos en Instagram"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-dorado hover:text-chocolate transition-all hover:-translate-y-1"
                                title="Twitter/X"
                                aria-label="Síguenos en Twitter"
                            >
                                <i className="fab fa-x-twitter"></i>
                            </a>
                        </div>
                    </div>

                    {/*
            === COLUMNA 2: NAVEGACIÓN ===
          */}
                    <div>
                        <h4 className="font-pacifico text-xl text-dorado mb-4">
                            Navegación
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    to="/"
                                    className="text-sm hover:text-dorado hover:translate-x-1 transition-all inline-block"
                                >
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/products"
                                    className="text-sm hover:text-dorado hover:translate-x-1 transition-all inline-block"
                                >
                                    Productos
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/blog"
                                    className="text-sm hover:text-dorado hover:translate-x-1 transition-all inline-block"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="text-sm hover:text-dorado hover:translate-x-1 transition-all inline-block"
                                >
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/*
            === COLUMNA 3: CATEGORÍAS ===
          */}
                    <div>
                        <h4 className="font-pacifico text-xl text-dorado mb-4">
                            Categorías
                        </h4>
                        <ul className="space-y-2">
                            <li className="text-sm hover:text-dorado hover:translate-x-1 transition-all inline-block cursor-pointer">
                                Tortas Especiales
                            </li>
                            <li className="text-sm hover:text-dorado hover:translate-x-1 transition-all inline-block cursor-pointer">
                                Postres Individuales
                            </li>
                            <li className="text-sm hover:text-dorado hover:translate-x-1 transition-all inline-block cursor-pointer">
                                Productos Sin Gluten
                            </li>
                            <li className="text-sm hover:text-dorado hover:translate-x-1 transition-all inline-block cursor-pointer">
                                Opciones Veganas
                            </li>
                        </ul>
                    </div>

                    {/*
            === COLUMNA 4: INFORMACIÓN ===
          */}
                    <div>
                        <h4 className="font-pacifico text-xl text-dorado mb-4">
                            Información
                        </h4>
                        <ul className="space-y-2">
                            <li className="text-sm hover:text-dorado hover:translate-x-1 transition-all inline-block cursor-pointer">
                                Sobre Nosotros
                            </li>
                            <li className="text-sm hover:text-dorado hover:translate-x-1 transition-all inline-block cursor-pointer">
                                Términos y Condiciones
                            </li>
                            <li className="text-sm hover:text-dorado hover:translate-x-1 transition-all inline-block cursor-pointer">
                                Política de Privacidad
                            </li>
                            <li className="text-sm hover:text-dorado hover:translate-x-1 transition-all inline-block cursor-pointer">
                                Estado del Sistema
                            </li>
                        </ul>
                    </div>
                </div>

                {/*
          ============================================
          SECCIÓN INFERIOR DEL FOOTER
          ============================================
          Copyright y créditos
        */}
                <div className="border-t border-white/20 pt-6 text-center space-y-2">
                    <p className="text-sm opacity-80">
                        &copy; 2024 Pastelería Mil Sabores. Todos los derechos reservados.
                    </p>
                    <p className="text-sm opacity-80">
                        Hecho con ❤️ en Chile
                    </p>
                    <p className="text-xs opacity-70">
                        Desarrolladores: Nicolás Fonseca | Bastián Bravo | Bastián Rubio
                    </p>
                </div>
            </div>
        </footer>
    );
};
