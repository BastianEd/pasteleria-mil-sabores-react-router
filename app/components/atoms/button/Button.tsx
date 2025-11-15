import * as React from "react";
import { Link } from "react-router-dom";

// Definimos los props que nuestro botón puede aceptar
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary'; // Estilos: primario o secundario
  to?: string; // Si se provee 'to', el botón se renderiza como un Link
  fullWidth?: boolean;
}

/**
 * Componente Átomo: Botón (Button)
 *
 * Un botón reutilizable con estilos predefinidos.
 * Reemplaza las clases .btn-primary y .btn-secondary del CSS original.
 * Si recibe un prop 'to', se comporta como un Link de React Router.
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  to,
  fullWidth = false,
  className = '',
  ...props
}) => {
  // Clases base de Tailwind para todos los botones
  const baseClasses = "px-6 py-3 rounded-full font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2";

  // Clases específicas para cada variante
  const variantClasses = {
    primary: "bg-chocolate text-white hover:bg-chocolate-hover hover:-translate-y-0.5 shadow-md",
    secondary: "bg-rosa text-marron hover:bg-salmon hover:-translate-y-0.5",
  };

  // Clases para ancho completo
  const widthClass = fullWidth ? "w-full" : "";

  // Combinamos todas las clases
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${widthClass} ${className}`;

  // Si el botón tiene un prop 'to', lo renderizamos como un <Link> de React Router
  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...(props as any)}>
        {children}
      </Link>
    );
  }

  // Si no, es un botón normal
  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};