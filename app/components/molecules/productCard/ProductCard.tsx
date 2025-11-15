import { Link } from "react-router";
import { useCart } from "~/hooks/useCart";
import type { Product } from "~/types";

/**
 * Props del componente ProductCard
 */
interface ProductCardProps {
    product: Product;
}

/**
 * Componente Molécula: ProductCard
 *
 * Tarjeta de producto que muestra:
 * - Imagen del producto
 * - Categoría
 * - Nombre
 * - Descripción
 * - Precio
 * - Botón para agregar al carrito
 * - Botón para ver detalles
 */
export const ProductCard = ({ product }: ProductCardProps) => {
    const { addItem } = useCart();

    /**
     * Función para agregar el producto al carrito
     */
    const handleAddToCart = () => {
        addItem(product);
    };

    /**
     * Función para formatear el precio en formato chileno
     */
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('es-CL', {
            style: 'currency',
            currency: 'CLP',
            minimumFractionDigits: 0,
        }).format(price);
    };

    return (
        <article className="product-card">
            {/*
        ============================================
        IMAGEN DEL PRODUCTO
        ============================================
      */}
            <div className="relative h-48 bg-rosa flex items-center justify-center overflow-hidden">
                <img
                    src={product.imagen}
                    alt={product.nombre}
                    className="w-full h-full object-cover"
                />

                {/* Badge de categoría */}
                <span className="absolute top-2 right-2 bg-dorado text-chocolate px-3 py-1 rounded-full text-xs font-bold">
          {product.categoria}
        </span>
            </div>

            {/*
        ============================================
        INFORMACIÓN DEL PRODUCTO
        ============================================
      */}
            <div className="p-6 space-y-3">
                {/* Nombre del producto */}
                <h4 className="font-pacifico text-xl text-chocolate line-clamp-2">
                    {product.nombre}
                </h4>

                {/* Descripción del producto */}
                <p className="text-sm text-gris line-clamp-2 leading-relaxed">
                    {product.descripcion}
                </p>

                {/* Precio del producto */}
                <p className="text-2xl font-bold text-chocolate">
                    {formatPrice(product.precio)}
                </p>

                {/*
          ============================================
          ACCIONES DEL PRODUCTO
          ============================================
          Botón agregar al carrito + botón ver detalles
        */}
                <div className="flex gap-2 pt-2">
                    {/* Botón: Agregar al carrito */}
                    <button
                        onClick={handleAddToCart}
                        className="flex-1 bg-chocolate text-white px-4 py-2 rounded-full font-medium hover:bg-chocolate-hover transition-all duration-300 hover:scale-105"
                    >
                        <i className="fas fa-cart-plus mr-2"></i>
                        Agregar
                    </button>

                    {/* Botón: Ver detalles */}
                    <Link
                        to={`/products/${product.codigo}`}
                        className="bg-rosa text-marron w-10 h-10 rounded-full flex items-center justify-center hover:bg-salmon transition-all duration-300 hover:scale-105"
                        title="Ver detalles"
                    >
                        <i className="fas fa-eye"></i>
                    </Link>
                </div>
            </div>
        </article>
    );
};
