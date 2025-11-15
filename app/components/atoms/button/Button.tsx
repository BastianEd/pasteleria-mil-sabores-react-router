import { Link } from "react-router";
import type { ReactNode } from "react";

/**
 * Tipo de propiedades del componente Button
 */
interface ButtonProps {
    children: ReactNode;
    to?: string; // Si se proporciona, renderiza un Link
    onClick?: () => void; // Si se proporciona, renderiza un button
    variant?: "primary" | "secondary"; // Estilo del botón
    className?: string; // Clases adicionales
    fullWidth?: boolean; // Si debe ocupar todo el ancho
    type?: "button" | "submit" | "reset"; // Tipo de botón (solo para <button>)
    disabled?: boolean; // Estado deshabilitado
}

/**
 * Componente Átomo: Button
 *
 * Botón reutilizable que puede ser:
 * - Un enlace interno (Link de React Router)
 * - Un botón interactivo (button)
 *
 * Variantes:
 * - primary: Color chocolate (predeterminado)
 * - secondary: Color rosa
 */
export const Button = ({
                           children,
                           to,
                           onClick,
                           variant = "primary",
                           className = "",
                           fullWidth = false,
                           type = "button",
                           disabled = false,
                       }: ButtonProps) => {
    // Clases base compartidas
    const baseClasses = `
    inline-flex items-center justify-center gap-2 
    px-6 py-3 rounded-full font-semibold 
    transition-all duration-300 
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:-translate-y-0.5'}
  `;

    // Clases específicas según la variante
    const variantClasses = {
        primary: `
      bg-chocolate text-white 
      shadow-suave hover:shadow-media
      ${!disabled && 'hover:bg-chocolate-hover'}
    `,
        secondary: `
      bg-rosa text-marron 
      ${!disabled && 'hover:bg-salmon'}
    `,
    };

    // Combinar todas las clases
    const finalClasses = `${baseClasses} ${variantClasses[variant]} ${className}`.trim();

    // Si tiene la prop "to", renderizar como Link
    if (to) {
        return (
            <Link to={to} className={finalClasses}>
                {children}
            </Link>
        );
    }

    // Si tiene la prop "onClick", renderizar como button
    return (
        <button
            type={type}
            onClick={onClick}
            className={finalClasses}
            disabled={disabled}
        >
            {children}
        </button>
    );
};
