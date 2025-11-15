import { Link } from "react-router-dom";

/**
 * Componente Organismo: Footer
 *
 * Renderiza el pie de página con enlaces de navegación,
 * categorías y redes sociales.
 */
export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-chocolate to-chocolate-dark text-white mt-16 pt-12 pb-8">
      <div className="container mx-auto px-4">
        {/* Contenido principal del footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Sección "Sobre Nosotros" */}
          <div className="md:col-span-2">
            <h4 className="text-2xl font-pacifico text-dorado mb-4">
              Pastelería Mil Sabores
            </h4>
            <p className="text-gray-300">
              50 años endulzando la vida de las familias chilenas con productos de repostería de la más alta calidad.
            </p>
            {/* Redes Sociales */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-dorado hover:text-chocolate transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-dorado hover:text-chocolate transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Sección "Navegación" */}
          <div>
            <h4 className="text-lg font-semibold text-dorado mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-dorado transition-colors">Inicio</Link></li>
              <li><Link to="/products" className="hover:text-dorado transition-colors">Productos</Link></li>
              <li><Link to="/blog" className="hover:text-dorado transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-dorado transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Sección "Categorías" */}
          <div>
            <h4 className="text-lg font-semibold text-dorado mb-4">Categorías</h4>
            <ul className="space-y-2">
              <li><Link to="/products" className="hover:text-dorado transition-colors">Tortas Especiales</Link></li>
              <li><Link to="/products" className="hover:text-dorado transition-colors">Postres</Link></li>
              <li><Link to="/products" className="hover:text-dorado transition-colors">Sin Gluten</Link></li>
              <li><Link to="/products" className="hover:text-dorado transition-colors">Opciones Veganas</Link></li>
            </ul>
          </div>
        </div>

        {/* Parte inferior del footer (Copyright) */}
        <div className="border-t border-white/20 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Pastelería Mil Sabores. Todos los derechos reservados.</p>
          <p>Hecho con ❤️ en Chile</p>
          <p className="mt-2">Desarrollado por: Nicolás Fonseca | Bastián Bravo | Bastián Rubio.</p>
        </div>
      </div>
    </footer>
  );
};