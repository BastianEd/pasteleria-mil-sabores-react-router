import type { Product } from "~/types";
import { formatearPrecio } from "~/lib/utils";
import { useCart } from "~/hooks/useCart";
import { Button } from "../../atoms/button/Button";

interface ProductCardProps {
  product: Product;
}

/**
 * Componente Molécula: ProductCard
 *
 * Muestra un producto en formato de tarjeta.
 * Reemplaza la función 'crearTarjetaProducto' de productos.js.
 * Usa el hook 'useCart' para añadir productos al carrito.
 */
export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Evita la navegación si se hace clic en el botón
    addItem(product);
    // Aquí podrías añadir una notificación
    alert(`${product.nombre} agregado al carrito!`);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative">
        {/*
         * Usamos un aspect-ratio de 4/3 para que todas las imágenes
         * tengan un tamaño consistente. 'object-cover' asegura que la imagen
         * llene el espacio sin distorsionarse.
        */}
        <img
          src={product.imagen}
          alt={product.nombre}
          className="w-full h-48 object-cover"
          // Manejo de error básico: si la imagen no carga, no se muestra
          onError={(e) => (e.currentTarget.style.display = 'none')}
        />
        {/* Fallback en caso de error (no implementado aquí, pero se podría) */}
        
        {/* Categoría */}
        <span className="absolute top-2 right-2 bg-dorado text-chocolate text-xs font-bold px-3 py-1 rounded-full">
          {product.categoria}
        </span>
      </div>

      <div className="p-5">
        <h4 className="font-pacifico text-2xl text-chocolate truncate" title={product.nombre}>
          {product.nombre}
        </h4>
        <p className="text-gray-600 text-sm h-10 my-2 overflow-hidden">
          {product.descripcion}
        </p>
        <div className="text-2xl font-bold text-chocolate my-3">
          {formatearPrecio(product.precio)}
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Button
            onClick={handleAddToCart}
            className="flex-1"
          >
            <i className="fas fa-shopping-cart"></i>
            <span>Agregar</span>
          </Button>
          {/*
           * Podríamos añadir un botón de "Ver más" que lleve
           * a una página de detalle del producto, ej: /products/TC001
           * Por ahora, no está implementado en las rutas.
          */}
          {/* <Button variant="secondary" className="flex-1">
            <i className="fas fa-eye"></i>
          </Button> */}
        </div>
      </div>
    </div>
  );
};