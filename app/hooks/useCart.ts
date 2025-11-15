import { useCartContext } from '~/context/CartContext';

/**
 * Hook personalizado para consumir el contexto del carrito.
 * Los componentes importarán esto para acceder al estado del carrito.
 */
export const useCart = () => {
  return useCartContext();
};