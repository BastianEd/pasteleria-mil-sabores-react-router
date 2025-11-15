import type { Route } from "./+types/cart"; // (Necesitarás crear este archivo)
import { Link } from "react-router-dom";
import { useCart } from "~/hooks/useCart";
import { formatearPrecio } from "~/lib/utils";
import { Button } from "~/components/atoms/button/Button";

// (Crea un archivo vacío en app/routes/+types/cart.ts para que esto funcione)

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Carrito de Compras - Mil Sabores" },
  ];
}

/**
 * Componente de Página: Carrito
 *
 * Muestra los productos añadidos al carrito y el resumen de la compra.
 * Consume datos de 'useCart'.
 */
export default function CartPage() {
  const { 
    cartItems, 
    removeItem, 
    updateQuantity, 
    clearCart,
    subtotal,
    descuento,
    tipoDescuento,
    total 
  } = useCart();

  // Simulación de "Procesar Pedido"
  const handleProcesarPedido = () => {
    alert(
      `¡Pedido procesado exitosamente!\n` +
      `Subtotal: ${formatearPrecio(subtotal)}\n` +
      (descuento > 0 ? `Descuento: -${formatearPrecio(descuento)} (${tipoDescuento})\n` : '') +
      `Total: ${formatearPrecio(total)}\n\n` +
      `¡Gracias por tu compra!`
    );
    clearCart();
    // En una app real, navegaríamos a una página de "gracias"
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-pacifico text-center text-chocolate mb-8">
        Carrito de Compras
      </h2>

      {cartItems.length === 0 ? (
        // --- VISTA DE CARRITO VACÍO ---
        <div className="text-center py-16 bg-white/50 rounded-lg shadow-md">
          <i className="fas fa-shopping-cart text-6xl text-gray-400 mb-4"></i>
          <h3 className="text-2xl font-pacifico text-chocolate mb-2">
            Tu carrito está vacío
          </h3>
          <p className="text-gray-600 mb-6">
            ¡Agrega algunos productos deliciosos!
          </p>
          <Button to="/products" variant="primary">
            <i className="fas fa-store"></i>
            Ver Productos
          </Button>
        </div>
      ) : (
        // --- VISTA DE CARRITO LLENO ---
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Columna de Items del Carrito */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map(item => (
              <div key={item.codigo} className="flex flex-col sm:flex-row items-center bg-white p-4 rounded-lg shadow-md gap-4">
                <img src={item.imagen} alt={item.nombre} className="w-24 h-24 object-cover rounded-md flex-shrink-0" />
                
                <div className="flex-grow text-center sm:text-left">
                  <h4 className="text-xl font-pacifico text-chocolate">{item.nombre}</h4>
                  <p className="text-lg font-semibold">{formatearPrecio(item.precio)}</p>
                </div>
                
                {/* Controles de Cantidad */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <button 
                    onClick={() => updateQuantity(item.codigo, item.cantidad - 1)}
                    className="bg-chocolate text-white w-8 h-8 rounded-full font-bold"
                  >
                    -
                  </button>
                  <span className="w-12 text-center font-bold text-lg">{item.cantidad}</span>
                  <button 
                    onClick={() => updateQuantity(item.codigo, item.cantidad + 1)}
                    className="bg-chocolate text-white w-8 h-8 rounded-full font-bold"
                  >
                    +
                  </button>
                </div>

                {/* Botón Eliminar */}
                <button
                  onClick={() => removeItem(item.codigo)}
                  className="bg-red-500 text-white w-8 h-8 rounded-full hover:bg-red-600 transition-colors"
                  title="Eliminar producto"
                >
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            ))}
          </div>

          {/* Columna de Resumen del Pedido */}
          <div className="lg:col-span-1 sticky top-28">
            <div className="bg-white p-6 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-pacifico text-chocolate text-center mb-6">
                Resumen del Pedido
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between text-lg">
                  <span>Subtotal:</span>
                  <span className="font-semibold">{formatearPrecio(subtotal)}</span>
                </div>
                
                {/* Mostramos el descuento solo si aplica */}
                {descuento > 0 && (
                  <div className="flex justify-between text-lg text-green-600">
                    <span>{tipoDescuento}:</span>
                    <span className="font-semibold">-{formatearPrecio(descuento)}</span>
                  </div>
                )}

                <hr className="my-2 border-rosa" />
                
                <div className="flex justify-between text-2xl font-bold text-chocolate">
                  <span>Total:</span>
                  <span>{formatearPrecio(total)}</span>
                </div>
              </div>

              {/* Acciones del Carrito */}
              <div className="mt-8 space-y-3">
                <Button onClick={handleProcesarPedido} variant="primary" fullWidth>
                  <i className="fas fa-credit-card"></i>
                  Proceder al Pago
                </Button>
                <Button onClick={clearCart} variant="secondary" fullWidth>
                  <i className="fas fa-trash"></i>
                  Vaciar Carrito
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}