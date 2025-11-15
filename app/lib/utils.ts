/**
 * Formatea un número como moneda chilena (CLP).
 * Ej: 45000 -> "$45.000"
 */
export const formatearPrecio = (precio: number): string => {
  return `$${precio.toLocaleString('es-CL')}`;
}

/**
 * Calcula la edad de una persona basada en su fecha de nacimiento.
 */
export const calcularEdad = (fechaNacimiento: string): number => {
  const hoy = new Date();
  const nacimiento = new Date(fechaNacimiento);
  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const mes = hoy.getMonth() - nacimiento.getMonth();

  if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
      edad--;
  }
  return edad;
}

/**
 * Verifica si hoy es el cumpleaños de alguien.
 */
export const esCumpleanos = (fechaNacimiento: string): boolean => {
  const hoy = new Date();
  // Sumamos 1 al día de nacimiento porque new Date() puede tener problemas de zona horaria
  // y tomar el día anterior.
  const nacimiento = new Date(fechaNacimiento + 'T00:00:00'); 
  
  return (
      hoy.getMonth() === nacimiento.getMonth() &&
      hoy.getDate() === nacimiento.getDate()
  );
}

/**
 * Valida un email según las reglas del proyecto original.
 */
export const validarEmail = (email: string): boolean => {
    const dominiosPermitidos = ['gmail.com', 'duoc.cl', 'profesor.duoc.cl'];
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!regex.test(email)) return false;
    
    const dominio = email.split('@')[1];
    return dominiosPermitidos.includes(dominio);
}

/**
 * Determina el tipo de usuario basado en el email.
 */
export const determinarTipoUsuario = (email: string): 'estudiante_duoc' | 'regular' => {
    if (email.endsWith('@duoc.cl') || email.endsWith('@profesor.duoc.cl')) {
        return 'estudiante_duoc';
    }
    return 'regular';
}