import { useAuthContext } from '~/context/AuthContext';

/**
 * Este es el hook que los componentes importarán.
 * Es una simple re-exportación del contexto para mantener
 * la implementación (useAuthContext) separada del consumo (useAuth).
 *
 * En un futuro, podríamos añadir lógica adicional aquí si fuese necesario,
 * sin tener que cambiar los componentes que lo usan.
 */
export const useAuth = () => {
  return useAuthContext();
};