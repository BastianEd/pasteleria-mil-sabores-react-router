import { Link } from "react-router-dom";

/**
 * Componente Átomo: Logo
 *
 * Renderiza el logo y el eslogan, funcionando como un enlace a la Home.
 * Reemplaza la estructura .nav-brand del CSS original.
 */
export const Logo = () => {
  return (
    <Link to="/" className="group">
      <h1 className="font-pacifico text-4xl text-chocolate group-hover:text-chocolate-hover transition-colors">
        Pastelería Mil Sabores
      </h1>
      <span className="text-sm text-marron italic -mt-1 block">
        Dulces momentos desde 1975
      </span>
    </Link>
  );
};