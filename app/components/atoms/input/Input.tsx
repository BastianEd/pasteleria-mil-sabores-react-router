import * as React from "react";

// Definimos los props que nuestro Input puede aceptar
// Extiende las propiedades de un <input> HTML estándar
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  error?: string; // Mensaje de error a mostrar
  containerClassName?: string; // Clases para el div contenedor
}

/**
 * Componente Átomo: Input
 *
 * Un campo de formulario <input> con etiqueta <label> y manejo de errores.
 * Reemplaza la estructura .form-group del CSS original.
 */
export const Input: React.FC<InputProps> = ({
  label,
  id,
  type = "text",
  error,
  containerClassName = "",
  className = "",
  ...props
}) => {
  // Clases de Tailwind para el input, replicando el .form-group input
  const inputClasses = `w-full px-4 py-3 border-2 border-rosa rounded-lg bg-crema focus:outline-none focus:border-chocolate focus:ring-1 focus:ring-chocolate ${className}`;
  
  return (
    <div className={`w-full ${containerClassName}`}>
      <label htmlFor={id} className="block text-sm font-semibold text-marron mb-2">
        {label}
      </label>
      <input
        id={id}
        type={type}
        className={inputClasses}
        {...props}
      />
      {/* Si existe un error, lo mostramos aquí */}
      {error && (
        <p className="text-red-600 text-sm mt-1">{error}</p>
      )}
    </div>
  );
};