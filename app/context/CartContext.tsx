import * as React from "react";
import type { CartItem, Product } from "~/types";
import { useAuth } from "~/hooks/useAuth";
import { calcularEdad, esCumpleanos } from "~/lib/utils";

/**
 * Definimos la "forma" de nuestro contexto de carrito.
 */
interface CartContextType {
  cartItems: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (codigo: string) => void;
  updateQuantity: (codigo: string, newQuantity: number) => void;
  clearCart: () => void;
  // Valores calculados
  subtotal: number;
  descuento: number;
  tipoDescuento: string;
  total: number;
  totalItems: number;
}

// 1. Creamos el Contexto
const CartContext = React.createContext<CartContextType | undefined>(undefined);

/**
 * 2. Creamos el Proveedor (Provider)
 */
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Estado para guardar los items del carrito
  const [cartItems, setCartItems] = React.useState<CartItem[]>(() => {
    // Intentamos cargar el carrito desde localStorage al iniciar
    if (typeof window !== 'undefined') {
      const storedCart = localStorage.getItem("cartItems");
      return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
  });

  // Necesitamos el usuario actual para calcular descuentos
  const { currentUser } = useAuth();

  // Efecto para guardar en localStorage CADA VEZ que el carrito cambie
  React.useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  /**
   * Añade un producto al carrito.
   * Lógica de carrito.js: agregarAlCarrito()
   */
  const addItem = (product: Product, quantity: number = 1) => {
    setCartItems((prevItems) => {
      const itemExistente = prevItems.find((item) => item.codigo === product.codigo);

      if (itemExistente) {
        // Si ya existe, aumenta la cantidad
        return prevItems.map((item) =>
          item.codigo === product.codigo
            ? { ...item, cantidad: item.cantidad + quantity }
            : item
        );
      } else {
        // Si no existe, agrega como nuevo
        return [...prevItems, { ...product, cantidad: quantity }];
      }
    });
    // Aquí podríamos llamar a una notificación
  };

  /**
   * Elimina un producto del carrito.
   * Lógica de carrito.js: eliminarDelCarrito()
   */
  const removeItem = (codigo: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.codigo !== codigo)
    );
  };

  /**
   * Actualiza la cantidad de un producto.
   * Lógica de carrito.js: cambiarCantidad()
   */
  const updateQuantity = (codigo: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      // Si la cantidad es 0 o menos, lo elimina
      removeItem(codigo);
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.codigo === codigo ? { ...item, cantidad: newQuantity } : item
        )
      );
    }
  };

  /**
   * Vacía el carrito.
   */
  const clearCart = () => {
    setCartItems([]);
  };

  // --- Cálculos (Reemplazan carrito.js: calcularSubtotal, etc.) ---
  
  // Usamos React.useMemo para que estos valores solo se recalculen
  // cuando cartItems o currentUser cambien, no en cada render.

  const subtotal = React.useMemo(() => {
    return cartItems.reduce((total, item) => total + (item.precio * item.cantidad), 0);
  }, [cartItems]);

  const { descuento, tipoDescuento } = React.useMemo(() => {
    let descuento = 0;
    let tipoDescuento = '';
    const DESCUENTO_MAYOR = 0.50; // 50%

    if (currentUser) {
      const edad = calcularEdad(currentUser.fechaNacimiento);

      if (currentUser.tipoUsuario === 'mayor' || edad >= 60) {
        descuento = subtotal * DESCUENTO_MAYOR;
        tipoDescuento = 'Descuento Adulto Mayor (50%)';
      } 
      else if (
        currentUser.tipoUsuario === 'estudiante_duoc' &&
        esCumpleanos(currentUser.fechaNacimiento)
      ) {
        const tortasEnCarrito = cartItems.filter(item => item.categoria.includes('Torta'));
        if (tortasEnCarrito.length > 0) {
            // Regala la torta más cara (o una de ellas si hay varias iguales)
            const tortaMasCara = Math.max(...tortasEnCarrito.map(item => item.precio));
            descuento = tortaMasCara;
            tipoDescuento = 'Torta Gratis Cumpleaños Duoc';
        }
      }
    }

    return { descuento, tipoDescuento };
  }, [cartItems, subtotal, currentUser]);

  const total = React.useMemo(() => subtotal - descuento, [subtotal, descuento]);

  const totalItems = React.useMemo(() => {
    return cartItems.reduce((total, item) => total + item.cantidad, 0);
  }, [cartItems]);

  // 3. Definimos el valor que proveerá el contexto
  const value = {
    cartItems,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    subtotal,
    descuento,
    tipoDescuento,
    total,
    totalItems,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

/**
 * 4. Creamos un Hook personalizado
 * Lo crearemos en app/hooks/useCart.ts
 */
export const useCartContext = () => {
  const context = React.useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCartContext debe ser usado dentro de un CartProvider");
  }
  return context;
};